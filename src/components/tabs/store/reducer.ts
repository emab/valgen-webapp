import { Action } from 'redux';
import { Value } from '../../../types/Value';
import { Tab } from '../../../types/Tab';
import { RESET_VALUES } from './actions';

interface State {
  values: Value[];
}

const initialState: State = {
  values: [],
};

interface TabAction extends Action {
  value: Value;
}

const valuesReducer = (valueType: Tab) => (
  state = initialState,
  action: TabAction
) => {
  switch (action.type) {
    case `ADD_${valueType}_VALUE`:
      return {
        ...state,
        values: [...state.values, action.value],
      };
    case `REMOVE_${valueType}_VALUE`:
      return {
        ...state,
        values: [...state.values].filter(
          (val) => val.name !== action.value.name
        ),
      };
    case RESET_VALUES:
      return {
        ...state,
        values: [],
      };
    default:
      return state;
  }
};

export default valuesReducer;
