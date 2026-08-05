import {
  ShieldCheck,
  Microscope,
  Leaf,
  Network,
  Award,
  Factory,
  type LucideIcon,
} from 'lucide-react';
import { features } from '@/lib/site-data';

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  microscope: Microscope,
  leaf: Leaf,
  network: Network,
  award: Award,
  factory: Factory,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py bg-background">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Why VitrixStone
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Built on trust, tested by the world.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Six commitments that run through every batch we press, polish, and
            ship — the reasons architects and dealers return to us project after
            project.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon] ?? ShieldCheck;
            return (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl"
              >
                <span className="absolute -right-2 -top-4 font-display text-7xl font-semibold text-secondary/60 transition-colors duration-500 group-hover:text-accent/20">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>

                <h3 className="relative mt-6 font-display text-2xl font-semibold text-primary">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>

                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
