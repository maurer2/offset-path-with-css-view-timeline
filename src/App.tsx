import { useRef } from 'react';

import './App.css';
import CatSVG from '#assets/cat.svg?react';
import { useResizeObserverWithSyncExternalStore } from '#hooks/useResizeObserverWithSyncExternalStore';

export function App() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const size = useResizeObserverWithSyncExternalStore(overlayRef);

  return (
    <>
      <main className="main">
        <h1>Page title</h1>
      </main>

      <div
        className="overlay"
        ref={overlayRef}
        aria-hidden="true"
      >
        <svg className="track">
          <rect
            pathLength="100"
            fill="none"
          />
        </svg>

        <div
          className="indicator"
          key={size}
        >
          <CatSVG className="image" />
        </div>
      </div>
    </>
  );
}
