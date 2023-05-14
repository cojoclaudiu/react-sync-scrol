import { createContext } from 'react';

interface ScrollSyncContextValue {
  registerPane: (node: HTMLElement, groups: string[]) => void;
  unregisterPane: (node: HTMLElement, groups: string[]) => void;
}

const ScrollSyncContext = createContext<ScrollSyncContextValue>({} as ScrollSyncContextValue);

export default ScrollSyncContext;
