import type { CSSProperties, ReactNode } from "react";

export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const style = { "--fade-up-delay": `${delay}s` } as CSSProperties;

  return (
    <div className={["animate-fade-up", className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
