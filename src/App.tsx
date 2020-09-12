import cn from 'classnames';
import React, { useState } from 'react';
import Controls from './components/controls/Controls';
import Preview from './components/preview';
import TabHandler from './components/tabs/TabHandler';
import './styles/app.css';
import { Tab } from './types/Tab';

const App = () => {
  const [currentTab, setCurrentTab] = useState(Tab.PERSONAL);
  const [showPreview, setShowPreview] = useState(false);
  const togglePreview = (set?: boolean) => setShowPreview(set ?? !showPreview);

  return (
    <div className="h-screen overflow-hidden">
      <div className="h-16 w-full bg-gray-300 p-3 fixed z-10">
        <Controls
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          showPreview={showPreview}
          togglePreview={togglePreview}
        />
      </div>
      <div
        className={cn('h-full pt-16 overflow-auto', { flex: showPreview })}
        id="test"
      >
        {showPreview ? <Preview /> : <TabHandler tab={currentTab} />}
      </div>
    </div>
  );
};

export default App;
