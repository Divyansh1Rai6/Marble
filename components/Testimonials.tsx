'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  return (
    <section id="testimonials" className="section-py bg-secondary/30">
      <div className="mx-auto max-w-5xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Client Voices
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Trusted by those who build.
          </h2>
        </div>

        <div className="relative mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
            }}
          >
            {testimonials.map((t) => (
              <figure key={t.name} className="w-full shrink-0 px-1">
                <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
                  <Quote className="mx-auto h-10 w-10 text-accent/40" />
                  <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-primary sm:text-3xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center justify-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-accent">
                      {t.initials}
                    </span>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-primary">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  i === index ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-muted-foreground'
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
