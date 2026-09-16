"use client";

export function PricingToggle({
  yearly,
  onToggle,
}: {
  yearly: boolean;
  onToggle: (value: boolean) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Billing period"
      className="flex items-center justify-center gap-3 rounded-full border border-border bg-surface-inset p-1"
    >
      <button
        type="button"
        role="radio"
        aria-checked={!yearly}
        onClick={() => onToggle(false)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !yearly ? "bg-accent text-accent-foreground" : "text-muted"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={yearly}
        onClick={() => onToggle(true)}
        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          yearly ? "bg-accent text-accent-foreground" : "text-muted"
        }`}
      >
        Yearly
        <span className="ml-2 rounded-full border border-accent/30 bg-accent/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-foreground">
          Save ~20%
        </span>
      </button>
    </div>
  );
}
