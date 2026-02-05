import logo from "@assets/bright-acre-logo_1770141425405.png";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Sun,
  Check,
  Zap,
  Globe,
  BarChart3,
  Search,
  FileText,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

function TopNav({ onCta }: { onCta: () => void }) {
  const [open, setOpen] = useState(false);
  const links = useMemo(() => [
    { href: "/", label: "Landowners" },
    { href: "/developers", label: "Developers" },
    { href: "#", label: "How it works" },
    { href: "#", label: "FAQ" },
  ], []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group inline-flex items-center gap-2">
          <img src={logo} alt="Bright Acres Logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <Button onClick={onCta} className="rounded-xl">Request Site Pipeline <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </nav>
        <div className="flex items-center md:hidden">
          <Button onClick={() => setOpen(!open)} variant="outline" className="rounded-xl">Menu <ChevronDown className="ml-2 h-4 w-4" /></Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t bg-background p-4 md:hidden">
            <div className="grid gap-3">
              {links.map((l) => (
                <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-xl border bg-card px-4 py-3 text-sm">{l.label}</Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Developers() {
  return (
    <div className="min-h-screen">
      <TopNav onCta={() => {}} />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4 md:px-6">
          <div className="absolute inset-0 bg-grid opacity-[0.2]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                Scale Your Solar Portfolio with <span className="text-primary">Precision-Sourced Sites.</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Bright Acre provides utility-scale solar developers with a high-fidelity pipeline of pre-screened land leads. Stop hunting and start developing.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="rounded-xl">Request Access to Pipeline</Button>
                <Button size="lg" variant="outline" className="rounded-xl">View Screening Criteria</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="bg-muted/30 py-20 px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Search, title: "High-Fidelity Sourcing", desc: "Our proprietary GIS analysis identifies parcels with optimal slope, aspect, and minimal environmental constraints." },
                { icon: Zap, title: "Grid-Ready Insights", desc: "Each lead includes proximity to sub-stations and transmission lines, significantly reducing interconnection risk." },
                { icon: FileText, title: "LOI-Ready Leads", desc: "We engage landowners early, ensuring they understand the solar leasing process before we pass the lead to you." }
              ].map((f, idx) => (
                <Card key={idx} className="rounded-2xl border bg-card shadow-sm">
                  <CardContent className="p-8">
                    <f.icon className="h-10 w-10 text-primary" />
                    <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities */}
        <section className="py-20 px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">Data-Driven Site Selection</h2>
                <p className="mt-6 text-muted-foreground text-lg">
                  We don't just find land; we find the *right* land. Our platform leverages multiple data layers to ensure every site in your pipeline has a clear path to permitting and construction.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Topographical & Hydrological Screening",
                    "Interconnection Capacity Analysis",
                    "Landowner Relation Management",
                    "Streamlined Title & Encumbrance Review"
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border bg-card p-4 shadow-xl">
                 <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                    <BarChart3 className="h-20 w-20 text-muted-foreground/30" />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Trust */}
        <section className="bg-primary text-primary-foreground py-20 px-4 md:px-6 rounded-t-[3rem]">
          <div className="mx-auto max-w-4xl text-center">
             <h2 className="text-3xl font-semibold md:text-5xl">Your Infrastructure-Scale Partner.</h2>
             <p className="mt-6 text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
               Bright Acre operates at the intersection of institutional stability and renewable innovation. We understand the complexities of multi-year development cycles and provide the consistency your capital deserves.
             </p>
             <div className="mt-12 flex justify-center gap-8 opacity-50 grayscale invert">
                <Globe className="h-12 w-12" />
                <Users className="h-12 w-12" />
                <Sun className="h-12 w-12" />
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
