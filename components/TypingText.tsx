'use client';

import { useEffect, useState } from 'react';

type TypingTextProps = {
  words: string[];
  typeSpeed?: number;
  holdTime?: number;
};

export default function TypingText({ words, typeSpeed = 75, holdTime = 1900 }: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let delay = deleting ? typeSpeed / 2 : typeSpeed;

    if (!deleting && chars === current.length) {
      delay = holdTime;
    } else if (deleting && chars === 0) {
      delay = 400;
    }

    const timer = setTimeout(() => {
      if (!deleting && chars === current.length) {
        setDeleting(true);
      } else if (deleting && chars === 0) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setChars((c) => c + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [chars, deleting, wordIndex, words, typeSpeed, holdTime]);

  return (
    <span className="typing" aria-live="polite">
      {words[wordIndex].slice(0, chars)}
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
