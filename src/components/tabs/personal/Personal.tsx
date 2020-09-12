import React from 'react';
import TabBase from '../TabBase';
import { addPersonalValue, removePersonalValue } from '../store/actions';
import { Tab } from '../../../types/Tab';

const PersonalTab: React.FC = () => {
  return (
    <TabBase
      title={'Personal Values'}
      addValue={addPersonalValue}
      removeValue={removePersonalValue}
      tab={Tab.PERSONAL}
    />
  );
};

export default PersonalTab;
