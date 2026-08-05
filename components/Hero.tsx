import Image from 'next/image';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { HeroBg, HeroSecondary } from '@/lib/images';
import { company } from '@/lib/site-data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <Image
          src={HeroBg}
          alt="Polished marble surface with natural veining"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-primary/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-accent backdrop-blur-sm animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Premium Vitrified &amp; Marble Surfaces
          </span>

          <h1
            className="mt-6 font-display text-5xl font-medium leading-[1.05] text-background sm:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Crafting Surfaces,
            <br />
            <span className="text-accent">Building Trust</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-background/75 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            From the heart of Morbi&apos;s ceramic belt, {company.name} engineers
            vitrified tiles, marble slabs, and granito surfaces that define
            spaces across 50+ countries — with 25+ years of craft behind every
            piece.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:gap-3 hover:bg-accent/90"
            >
              View Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#catalogue"
              className="group inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/5 px-7 py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-all duration-300 hover:border-background/60 hover:bg-background/10"
            >
              <Download className="h-4 w-4" />
              Download Catalogue
            </a>
          </div>

          <div
            className="mt-14 flex flex-wrap gap-x-10 gap-y-6 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { n: '500+', l: 'Designs' },
              { n: '50+', l: 'Countries' },
              { n: '25+', l: 'Years' },
              { n: '1200+', l: 'Dealers' },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-3xl font-semibold text-background">
                  {s.n}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-background/60">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-background/50 transition-colors hover:text-background sm:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>

      <div className="absolute bottom-0 right-0 z-0 hidden h-2/3 w-1/3 lg:block">
        <div className="relative h-full w-full">
          <Image
            src={HeroSecondary}
            alt="Interior with marble flooring"
            fill
            sizes="33vw"
            className="object-cover opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>
    </section>
  );
}
