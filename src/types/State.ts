import { Value } from './Value';

export interface State {
  personal: {
    values: Value[];
  };
  current: {
    values: Value[];
  };
  ideal: {
    values: Value[];
  };
  all: {
    values: Value[];
  }
}
