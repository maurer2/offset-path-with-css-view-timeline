import './App.css';

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

        <div className="indicator"></div>
      </div>
    </>
  );
}
