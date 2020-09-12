import {
  Button,
  createStyles,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Theme,
} from '@material-ui/core';
import React, { useState } from 'react';
import { saveValueToStorage } from '../../util/storage';
import { useDispatch } from 'react-redux';
import { reloadValues } from '../../store/thunk';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 500,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      borderRadius: '5px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface Props {
  open: boolean;
  handleClose: any;
}

const AddValue: React.FC<Props> = ({ open, handleClose }) => {
  const [valueName, setValueName] = useState('');
  const [level, setLevel] = useState(7);
  const [limiting, setLimting] = useState(false);
  const dispatch = useDispatch();

  const handleValueNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValueName(event.target.value);
  };

  const handleLevelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLevel(event.target.value as number);
  };

  const handleLimitingChange = (
    event: React.ChangeEvent<{}>,
    checked: boolean
  ) => {
    console.log(checked);

    setLimting(checked);
  };

  const handleSubmit = () => {
    if (valueName) {
      saveValueToStorage({
        name: limiting ? `${valueName} (L)` : valueName,
        level,
        limiting,
      });
      dispatch(reloadValues());
      handleClose();
    }
  };

  const classes = useStyles();
  const body = (
    <div className={`${classes.paper} flex flex-col`}>
      <h2>Add Value</h2>
      <div className="flex flex-row">
        <TextField
          fullWidth
          label="Value name"
          value={valueName}
          onChange={handleValueNameChange}
        />
        <FormControl>
          <InputLabel shrink>Level</InputLabel>
          <Select label="Level" value={level} onChange={handleLevelChange}>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControlLabel
          control={<Switch name="limiting" color="primary" />}
          value={limiting}
          onChange={handleLimitingChange}
          label="Limiting"
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Value
      </Button>
    </div>
  );
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default AddValue;
