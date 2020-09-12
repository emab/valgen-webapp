import { Action } from 'redux';
import { Value } from '../types/Value';
import { ADD_VALUE, SET_VALUES } from './actions';

interface State {
  values: Value[];
}

const initialState: State = {
  values: [],
};

interface ValueAction extends Action {
  value?: Value;
  values?: Value[];
}

const allValuesReducer = (state: State = initialState, action: ValueAction) => {
  switch (action.type) {
    case ADD_VALUE:
      return { ...state, values: [...state.values, action.value] };
    case SET_VALUES:
      return { ...state, values: action.values };
    default:
      return state;
  }
};

export default allValuesReducer;
