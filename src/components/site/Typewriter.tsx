"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  className = "",
  typeSpeed = 100,
  deleteSpeed = 50,
  delay = 2000,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
}) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex] ?? "";
    const timeout = setTimeout(
      () => {
        if (deleting) {
          setDisplay((prev) => prev.slice(0, -1));
          if (display === "") {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        } else {
          setDisplay(word.slice(0, display.length + 1));
          if (display === word) {
            setDeleting(true);
          }
        }
      },
      deleting ? deleteSpeed : display === word ? delay : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {display}
      <span className="animate-pulse">|</span>
    </span>
  );
}
