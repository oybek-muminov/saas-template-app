"use client";

import { useId } from "react";

export function PricingToggle({
  yearly,
  onToggle,
}: {
  yearly: boolean;
  onToggle: (value: boolean) => void;
}) {
  const toggleId = useId();

  return (
    <div className="flex items-center justify-center gap-3 rounded-full border border-[#26262F] bg-[#101117] p-1">
      <button
        type="button"
        role="switch"
        aria-checked={!yearly}
        aria-label="Monthly billing"
        onClick={() => onToggle(false)}
        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          !yearly ? "bg-[#5F5AE8] text-white" : "text-[#8D8D98]"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-label="Yearly billing"
        onClick={() => onToggle(true)}
        className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          yearly ? "bg-[#5F5AE8] text-white" : "text-[#8D8D98]"
        }`}
      >
        Yearly
        {yearly ? (
          <span className="ml-2 rounded-full border border-[#5F5AE8]/30 bg-[#5F5AE8]/10 px-1.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-[#EDECF0]">
            Save ~20%
          </span>
        ) : null}
      </button>
      <input id={toggleId} type="hidden" value={yearly ? "yearly" : "monthly"} readOnly />
    </div>
  );
}
