import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "scale" | "fade" | "blur";

export function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  once = true,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}
