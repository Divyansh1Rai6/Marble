import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { productCategories } from '@/lib/site-data';

export default function Products() {
  return (
    <section id="products" className="section-py bg-secondary/30">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              Our Collections
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
              Surfaces for every space.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Seven specialised product lines, each engineered for a distinct
              application — from heavy-traffic commercial floors to heritage
              granito and weatherproof exteriors.
            </p>
          </div>
          <a
            href="#catalogue"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View full catalogue
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => (
            <article
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.15em] text-primary backdrop-blur-sm">
                  {cat.tag}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-background">
                  {cat.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-background/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  {cat.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex translate-y-2 items-center gap-2 text-sm font-semibold text-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}

          <a
            href="#catalogue"
            className="group relative flex min-h-[16rem] flex-col items-center justify-center overflow-hidden rounded-2xl bg-primary p-8 text-center transition-all duration-500 hover:bg-accent"
          >
            <span className="font-display text-3xl font-semibold text-background">
              Browse the full catalogue
            </span>
            <span className="mt-3 max-w-xs text-sm text-background/70">
              500+ designs across finishes, sizes, and thicknesses. Download the
              latest collection PDF.
            </span>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-background/10 px-6 py-3 text-sm font-semibold text-background backdrop-blur-sm transition-colors group-hover:bg-background/20">
              <ArrowRight className="h-4 w-4" />
              Download
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
