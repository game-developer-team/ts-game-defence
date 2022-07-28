/*------------------------------------------------------------------------------------------------------------------------------------------
 * useOvO.tsx
 * WRITER : 최정근
 * DATE : 2022-07-28
 * DISCRIPTION : 
 * TYPE : Hook
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import { DeepPartial } from 'redux';

export type UseOvOOutput = [OvOPayloadType, React.Dispatch<OvODispatchType<OvOPayloadType>>];

export enum OvOActionEnum {
  'SET',
  'CLEAR',
}

export type OvODispatchType<T extends Record<string, any>> = {
  type: OvOActionEnum;
  payload: T;
};

export type OvOPayloadType = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

export namespace OvOActions {
  export const set = (payload: OvOPayloadType): DeepPartial<OvODispatchType<OvOPayloadType>> => {
    return {
      type: OvOActionEnum.SET,
      payload,
    };
  };

  export const clear = (): DeepPartial<OvODispatchType<OvOPayloadType>> => {
    return {
      type: OvOActionEnum.CLEAR,
    };
  };
}

const useOvO = (canvasRef: React.RefObject<HTMLCanvasElement>): UseOvOOutput => {
  const initialOvOData: OvOPayloadType = {
    canvasRef,
  };

  const reducer = (state: OvOPayloadType, { type, payload }: OvODispatchType<OvOPayloadType>): OvOPayloadType => {
    switch (type) {
      case OvOActionEnum.SET:
        return { ...payload };
      case OvOActionEnum.CLEAR:
        return { ...initialOvOData };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialOvOData);

  return [state, dispatch];
};

export default useOvO;
