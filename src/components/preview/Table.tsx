import React, { useEffect, useState } from 'react';
import {
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from '@material-ui/core';
import { Values } from '../../types/Values';
import { State } from '../../types/State';
import { connect } from 'react-redux';
import { Value } from '../../types/Value';

interface Props {
  displayValue: Values;
  personalValues: Value[];
  currentValues: Value[];
  idealValues: Value[];
}

interface Row {
  value: string;
  level: number;
}

interface ValueRowStyle {
  value: string;
  style: string;
}

const useStyles = makeStyles({
  table: {
    marginTop: 20,
    overflowY: 'hidden',
  },
  thead: {
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
  },
});

const PreviewTable: React.FC<Props> = ({
  displayValue,
  personalValues,
  currentValues,
  idealValues,
}) => {
  const classes = useStyles();
  const [rowStyles, setRowStyles] = useState<ValueRowStyle[]>([]);

  const generateValueRowStyles = () => {
    let newStyles: ValueRowStyle[] = [];
    personalValues.forEach((val) => {
      if (currentValues.some((otherVal) => (otherVal.name === val.name))) {
        newStyles.push({ value: val.name, style: 'bg-purple-300' });
      }
      if (idealValues.some((otherVal) => (otherVal.name === val.name))) {
        newStyles.push({ value: val.name, style: 'bg-blue-300' });
      }
    });
    currentValues.forEach((val) => {
      if (idealValues.some((otherVal) => (otherVal.name === val.name))) {
        newStyles.push({ value: val.name, style: 'bg-red-300' });
      }
    });
    personalValues.forEach((val) => {
      if (currentValues.some((otherVal) => (otherVal.name === val.name))) {
        if (idealValues.some((otherVal) => (otherVal.name === val.name))) {
          newStyles = newStyles.filter(
            (existingVal) => val.name !== existingVal.value
          );

          newStyles.push({ value: val.name, style: 'bg-green-300' });
        }
      }
    });
    setRowStyles(newStyles);
  };

  const populateRows = () => {
    const rows: Row[] = [];
    let values: Value[];
    switch (displayValue) {
      case Values.PERSONAL:
        values = personalValues;
        break;
      case Values.CURRENT:
        values = currentValues;
        break;
      case Values.IDEAL:
        values = idealValues;
    }
    values.forEach((val) => rows.push({ value: val.name, level: val.level }));
    return rows.map((row) => {
      const style = rowStyles.find((val) => val.value === row.value)?.style;
      return (
        <TableRow className={style} key={row.value}>
          <TableCell>{row.value}</TableCell>
          <TableCell align="right">{row.level}</TableCell>
        </TableRow>
      );
    });
  };

  useEffect(() => {
    generateValueRowStyles();
  }, []);

  useEffect(() => {
    setRowStyles([]);
    generateValueRowStyles();
  }, [personalValues, currentValues, idealValues]);

  return (
    <div className="mx-3 overflow-y-hidden">
      <TableContainer component={Paper} className={classes.table}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.thead}>Value</TableCell>
              <TableCell className={classes.thead} align="right">
                Level
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{populateRows()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  personalValues: state.personal.values,
  currentValues: state.current.values,
  idealValues: state.ideal.values,
});

export default connect(mapStateToProps)(PreviewTable);
