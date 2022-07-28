/*------------------------------------------------------------------------------------------------------------------------------------------
 * OvO.tsx
 * WRITER : 최정근
 * DATE : 2022-07-28
 * DISCRIPTION : 
 * TYPE : Component
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import { OvOContext } from './context';
import _useOvO from './hook/useOvO';
import _useOvOInner from './hook/useOvOInner';

interface OvOProps {
  width: number;
  height: number;
  children?: React.ReactNode;
}

function OvO(props: OvOProps) {
  const { width, height, children } = props;

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const useOvO = _useOvO(canvasRef);

  React.useEffect(() => {
    if (canvasRef.current !== null) {
      // Canvas size 설정
      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
    }
  }, [width, height]);

  return (
    <div data-component="ovO">
      <canvas ref={canvasRef} />
      <OvOContext.DataContext.Provider value={useOvO}>{children}</OvOContext.DataContext.Provider>
    </div>
  );
}

namespace OvO {
  export const useOvO = _useOvO;
  export const useOvOInner = _useOvOInner;
}

export default OvO;
