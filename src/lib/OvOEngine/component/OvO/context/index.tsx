import { createContext } from 'react';
import { UseOvOOutput } from '../hook/useOvO';

export namespace OvOContext {
  export const DataContext = createContext<UseOvOOutput>([
    {
      canvasRef: {
        current: null,
      },
    },
    () => {},
  ]);
}
