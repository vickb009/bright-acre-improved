import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Leaf,
  MapPin,
  Phone,
  Sun,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Pill({ label }: { label: string }) {
  return (
    <span
      data-testid={`badge-${label.toLowerCase().replace(/\s+/g, "-")}`}
      className="inline-flex items-center rounded-full border bg-white/70 px-3 py-1 text-xs font-medium text-foreground shadow-[var(--shadow-xs)] backdrop-blur"
    >
      {label}
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        data-testid={`text-eyebrow-${eyebrow.toLowerCase().replace(/\s+/g, "-")}`}
        className="text-xs font-semibold tracking-[0.18em] text-muted-foreground"
      >
        {eyebrow}
      </p>
      <h2
        data-testid={`text-heading-${title.toLowerCase().replace(/\s+/g, "-")}`}
        className="mt-3 text-3xl font-semibold leading-tight md:text-4xl"
      >
        {title}
      </h2>
      {desc ? (
        <p
          data-testid={`text-desc-${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-4 text-base text-muted-foreground"
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function TopNav({ onCta }: { onCta: () => void }) {
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "#landowners", label: "Landowners" },
      { href: "#developers", label: "Developers" },
      { href: "#process", label: "How it works" },
      { href: "#faq", label: "FAQ" },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#"
          data-testid="link-home"
          className="group inline-flex items-center gap-2"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-sm)]">
            <Sun className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <div
              data-testid="text-brand"
              className="text-sm font-semibold tracking-tight"
            >
              Bright Acre
            </div>
            <div className="text-xs text-muted-foreground">Land ↔ Solar</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              data-testid={`link-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button
            data-testid="button-nav-cta"
            onClick={onCta}
            className="rounded-xl"
          >
            Check your land <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            data-testid="button-mobile-cta"
            onClick={onCta}
            variant="secondary"
            className="rounded-xl"
          >
            Check land
          </Button>
          <Button
            data-testid="button-mobile-menu"
            onClick={() => setOpen((s) => !s)}
            variant="outline"
            className="rounded-xl"
          >
            Menu <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t bg-background"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 md:px-6">
              <div className="grid gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    data-testid={`link-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    href={l.href}
                    className="rounded-xl border bg-card px-4 py-3 text-sm shadow-[var(--shadow-xs)]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <Button
                  data-testid="button-mobile-cta-2"
                  onClick={() => {
                    setOpen(false);
                    onCta();
                  }}
                  className="rounded-xl"
                >
                  Check your land <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="grain relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_10%,hsl(var(--accent)/0.35),transparent_60%),radial-gradient(900px_520px_at_90%_20%,hsl(var(--primary)/0.22),transparent_55%),linear-gradient(to_bottom,hsl(var(--background)),hsl(var(--background)))]" />
      <div className="absolute inset-0 bg-grid opacity-[0.22]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="flex flex-wrap gap-2">
            <Pill label="For landowners" />
            <Pill label="For solar developers" />
            <Pill label="20–200+ acres" />
          </motion.div>

          <motion.h1
            variants={item}
            data-testid="text-hero-title"
            className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl"
          >
            Unlock the value of your land—
            <span className="text-[hsl(var(--primary))]"> and build solar faster.</span>
          </motion.h1>

          <motion.p
            variants={item}
            data-testid="text-hero-subtitle"
            className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Bright Acre connects landowners with renewable energy developers looking
            for great sites for long-term solar projects.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              data-testid="button-hero-primary"
              onClick={onCta}
              className="h-11 rounded-xl"
            >
              Check your land eligibility
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              data-testid="link-hero-secondary"
              href="#process"
              className="inline-flex h-11 items-center justify-center rounded-xl border bg-card px-4 text-sm font-medium shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Wallet,
                title: "Reliable income",
                desc: "Long-term lease payments.",
              },
              {
                icon: Leaf,
                title: "Low hassle",
                desc: "We guide you end-to-end.",
              },
              {
                icon: MapPin,
                title: "Right fit",
                desc: "Acreage + access aligned.",
              },
            ].map((f) => (
              <div
                key={f.title}
                data-testid={`card-hero-feature-${f.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="rounded-2xl border bg-card/70 p-4 shadow-[var(--shadow-xs)] backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[hsl(var(--accent)/0.18)] text-[hsl(var(--primary))]">
                    <f.icon className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <div className="text-sm font-semibold">{f.title}</div>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{f.desc}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(800px_500px_at_70%_10%,hsl(var(--accent)/0.45),transparent_60%),radial-gradient(700px_420px_at_10%_90%,hsl(var(--primary)/0.35),transparent_55%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border bg-card shadow-[var(--shadow-lg)]">
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                data-testid="img-hero"
                src="https://www.brightacre.us/_next/image?url=%2Fimages%2FHome%2Fhome-hero.jpg&w=1920&q=75"
                alt="Solar panels over farmland"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-3 p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div
                    data-testid="text-hero-card-title"
                    className="text-sm font-semibold"
                  >
                    Fast site screen
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Acreage, access, and early fit.
                  </div>
                </div>
                <div className="rounded-full border bg-white/70 px-3 py-1 text-xs font-medium shadow-[var(--shadow-xs)]">
                  2 min
                </div>
              </div>
              <Separator />
              <div className="grid gap-2 text-sm">
                {["Parcel size", "Road access", "Grid proximity"].map((t) => (
                  <div
                    key={t}
                    data-testid={`row-hero-check-${t
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="flex items-center gap-2"
                  >
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--accent)/0.2)] text-[hsl(var(--primary))]">
                      <Check className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
              <Button
                data-testid="button-hero-card"
                onClick={onCta}
                className="mt-1 rounded-xl"
              >
                Start
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AudienceSplit({ onCta }: { onCta: () => void }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6" id="landowners">
      <SectionHeading
        eyebrow="Built for both sides"
        title="Landowners and developers—aligned"
        desc="Easy for farmers to navigate, with the detail solar teams need to move fast."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2" id="developers">
        {[
          {
            title: "Landowners",
            icon: Leaf,
            points: [
              "Understand what a solar lease is",
              "Know what your land might be worth",
              "Get guided through next steps",
            ],
            cta: "See landowner basics",
            to: "#process",
          },
          {
            title: "Solar Developers",
            icon: Sun,
            points: [
              "Find parcels that match size + access",
              "Move from lead → screening → LOI",
              "De-risk siting with better outreach",
            ],
            cta: "Request a site pipeline",
            to: "#contact",
          },
        ].map((a) => (
          <Card
            key={a.title}
            data-testid={`card-audience-${a.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="group overflow-hidden rounded-[1.5rem] border bg-card shadow-[var(--shadow-sm)]"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border bg-[hsl(var(--muted))] px-3 py-1 text-xs font-semibold text-foreground">
                    <a.icon className="h-4 w-4 text-[hsl(var(--primary))]" />
                    {a.title}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {a.title === "Landowners"
                      ? "Clarity, trust, and a simple path forward."
                      : "Signal-rich leads and faster screening."}
                  </p>
                </div>
                <div className="hidden h-12 w-12 rounded-2xl bg-[radial-gradient(10px_10px_at_30%_30%,hsl(var(--accent)),transparent_70%),radial-gradient(10px_10px_at_70%_70%,hsl(var(--primary)),transparent_70%)] md:block" />
              </div>

              <ul className="mt-6 grid gap-3 text-sm">
                {a.points.map((p) => (
                  <li
                    key={p}
                    data-testid={`text-point-${a.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}-${p
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--accent)/0.18)] text-[hsl(var(--primary))]">
                      <Check className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  data-testid={`link-audience-${a.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  href={a.to}
                  className="inline-flex items-center gap-2 rounded-xl border bg-white/70 px-4 py-2 text-sm font-medium shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
                >
                  {a.cta} <ArrowRight className="h-4 w-4" />
                </a>
                <Button
                  data-testid={`button-audience-cta-${a.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  onClick={onCta}
                  className="rounded-xl"
                >
                  Check land
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="border-y bg-[hsl(var(--muted)/0.35)]" id="process">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <SectionHeading
          eyebrow="Simple steps"
          title="How Bright Acre works"
          desc="A lightweight, transparent path from first check to signed lease."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Share the basics",
              desc: "Tell us about acreage, location, and any existing constraints.",
            },
            {
              n: "02",
              title: "We screen for fit",
              desc: "We look at access, siting constraints, and early grid signals.",
            },
            {
              n: "03",
              title: "Connect + move",
              desc: "We introduce aligned developers and help guide next steps.",
            },
          ].map((s) => (
            <div
              key={s.n}
              data-testid={`card-step-${s.n}`}
              className="rounded-[1.5rem] border bg-card p-6 shadow-[var(--shadow-sm)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                  STEP
                </span>
                <span className="rounded-full border bg-white/70 px-3 py-1 text-xs font-semibold shadow-[var(--shadow-xs)]">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
      <SectionHeading
        eyebrow="Why solar"
        title="Why consider leasing your land?"
        desc="The upside is real: stable income, no development costs, and you keep ownership."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {[
          {
            icon: Wallet,
            title: "Reliable long-term income",
            desc: "Lease payments can provide predictable revenue for decades.",
          },
          {
            icon: Sun,
            title: "No development costs",
            desc: "Developers cover construction, interconnection, and operations.",
          },
          {
            icon: Leaf,
            title: "Land remains yours",
            desc: "You retain ownership while putting unused acres to work.",
          },
          {
            icon: MapPin,
            title: "Right-sized parcels",
            desc: "Most projects use 20–200 acres, depending on region + grid.",
          },
        ].map((v) => (
          <div
            key={v.title}
            data-testid={`card-value-${v.title.toLowerCase().replace(/\s+/g, "-")}`}
            className="rounded-[1.5rem] border bg-card p-6 shadow-[var(--shadow-sm)]"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[hsl(var(--accent)/0.18)] text-[hsl(var(--primary))]">
                <v.icon className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Will I still own my land?",
      a: "Yes. A solar lease allows a developer to use a portion of your land for a set term, while you retain ownership.",
    },
    {
      q: "How long are solar leases?",
      a: "Many leases run 20–35 years, often with extension options. Terms vary by project and region.",
    },
    {
      q: "What land is typically a fit?",
      a: "Developers often look for 20–200+ contiguous acres, road access, and proximity to feasible interconnection points.",
    },
    {
      q: "What does it cost to start?",
      a: "Nothing. Bright Acre helps you understand fit and connect with aligned developers—no upfront costs.",
    },
  ];

  return (
    <section className="border-y bg-[hsl(var(--muted)/0.35)]" id="faq">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <SectionHeading
          eyebrow="Answers"
          title="Frequently asked questions"
          desc="Clear, plain-language guidance—built for farmers first."
        />

        <div className="mx-auto mt-10 max-w-3xl rounded-[1.5rem] border bg-card shadow-[var(--shadow-sm)]">
          {faqs.map((f, idx) => (
            <details
              key={f.q}
              data-testid={`accordion-faq-${idx}`}
              className="group border-b last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                <span className="text-sm font-semibold">{f.q}</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5 text-sm text-muted-foreground">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-end bg-black/30 p-4 backdrop-blur-sm md:place-items-center"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg overflow-hidden rounded-[1.5rem] border bg-card shadow-[var(--shadow-xl)]"
          >
            <div className="flex items-start justify-between gap-4 border-b px-6 py-5">
              <div>
                <div className="text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                  GET STARTED
                </div>
                <h3
                  data-testid="text-contact-title"
                  className="mt-2 text-2xl font-semibold"
                >
                  Check your land
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Share a few details—we’ll follow up quickly.
                </p>
              </div>
              <button
                data-testid="button-contact-close"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-xl border bg-white/70 text-sm shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-6">
              {submitted ? (
                <div
                  data-testid="status-contact-submitted"
                  className="rounded-2xl border bg-[hsl(var(--muted)/0.55)] p-5"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-[hsl(var(--accent)/0.22)] text-[hsl(var(--primary))]">
                      <Check className="h-4 w-4" strokeWidth={2.6} />
                    </span>
                    Thanks — we’ve got it.
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This is a prototype form (no backend yet), but the experience is
                    ready for your real fields.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      data-testid="button-contact-done"
                      onClick={onClose}
                      className="rounded-xl"
                    >
                      Done
                    </Button>
                    <a
                      data-testid="link-contact-call"
                      className="inline-flex items-center gap-2 rounded-xl border bg-white/70 px-4 py-2 text-sm font-medium shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
                      href="tel:+1"
                    >
                      <Phone className="h-4 w-4" /> Call
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid gap-4"
                >
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium"
                    >
                      Name
                    </label>
                    <Input
                      data-testid="input-name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="h-11 rounded-xl"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      data-testid="input-email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      type="email"
                      className="h-11 rounded-xl"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium"
                    >
                      Land details
                    </label>
                    <Textarea
                      data-testid="input-message"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="County/state, approx. acres, road access, any notes"
                      className="min-h-28 rounded-xl"
                    />
                  </div>

                  <Button
                    data-testid="button-submit"
                    type="submit"
                    className="h-11 rounded-xl"
                  >
                    Submit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about solar leasing.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-12 md:px-6" id="contact">
      <div className="grid gap-8 rounded-[1.75rem] border bg-card p-6 shadow-[var(--shadow-sm)] md:grid-cols-2 md:p-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-[hsl(var(--muted))] px-3 py-1 text-xs font-semibold">
            <Sun className="h-4 w-4 text-[hsl(var(--primary))]" />
            Bright Acre
          </div>
          <h3 className="mt-4 text-2xl font-semibold">
            Landowners: unlock value. Developers: move faster.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            A simple, trusted bridge between farmland and solar.
          </p>
        </div>

        <div className="grid gap-3">
          <a
            data-testid="link-footer-landowners"
            href="#landowners"
            className="inline-flex items-center justify-between rounded-xl border bg-white/70 px-4 py-3 text-sm shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
          >
            Landowners <ArrowRight className="h-4 w-4" />
          </a>
          <a
            data-testid="link-footer-developers"
            href="#developers"
            className="inline-flex items-center justify-between rounded-xl border bg-white/70 px-4 py-3 text-sm shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
          >
            Developers <ArrowRight className="h-4 w-4" />
          </a>
          <a
            data-testid="link-footer-process"
            href="#process"
            className="inline-flex items-center justify-between rounded-xl border bg-white/70 px-4 py-3 text-sm shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
          >
            How it works <ArrowRight className="h-4 w-4" />
          </a>
          <a
            data-testid="link-footer-faq"
            href="#faq"
            className="inline-flex items-center justify-between rounded-xl border bg-white/70 px-4 py-3 text-sm shadow-[var(--shadow-xs)] transition hover:bg-[hsl(var(--muted))]"
          >
            FAQ <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row">
        <div data-testid="text-footer-copyright">
          © {new Date().getFullYear()} Bright Acre. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a data-testid="link-footer-privacy" href="#" className="hover:underline">
            Privacy
          </a>
          <a data-testid="link-footer-terms" href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <TopNav onCta={() => setContactOpen(true)} />
      <main>
        <Hero onCta={() => setContactOpen(true)} />
        <AudienceSplit onCta={() => setContactOpen(true)} />
        <Process />
        <ValueProps />
        <FAQ />
        <Footer />
      </main>
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
