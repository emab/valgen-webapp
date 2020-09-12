import React from 'react';
import TabBase from '../TabBase';
import { addCurrentValue, removeCurrentValue } from '../store/actions';
import { Tab } from '../../../types/Tab';

const PersonalTab: React.FC = () => {
  return (
    <TabBase
      title={'Current Organisational Values'}
      addValue={addCurrentValue}
      removeValue={removeCurrentValue}
      tab={Tab.CURRENT}
    />
  );
};

export default PersonalTab;
