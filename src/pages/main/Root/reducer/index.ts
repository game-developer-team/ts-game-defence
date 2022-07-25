import { Reducer } from 'redux';
import RootData from './RootData';

const removeIPayload = <T extends RootData.IPayload>(t: T): T => {
  return t;
};

export const initRootState: RootData.IPayload = removeIPayload({});

const RootReducer: Reducer<RootData.IPayload, RootData.IReducer> = (
  state = initRootState,
  { type, payload }: RootData.IReducer,
): RootData.IPayload => {
  switch (type) {
    case RootData.ActionType.SET:
      return { ...state, ...payload };

    case RootData.ActionType.CLEAR:
      return { ...initRootState };

    default:
      return state;
  }
};

export default RootReducer;
