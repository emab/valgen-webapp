import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Tab } from '../../types/Tab';
import { resetValues } from '../tabs/store/actions';
import ControlButton from './ControlButton';
import domtoimage from 'dom-to-image';
import AddValue from '../add-value';
import { saveAs } from 'file-saver';
import CheckIcon from '@material-ui/icons/Check';
import { State } from '../../types/State';

interface Props {
  currentTab: Tab;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
  showPreview: boolean;
  togglePreview: (set?: boolean) => void;
  personalCount: number;
  currentCount: number;
  idealCount: number;
}

const Controls: React.FC<Props> = ({
  currentTab,
  setCurrentTab,
  showPreview,
  togglePreview,
  personalCount,
  currentCount,
  idealCount,
}) => {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const handleResetValues = () => {
    dispatch(resetValues());
    setCurrentTab(Tab.PERSONAL);
    togglePreview(false);
  };

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const saveImage = () => {
    const modelDiv = document.getElementById('modelOutput');
    if (modelDiv) {
      domtoimage.toBlob(modelDiv).then((blob) => {
        saveAs(blob, 'diagram.png');
      });
    }
  };

  const handlePreviewButtonClick = () => {
    togglePreview();
  }

  const isComplete = (numSelected: number) => numSelected > 9;

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-2">
            <Button color="primary" variant="contained" onClick={handlePreviewButtonClick}>
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          </div>
          <div className="mr-2">
            <Button
              color="secondary"
              variant="contained"
              onClick={handleResetValues}
            >
              Reset
            </Button>
          </div>
          <div className="flex">
            <Button variant="contained" onClick={toggleShowAdd}>
              Add
            </Button>
            <AddValue open={showAdd} handleClose={toggleShowAdd} />
          </div>
        </div>
        {showPreview && (
          <Button variant="contained" color="primary" onClick={saveImage}>
            Save
          </Button>
        )}
        {!showPreview && (
          <div>
            <ControlButton
              id={'personal'}
              text="Personal"
              highlight={currentTab === Tab.PERSONAL}
              onClick={setCurrentTab}
            >
              {isComplete(personalCount) && <CheckIcon />}
            </ControlButton>

            <ControlButton
              id={'current'}
              text={'Current'}
              highlight={currentTab === Tab.CURRENT}
              onClick={setCurrentTab}
            >
              {isComplete(currentCount) && <CheckIcon />}
            </ControlButton>
            <ControlButton
              id={'ideal'}
              text={'Desired'}
              highlight={currentTab === Tab.IDEAL}
              onClick={setCurrentTab}
            >
              {isComplete(idealCount) && <CheckIcon />}
            </ControlButton>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: State) => ({
  personalCount: state.personal.values.length,
  currentCount: state.current.values.length,
  idealCount: state.ideal.values.length,
});

export default connect(mapStateToProps)(Controls);
