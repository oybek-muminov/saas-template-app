"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "/docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const previousScrollY = { current: window.scrollY };
    let frameId: number | null = null;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > previousScrollY.current;

      setScrolled(currentScrollY > 8);
      if (currentScrollY <= 80 || !scrollingDown) {
        setHidden(false);
      } else if (!mobileMenuOpen) {
        setHidden(true);
      }

      previousScrollY.current = currentScrollY;
      frameId = null;
    };

    const onScroll = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateNavbar);
      }
    };

    updateNavbar();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, [mobileMenuOpen]);

  const navbarHidden = hidden && !mobileMenuOpen;

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-200 ${navbarHidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-[#26262F] bg-[#0B0B10]/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-[#EDECF0]" aria-label="Arcline home">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#5F5AE8] text-sm font-semibold text-white shadow-[0_0_24px_rgba(95,90,232,0.45)]">
              A
            </span>
            <span className="font-semibold tracking-[-0.05em] text-lg">{siteConfig.name}</span>
          </Link>

          <nav aria-hidden={navbarHidden} className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                tabIndex={navbarHidden ? -1 : undefined}
                className="text-sm text-[#8D8D98] transition-colors hover:text-[#EDECF0]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Start free trial</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <MobileMenu onOpenChange={setMobileMenuOpen} />
          </div>
        </Container>
      </div>
    </header>
  );
}
