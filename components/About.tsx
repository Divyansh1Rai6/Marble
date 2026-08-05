'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Leaf, Factory, Globe2 } from 'lucide-react';
import { AboutImage, AboutSecondary } from '@/lib/images';
import { stats } from '@/lib/site-data';

function useCountUp(target: number, active: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function StatItem({ stat, active }: { stat: (typeof stats)[number]; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="flex flex-col">
      <span className="font-display text-4xl font-semibold text-primary sm:text-5xl">
        {value}
        <span className="text-accent">{stat.suffix}</span>
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {stat.label}
      </span>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="section-py bg-background">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={AboutImage}
                alt="Luxury interior with polished tile flooring"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden aspect-square w-2/5 overflow-hidden rounded-xl border-8 border-background shadow-xl sm:block">
              <Image
                src={AboutSecondary}
                alt="Marble tile samples"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -left-4 -top-4 flex flex-col items-center justify-center rounded-2xl bg-primary px-6 py-5 text-center shadow-xl">
              <span className="font-display text-4xl font-semibold text-accent">25</span>
              <span className="text-[0.625rem] uppercase tracking-[0.2em] text-background/70">
                Years of
                <br />
                Craft
              </span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              About VitrixStone
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              A legacy of surfaces, engineered for the world.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Founded in the Morbi ceramic belt, VitrixStone Ceramics has grown
              from a single kiln into a vertically integrated manufacturer with
              eight production units. We blend time-honoured material knowledge
              with Italian pressing and digital glazing technology to produce
              surfaces that architects, builders, and homeowners trust.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every tile we ship is the result of a controlled, five-stage
              process — from body preparation to final quality check — backed by
              ISO 9001, CE, and IGBC certifications.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Factory className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">8 Manufacturing Units</p>
                  <p className="text-xs text-muted-foreground">Spanning 120 acres</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Globe2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Global Export</p>
                  <p className="text-xs text-muted-foreground">50+ countries served</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Leaf className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-primary">Eco Conscious</p>
                  <p className="text-xs text-muted-foreground">Closed-loop water system</p>
                </div>
              </div>
            </div>

            <a
              href="#products"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Explore Our Surfaces
            </a>
          </div>
        </div>

        <div
          ref={ref}
          className="mt-20 grid grid-cols-2 gap-8 rounded-2xl border border-border bg-secondary/40 p-8 sm:grid-cols-4 lg:p-12"
        >
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
