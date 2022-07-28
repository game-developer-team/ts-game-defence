/*------------------------------------------------------------------------------------------------------------------------------------------
 * useOvOInner.tsx
 * WRITER : 최정근
 * DATE : 2022-07-28
 * DISCRIPTION : 
 * TYPE : Hook
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import { OvOContext } from '../../context';

const useOvOInner = () => {
  const [state, dispatch] = React.useContext(OvOContext.DataContext);

  return {};
};

export default useOvOInner;
