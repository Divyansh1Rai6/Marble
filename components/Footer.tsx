'use client';

import { useState } from 'react';
import { Gem, Facebook, Instagram, Linkedin, Youtube, Send, ArrowRight } from 'lucide-react';
import { navLinks, company } from '@/lib/site-data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer id="catalogue" className="bg-primary text-background">
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl container-px py-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-background/5 p-8 lg:flex-row lg:p-10">
            <div className="max-w-md text-center lg:text-left">
              <h3 className="font-display text-2xl font-semibold">
                Stay in the loop
              </h3>
              <p className="mt-2 text-sm text-background/60">
                New collections, design trends, and trade insights — delivered
                once a month. No spam.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setEmail('');
              }}
              className="flex w-full max-w-md items-center gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-background/15 bg-background/5 px-5 py-3 text-sm text-background placeholder:text-background/40 outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
          {done && (
            <p className="mt-3 text-center text-sm text-accent">
              You&apos;re subscribed. Welcome to the StoneCraft Marble & Tiles.
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-7xl container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-background/5 text-accent">
                <Gem className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-xl font-semibold">StoneCraft Marble & Tiles</span>
                <span className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-accent">
                  Ceramics
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
              Premium vitrified tiles, marble slabs, granito, and ceramic surfaces
              — engineered in Morbi and trusted across 50+ countries.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background/70 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                'Vitrified Tiles',
                'Double Charge',
                'GVT / PGVT',
                'Marble Slabs',
                'Granito Tiles',
                'Wall Tiles',
                'Outdoor Tiles',
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#products"
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-background/70">
              <li className="leading-relaxed">{company.address}</li>
              <li>
                <a href={`tel:${company.phone}`} className="transition-colors hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li className="text-background/50">{company.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl container-px flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-background/50">
            <a href="#" className="transition-colors hover:text-accent">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-accent">Terms of Use</a>
            <a href="#" className="transition-colors hover:text-accent">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
