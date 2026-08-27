import { useRef } from 'react';

import './App.css';
import CatSVG from '#assets/cat.svg?react';
import { useResizeObserverWithSyncExternalStore } from '#hooks/useResizeObserverWithSyncExternalStore';

import bookJSON from './assets/book.json' with { type: 'json' };

type Book = {
  title: string;
  author: string;
  chapters: {
    title: string;
    content: string;
  }[];
};

const book = bookJSON satisfies Book;

export function App() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const size = useResizeObserverWithSyncExternalStore(overlayRef);

  return (
    <>
      <main className="main">
        <h1>{book.title}</h1>
        {/* <div className="chapters">
          {book.chapters.map((chapter) => (
            <section
              className="chapter"
              id={chapter.title}
              key={chapter.title}
            >
              <header className="chapter-header">
                <h2 className="chapter-title">{chapter.title}</h2>
              </header>
              <p className="chapter-content">{chapter.content}</p>
            </section>
          ))}
        </div> */}
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
