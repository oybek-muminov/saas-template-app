"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/data";

export function MobileMenu({
  onOpenChange,
  triggerTabIndex,
}: {
  onOpenChange?: Dispatch<SetStateAction<boolean>>;
  triggerTabIndex?: number;
}) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    onOpenChange?.(nextOpen);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          tabIndex={triggerTabIndex}
          className="h-10 w-10 rounded-full border border-border bg-surface-inset p-0 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="z-50 border-border bg-background p-6">
        <div className="mt-10 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleOpenChange(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 pt-4">
            <Button variant="ghost" className="justify-start px-3 text-left" asChild>
              <a href="/login" onClick={() => handleOpenChange(false)}>
                Log in
              </a>
            </Button>
            <Button className="w-full" asChild>
              <a href="/signup" onClick={() => handleOpenChange(false)}>
                Start free trial
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
