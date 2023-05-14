import { FC, ReactElement, useEffect, useRef } from 'react';

import ScrollSyncContext from './context/ContextScrollSync';

interface ScrollSyncProps {
  onSync?: (el: Element) => void;
  children: ReactElement<any>;
  proportional?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  enabled?: boolean;
}

const ScrollSync: FC<ScrollSyncProps> = ({
  onSync,
  children,
  proportional = true,
  vertical = true,
  horizontal = true,
  enabled = true,
}) => {
  const panesRef = useRef<{ [group: string]: HTMLElement[] }>({});

  const addEvents = (node: HTMLElement, groups: string[]) => {
    node.onscroll = () => handlePaneScroll(node, groups);
  };

  const removeEvents = (node: HTMLElement) => {
    node.onscroll = null;
  };

  const syncScrollPositions = (scrolledPane: HTMLElement, groups: string[]) => {
    groups.forEach((group) => {
      panesRef.current[group]?.forEach((pane) => {
        /* For all panes beside the currently scrolling one */
        if (scrolledPane !== pane) {
          /* Remove event listeners from the node that we'll manipulate */
          removeEvents(pane);
          syncScrollPosition(scrolledPane, pane);
          /* Re-attach event listeners after we're done scrolling */
          window.requestAnimationFrame(() => {
            addEvents(pane, groups);
          });
        }
      });
    });
    if (onSync) {
      onSync(scrolledPane);
    }
  };

  const registerPane = (node: HTMLElement, groups: string[]) => {
    groups.forEach((group) => {
      if (!panesRef.current[group]) {
        panesRef.current[group] = [];
      }

      if (!findPane(node, group)) {
        if (panesRef.current[group].length > 0) {
          syncScrollPosition(panesRef.current[group][0], node);
        }
        panesRef.current[group].push(node);
      }
    });
    addEvents(node, groups);
  };

  const unregisterPane = (node: HTMLElement, groups: string[]) => {
    groups.forEach((group) => {
      const paneIndex = panesRef.current[group]?.indexOf(node);
      if (paneIndex !== undefined && paneIndex > -1) {
        removeEvents(node);
        panesRef.current[group].splice(paneIndex, 1);
      }
    });
  };

  const findPane = (node: HTMLElement, group: string) => {
    if (!panesRef.current[group]) {
      return false;
    }
    return panesRef.current[group].find((pane) => pane === node);
  };

  const handlePaneScroll = (node: HTMLElement, groups: string[]) => {
    if (!enabled) {
      return;
    }

    window.requestAnimationFrame(() => {
      syncScrollPositions(node, groups);
    });
  };

  const syncScrollPosition = (scrolledPane: HTMLElement, pane: Element) => {
    const { scrollTop, scrollHeight, clientHeight, scrollLeft, scrollWidth, clientWidth } =
      scrolledPane;

    const scrollTopOffset = scrollHeight - clientHeight;
    const scrollLeftOffset = scrollWidth - clientWidth;

    /* Calculate the actual pane height */
    const paneHeight = pane.scrollHeight - clientHeight;
    const paneWidth = pane.scrollWidth - clientWidth;

    /* Adjust the scrollTop position of it accordingly */
    if (vertical && scrollTopOffset > 0) {
      pane.scrollTop = proportional ? (paneHeight * scrollTop) / scrollTopOffset : scrollTop;
    }
    if (horizontal && scrollLeftOffset > 0) {
      pane.scrollLeft = proportional ? (paneWidth * scrollLeft) / scrollLeftOffset : scrollLeft;
    }
  };

  useEffect(() => {
    const panes = panesRef.current;

    return () => {
      Object.values(panes).forEach((group) => {
        group.forEach((pane) => {
          removeEvents(pane);
        });
      });
    };
  }, []);

  const value = {
    registerPane,
    unregisterPane,
  };
  return <ScrollSyncContext.Provider value={value}>{children}</ScrollSyncContext.Provider>;
};

export default ScrollSync;
