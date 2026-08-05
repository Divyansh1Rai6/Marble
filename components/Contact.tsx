'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { company } from '@/lib/site-data';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-py bg-background">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Get in Touch
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Let&apos;s talk surfaces.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Whether you&apos;re planning a project, requesting samples, or looking
            to partner with us — our team is ready to help.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={<MapPin className="h-5 w-5" />} title="Visit Us" lines={[company.address]} />
              <InfoCard icon={<Phone className="h-5 w-5" />} title="Call Us" lines={[company.phone]} />
              <InfoCard icon={<Mail className="h-5 w-5" />} title="Email Us" lines={[company.email]} />
              <InfoCard icon={<Clock className="h-5 w-5" />} title="Working Hours" lines={[company.hours]} />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <iframe
                title="VitrixStone Ceramics location"
                src="https://www.google.com/maps?q=Morbi,Gujarat,India&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm lg:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-accent" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-primary">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you within one
                  business day.
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
                    Send us a message
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fields marked with * are required.
                  </p>
                </div>
                <Field label="Full Name *" name="name" placeholder="Your name" />
                <Field label="Email *" name="email" type="email" placeholder="you@example.com" />
                <Field label="Phone *" name="phone" type="tel" placeholder="+91 ..." />
                <Field label="Subject" name="subject" placeholder="How can we help?" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-accent">
        {icon}
      </span>
      <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
        {title}
      </h3>
      {lines.map((l) => (
        <p key={l} className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {l}
        </p>
      ))}
    </div>
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
