'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Gem } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/site-data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="VitrixStone Ceramics home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-primary text-accent transition-transform duration-500 group-hover:scale-105">
            <Gem className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-semibold tracking-tight text-primary">
              StoneCraft Marble & Tiles
            </span>
            <span className="text-[0.625rem] font-medium uppercase tracking-[0.3em] text-accent">
              Ceramics
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-4 py-2 text-sm font-medium text-primary/80 transition-colors hover:text-primary"
              >
                {link.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          'overflow-hidden bg-background/95 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <ul className="container-px mx-auto flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-primary/80 transition-colors hover:bg-muted hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
