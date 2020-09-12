import { getAllValues } from '../util/getValues';
import { setValues } from './actions';

export const reloadValues = () => (dispatch: any) => {
  const allValues = getAllValues();
  dispatch(setValues(allValues));
};
