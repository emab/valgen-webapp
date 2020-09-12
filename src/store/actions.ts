import { Value } from '../types/Value';

export const ADD_VALUE = 'ADD_VALUE';
export const SET_VALUES = 'SET_VALUES';

export const addValue = (value: Value) => ({ type: ADD_VALUE, value });
export const setValues = (values: Value[]) => ({ type: SET_VALUES, values });
