'use client';

import { useState } from 'react';
import { MapPin, Store, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { dealerRegions } from '@/lib/site-data';
import { CtaBanner } from '@/lib/images';

export default function Dealers() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="dealers" className="section-py bg-background">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Dealer Network
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            1,200+ partners across India.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From metros to tier-3 towns, our dealers bring VitrixStone surfaces
            within reach of every project. Join the network and grow with us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dealerRegions.map((r) => (
            <div
              key={r.region}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-primary">
                  {r.region} India
                </h3>
                <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                  <Store className="h-4 w-4" />
                  {r.dealers}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {r.states.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    <MapPin className="h-3 w-3" />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-primary p-6 text-background">
            <h3 className="font-display text-2xl font-semibold">
              Become a VitrixStone Dealer
            </h3>
            <p className="mt-2 text-sm text-background/70">
              Join 1,200+ partners. Get priority supply, marketing support, and a
              dedicated regional manager.
            </p>
            <a
              href="#dealer-form"
              className="mt-5 inline-flex items-center gap-2 self-start rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:gap-3"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          id="dealer-form"
          className="mt-12 grid overflow-hidden rounded-3xl border border-border lg:grid-cols-5"
        >
          <div className="relative min-h-[20rem] lg:col-span-2">
            <Image
              src={CtaBanner}
              alt="Dark marble surface"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="font-display text-3xl font-semibold text-background">
                Partner with the
                <br />
                network that builds.
              </h3>
              <p className="mt-3 max-w-xs text-sm text-background/70">
                We onboard new dealers every quarter. Tell us about your business
                and our team will reach out within two business days.
              </p>
            </div>
          </div>

          <div className="bg-card p-8 lg:col-span-3 lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-primary">
                  Application received
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for your interest. Our dealer development team will
                  contact you within two business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div className="sm:col-span-2">
                  <h3 className="font-display text-2xl font-semibold text-primary">
                    Become a Dealer
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill in your details and we&apos;ll be in touch.
                  </p>
                </div>
                <Field label="Full Name" name="name" placeholder="Your name" />
                <Field label="Business Name" name="business" placeholder="Store / firm" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    City &amp; State
                  </label>
                  <input
                    name="city"
                    required
                    placeholder="e.g. Pune, Maharashtra"
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Tell us about your business
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Current brands, showroom size, years in business..."
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  Submit Application
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
