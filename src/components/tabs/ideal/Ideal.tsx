import React from 'react';
import TabBase from '../TabBase';
import { addIdealValue, removeIdealValue } from '../store/actions';
import { Tab } from '../../../types/Tab';

const PersonalTab: React.FC = () => {
  return (
    <TabBase
      title={'Desired Organisational Values'}
      addValue={addIdealValue}
      removeValue={removeIdealValue}
      tab={Tab.IDEAL}
    />
  );
};

export default PersonalTab;
