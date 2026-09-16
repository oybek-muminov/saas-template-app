import { BriefcaseBusiness, GitBranch, Globe } from "lucide-react";

import { Container } from "@/components/ui/container";
import { footerColumns } from "@/lib/data";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  { label: "Twitter", href: siteConfig.links.twitter, icon: Globe },
  { label: "GitHub", href: siteConfig.links.github, icon: GitBranch },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: BriefcaseBusiness },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <Container>
        <h2 className="sr-only">Footer</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-3 text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-semibold text-accent-foreground">
                A
              </span>
              <span className="font-semibold tracking-[-0.05em] text-lg">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">{siteConfig.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-inset text-muted transition-colors hover:border-accent/35 hover:text-foreground"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-muted">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6 text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
