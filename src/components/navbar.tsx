"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

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
  const focusableTabIndex = navbarHidden ? -1 : undefined;

  return (
    <header
      className={`sticky top-0 z-50 transition-transform duration-200 ${navbarHidden ? "-translate-y-full" : "translate-y-0"}`}
      inert={navbarHidden}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            tabIndex={focusableTabIndex}
            className="flex items-center gap-3 text-foreground"
            aria-label={`${siteConfig.name} home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-semibold text-accent-foreground shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_45%,transparent)]">
              A
            </span>
            <span className="font-semibold tracking-[-0.05em] text-lg">{siteConfig.name}</span>
          </Link>

          <nav aria-hidden={navbarHidden} className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                tabIndex={focusableTabIndex}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login" tabIndex={focusableTabIndex}>
                Log in
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup" tabIndex={focusableTabIndex}>
                Start free trial
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <MobileMenu onOpenChange={setMobileMenuOpen} triggerTabIndex={focusableTabIndex} />
          </div>
        </Container>
      </div>
    </header>
  );
}
