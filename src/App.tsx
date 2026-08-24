import './App.css';
import CatSVG from '#assets/cat.svg?react';

export function App() {
  return (
    <>
      <main className="main">
        <h1>Page title</h1>
      </main>

      <div
        className="overlay"
        aria-hidden="true"
      >
        <svg className="track">
          <rect
            pathLength="100"
            fill="none"
          />
        </svg>

        <div className="indicator">
          <CatSVG className="image" />
        </div>
      </div>
    </>
  );
}
