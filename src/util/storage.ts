import { Value } from '../types/Value';

export const saveValueToStorage = (value: Value) => {
  initStore();
  const currentStoredValues = JSON.parse(
    localStorage.getItem('values') ?? '[]'
  ) as Value[];
  localStorage.setItem(
    'values',
    JSON.stringify([...currentStoredValues, value])
  );
};

export const getStoredValues = (): Value[] => {
  initStore();
  return JSON.parse(localStorage.getItem('values') ?? '[]') as Value[];
};

const initStore = () => {
  if (!localStorage.getItem('values')) {
    localStorage.setItem('values', '[]');
  }
};
