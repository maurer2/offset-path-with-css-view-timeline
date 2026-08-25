import { type RefObject, useRef, useSyncExternalStore } from 'react';

export function useResizeObserverWithSyncExternalStore(
  element: RefObject<HTMLElement | null>,
): number {
  const inlineSize = useRef<number | null>(null);

  const subscribeToResizeObserver = (listener: () => void) => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      inlineSize.current = entry.contentBoxSize[0].inlineSize;

      listener();
    });

    if (element.current) {
      resizeObserver.observe(element.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  };

  // should trigger compiler warning but doesn't for some reason
  const getElementWidth = () => {
    return inlineSize.current ?? 0;
  };

  return useSyncExternalStore(subscribeToResizeObserver, getElementWidth, () => 0);
}
