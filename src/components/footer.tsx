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
    <footer className="border-t border-[#26262F] bg-[#0B0B10] py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 text-[#EDECF0]">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#5F5AE8] text-sm font-semibold text-white">
                A
              </span>
              <span className="font-semibold tracking-[-0.05em] text-lg">{siteConfig.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#8D8D98]">{siteConfig.description}</p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#26262F] bg-[#101117] text-[#8D8D98] transition-colors hover:border-[#5F5AE8]/35 hover:text-[#EDECF0]"
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
              <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-[#8D8D98]">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#EDECF0]">
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

        <div className="mt-12 border-t border-[#26262F] pt-6 text-sm text-[#8D8D98]">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
