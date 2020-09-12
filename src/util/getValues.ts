import { getStoredValues } from './storage';
import { VALUES } from '../valuesArray';

export const getAllValues = () => {
  const storedValues = getStoredValues();
  const allValues = [...VALUES, ...storedValues];
  const sortedValues = allValues.sort((a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return sortedValues;
};
