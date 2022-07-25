/*------------------------------------------------------------------------------------------------------------------------------------------
 * RootAction.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Redux Action
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import RootData from './RootData';

namespace RootAction {
  export const set = (payload: RootData.IPayload): RootData.IReducerDeepPartial => {
    return {
      type: RootData.ActionType.SET,
      payload: payload,
    };
  };

  export const clear = (): RootData.IReducerDeepPartial => {
    return {
      type: RootData.ActionType.CLEAR,
      payload: {},
    };
  };
}

export default RootAction;
