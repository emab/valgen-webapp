import React, { useEffect } from 'react';
import PersonalTab from './personal';
import { Tab } from '../../types/Tab';
import CurrentTab from './current';
import IdealTab from './ideal';
import { useDispatch } from 'react-redux';
import { setValues } from '../../store/actions';
import { getAllValues } from '../../util/getValues';

interface Props {
  tab: Tab;
}

const TabHandler: React.FC<Props> = ({ tab }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValues(getAllValues()));
  });

  switch (tab) {
    case Tab.PERSONAL:
      return <PersonalTab />;
    case Tab.CURRENT:
      return <CurrentTab />;
    case Tab.IDEAL:
      return <IdealTab />;
    default:
      return <div>Woops! Something went wrong!</div>;
  }
};

export default TabHandler;
