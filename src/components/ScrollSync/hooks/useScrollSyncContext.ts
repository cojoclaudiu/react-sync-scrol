import { useContext } from 'react';

import ScrollSyncContext from '../context/ContextScrollSync';

export const useScrollSyncContext = () => {
  const context = useContext(ScrollSyncContext);

  if (!context) {
    throw new Error('useScrollSyncContext must be used within a ScrollSyncProvider component');
    // or return a default value instead of throwing an error
    // return defaultValue;
  }

  return context;
};
