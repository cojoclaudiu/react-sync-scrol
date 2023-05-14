import { Children, cloneElement, FC, isValidElement, ReactNode, useEffect, useRef } from 'react';

import { useScrollSyncContext } from './hooks/useScrollSyncContext';

interface ScrollSyncElementProps {
  children: ReactNode;
  attachTo?: React.RefObject<any> | (() => void);
  group?: string | string[];
  enabled?: boolean;
}

const ScrollSyncElement: FC<ScrollSyncElementProps> = ({
  children,
  attachTo,
  group = 'default',
  enabled = true,
}) => {
  const childRef = useRef<HTMLElement | null>(null);
  const nodeRef = useRef<HTMLElement | null>(null);

  const scrollSyncContext = useScrollSyncContext();

  useEffect(() => {
    const node = attachTo
      ? typeof attachTo === 'function'
        ? attachTo()
        : attachTo.current
      : childRef.current;

    if (enabled) {
      updateNode(node);
      if (nodeRef.current) {
        scrollSyncContext.registerPane(nodeRef.current, toArray(group));
      }
    }

    return () => {
      if (nodeRef.current && enabled) {
        scrollSyncContext.unregisterPane(nodeRef.current, toArray(group));
      }
    };
  }, [attachTo, group, enabled, scrollSyncContext]);

  useEffect(() => {
    if (nodeRef.current && enabled) {
      scrollSyncContext.registerPane(nodeRef.current, toArray(group));
    }
  }, [group, enabled, scrollSyncContext]);

  const toArray = (value: string | string[]): string[] => {
    return Array.isArray(value) ? value : [value];
  };

  const updateNode = (node: HTMLElement | null) => {
    nodeRef.current = node;
  };

  if (attachTo) {
    if (isValidElement(children)) {
      return children;
    }
    console.warn(
      'ScrollSyncElement should have a valid React element child when using attachTo prop.'
    );
    return null;
  }

  if (Children.count(children) !== 1) {
    console.warn('ScrollSyncElement should have only one child when attachTo prop is not used.');
    return null;
  }

  return cloneElement(children as React.ReactElement, { ref: childRef });
};

export { ScrollSyncElement };
