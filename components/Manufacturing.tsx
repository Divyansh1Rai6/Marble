import Image from 'next/image';
import { ShieldCheck, Award, Leaf, BadgeCheck, type LucideIcon } from 'lucide-react';
import { Factory, FactorySecondary } from '@/lib/images';
import { processSteps, certifications } from '@/lib/site-data';

const certIcons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  award: Award,
  leaf: Leaf,
  'badge-check': BadgeCheck,
};

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="section-py bg-primary text-background">
      <div className="mx-auto max-w-7xl container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={Factory}
                alt="Modern tile manufacturing facility"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden aspect-[4/3] w-1/2 overflow-hidden rounded-xl border-8 border-primary shadow-xl sm:block">
              <Image
                src={FactorySecondary}
                alt="Automated conveyor system"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Manufacturing &amp; Technology
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              From clay to polished surface, under one roof.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-background/70">
              Our vertically integrated plant in Morbi runs a five-stage process
              with Italian presses, digital glazing lines, and a 120-metre kiln.
              Every stage is monitored for consistency, strength, and finish.
            </p>

            <div className="mt-10 space-y-5">
              {processSteps.map((p) => (
                <div key={p.step} className="group flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/40 font-display text-sm font-semibold text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      {p.step}
                    </span>
                  </div>
                  <div className="pb-1">
                    <h3 className="font-display text-lg font-semibold text-background">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-background/60">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-background/10 pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-background/50">
                Certified &amp; Compliant
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {certifications.map((c) => {
                  const Icon = certIcons[c.icon] ?? ShieldCheck;
                  return (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-2 text-sm font-medium text-background/80"
                    >
                      <Icon className="h-4 w-4 text-accent" />
                      {c.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
