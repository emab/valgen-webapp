import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import valuesReducer from './components/tabs/store/reducer';
import allValuesReducer from './store/reducer';
import { Tab } from './types/Tab';

const rootReducer = combineReducers({
  personal: valuesReducer(Tab.PERSONAL),
  current: valuesReducer(Tab.CURRENT),
  ideal: valuesReducer(Tab.IDEAL), 
  all: allValuesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
