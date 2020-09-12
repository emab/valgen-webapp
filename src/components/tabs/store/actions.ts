import { Tab } from '../../../types/Tab';
import { Value } from '../../../types/Value';

const ADD_PERSONAL_VALUE = `ADD_${Tab.PERSONAL}_VALUE`;
const ADD_CURRENT_VALUE = `ADD_${Tab.CURRENT}_VALUE`;
const ADD_IDEAL_VALUE = `ADD_${Tab.IDEAL}_VALUE`;

const REMOVE_PERSONAL_VALUE = `REMOVE_${Tab.PERSONAL}_VALUE`;
const REMOVE_CURRENT_VALUE = `REMOVE_${Tab.CURRENT}_VALUE`;
const REMOVE_IDEAL_VALUE = `REMOVE_${Tab.IDEAL}_VALUE`;

export const RESET_VALUES = 'RESET_VALUES';

const addValue = (type: Tab) => (value: Value) => {
  switch (type) {
    case Tab.PERSONAL:
      return { type: ADD_PERSONAL_VALUE, value };
    case Tab.CURRENT:
      return { type: ADD_CURRENT_VALUE, value };
    case Tab.IDEAL:
      return { type: ADD_IDEAL_VALUE, value };
  }
};

const removeValue = (type: Tab) => (value: Value) => {
  switch (type) {
    case Tab.PERSONAL:
      return { type: REMOVE_PERSONAL_VALUE, value };
    case Tab.CURRENT:
      return { type: REMOVE_CURRENT_VALUE, value };
    case Tab.IDEAL:
      return { type: REMOVE_IDEAL_VALUE, value };
  }
};

export const resetValues = () => {
  return { type: RESET_VALUES };
};

export const addPersonalValue = addValue(Tab.PERSONAL);
export const addCurrentValue = addValue(Tab.CURRENT);
export const addIdealValue = addValue(Tab.IDEAL);

export const removePersonalValue = removeValue(Tab.PERSONAL);
export const removeCurrentValue = removeValue(Tab.CURRENT);
export const removeIdealValue = removeValue(Tab.IDEAL);
