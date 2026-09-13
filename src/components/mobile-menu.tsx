"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "/docs" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 rounded-full border border-[#26262F] bg-[#101117] p-0 md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="z-50 border-[#26262F] bg-[#0B0B10] p-6">
        <div className="mt-10 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-[#EDECF0] transition-colors hover:bg-[#15161D]"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 pt-4">
            <Button variant="ghost" className="justify-start px-3 text-left" asChild>
              <a href="#" onClick={() => setOpen(false)}>
                Log in
              </a>
            </Button>
            <Button className="w-full" onClick={() => setOpen(false)} asChild>
              <a href="#">Start free trial</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
