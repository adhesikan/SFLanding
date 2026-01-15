"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const PRICING = {
  trialPrice: "$0 / 21 days",
  bundlePrice: "$157/month"
};

const CHECKOUT_LINKS = {
  trial: "https://www.strategyfundamentals.com/pricing",
  bundle: "https://www.strategyfundamentals.com/pricing"
};

const trustBullets = [
  "Trade ideas daily",
  "Rules-based signals + alerts",
  "Transparent, backtested methodology"
];

const steps = [
  {
    title: "Pick a strategy bundle",
    description:
      "Choose the rule sets that align with your timeframe and market focus."
  },
  {
    title: "Receive dashboard signals + push alerts",
    description:
      "Get notified when a setup meets the historical rules. PWA + push notifications supported."
  },
  {
    title: "Review & decide",
    description:
      "You control your trades. Use the context and risk notes to make your own decisions."
  }
];

const featureCards = [
  {
    title: "Rule-based entries/exits",
    description:
      "Clear historical criteria help you understand what triggers each signal."
  },
  {
    title: "Real-time dashboard updates",
    description:
      "Watch signals update throughout the session with concise, contextual status labels."
  },
  {
    title: "Push notifications",
    description: "Desktop + mobile PWA alerts keep you on top of new setups."
  },
  {
    title: "Simple onboarding",
    description: "Start with a guided setup and quick-start walkthroughs."
  },
  {
    title: "Risk notes & trade-plan context",
    description:
      "Every setup includes considerations to keep risk in view before you act."
  }
];

const faqs = [
  {
    question: "Is this financial advice?",
    answer:
      "No. Strategy Fundamentals is an educational newsletter and dashboard. We share historical strategy rules and signals for informational purposes only."
  },
  {
    question: "What are push notifications and how do I enable them?",
    answer:
      "Push notifications are real-time alerts delivered through your browser or PWA. You can enable them during onboarding or from your dashboard settings."
  },
  {
    question: "What does “backtested” mean?",
    answer:
      "Backtested strategies are evaluated on historical data to understand how the rules performed in the past. Historical results are not indicative of future outcomes."
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel or change your plan from your account settings at any time."
  },
  {
    question: "Do you execute trades for me?",
    answer:
      "No. We provide signals and context, but you decide if and when to place any trades."
  },
  {
    question: "What markets/timeframes does this cover?",
    answer:
      "We focus on U.S. equities with multiple timeframes, from intraday to swing setups. Coverage evolves as new strategy bundles are added."
  }
];

const pricingDetails = [
  "Full dashboard access",
  "Email newsletter + alerts",
  "Strategy bundle updates",
  "Onboarding support"
];

const bundleDetails = [
  ...pricingDetails,
  "Access to all 8 packages",
  "Cancel anytime",
  "Priority push notifications"
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-rose-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Strategy Fundamentals
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a className="transition hover:text-accent-600" href="#how-it-works">
              How it Works
            </a>
            <a className="transition hover:text-accent-600" href="#dashboard">
              Dashboard
            </a>
            <a className="transition hover:text-accent-600" href="#alerts">
              Alerts
            </a>
            <a className="transition hover:text-accent-600" href="#pricing">
              Pricing
            </a>
            <a className="transition hover:text-accent-600" href="#faq">
              FAQ
            </a>
          </nav>
          <Link
            href={CHECKOUT_LINKS.trial}
            className="rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:from-indigo-700 hover:via-fuchsia-600 hover:to-rose-600"
          >
            Start Free Trial
          </Link>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20">
          <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/40 via-fuchsia-300/40 to-amber-300/30 blur-3xl"></div>
          <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-gradient-to-br from-rose-400/40 via-orange-300/30 to-indigo-300/30 blur-3xl"></div>
          <Container className="fade-up grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                Strategy Fundamentals Newsletter
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                A data-driven trading newsletter powered by historical strategy
                testing.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Receive disciplined trade setups and alerts designed to reduce
                guesswork and emotional trading.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Past performance does not guarantee future results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={CHECKOUT_LINKS.trial}
                  className="rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-indigo-700 hover:via-fuchsia-600 hover:to-rose-600"
                >
                  Join the Newsletter
                </Link>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/70 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-slate-900"
                >
                  Preview the Workflow
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-2 text-sm text-slate-600">
                {trustBullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500"></span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur">
              <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                  Free trial access
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  Get 21 days of signals for $0.
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Share your details to unlock the dashboard. No credit card
                  required.
                </p>
                <form className="mt-6 space-y-4">
                  <label className="block text-sm font-medium text-slate-700">
                    Full name
                    <input
                      type="text"
                      name="name"
                      placeholder="Jordan Lee"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    Email address
                    <input
                      type="email"
                      name="email"
                      placeholder="jordan@email.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-slate-700">
                    Phone number
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(555) 123-4567"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      required
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-indigo-700 hover:via-fuchsia-600 hover:to-rose-600"
                  >
                    Get Free Trial Access
                  </button>
                </form>
                <p className="mt-4 text-xs text-slate-500">
                  By submitting, you agree to receive onboarding updates. Cancel
                  anytime.
                </p>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                <Image
                  src="/happytrader.png"
                  alt="Trader reviewing signals on a dashboard"
                  width={640}
                  height={420}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft">
              <Image
                src="/performance.png"
                alt="Illustrative backtest performance chart"
                width={1200}
                height={675}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Sample performance snapshot
            </p>
          </Container>
        </section>

        <section id="how-it-works" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="A transparent workflow designed for clarity"
              description="Pick the strategies you want to follow, receive alerts, and review each setup with full context before deciding how to act."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-50 text-sm font-semibold text-accent-700">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="dashboard"
          className="bg-gradient-to-b from-indigo-50 via-white to-rose-50 py-20"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col justify-center">
                <SectionHeading
                  eyebrow="Dashboard preview"
                  title="Everything in one signal-focused workspace"
                  description="Track active setups, review risk notes, and see alert status in one glance. Designed for fast decisions and clean data hygiene."
                />
                <div className="mt-6 rounded-2xl border border-indigo-200/70 bg-white/80 p-4 text-sm text-indigo-700 shadow-sm">
                  PWA + push notifications supported for desktop and mobile alerts.
                </div>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                  <span>Signals dashboard</span>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Live
                  </span>
                </div>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                  <Image
                    src="/alertsdashboard.png"
                    alt="Alerts dashboard preview"
                    width={900}
                    height={600}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Illustrative dashboard layout. Educational signals only.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="alerts" className="py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <SectionHeading
                  eyebrow="Alerts"
                  title="Push notifications that keep you aligned with the rules"
                  description="Enable desktop or mobile PWA alerts to stay informed when a setup hits its historical trigger. You stay in control of every trade decision."
                />
                <p className="mt-6 text-sm text-slate-600">
                  PWA + push notifications supported. Alerts are informational and
                  do not constitute investment advice.
                </p>
              </div>
              <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-soft">
                <div className="rounded-2xl border border-indigo-100/80 bg-gradient-to-br from-indigo-50 via-white to-rose-50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">
                      Alert Center
                    </p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Push alert sent
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    NVDA • Pullback reset • VWAP reclaim triggered
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Rule-based alert. Review risk notes before acting.
                  </p>
                </div>
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Daily digest</span>
                    <span className="font-semibold text-accent-600">Scheduled</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">
                    Summary email with setups and risk context.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-gradient-to-b from-rose-50 via-white to-indigo-50 py-20">
          <Container>
            <SectionHeading
              eyebrow="Features"
              title="Everything you need to stay disciplined"
              description="A streamlined dashboard, clear signals, and context-rich notes to help you keep your process consistent."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featureCards.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section id="pricing" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Pricing"
              title="Start with a free trial, then unlock full bundles"
              description="Choose the plan that fits your workflow. Cancel anytime."
              align="center"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-soft backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Trial
                </p>
                <p className="mt-4 text-4xl font-semibold text-slate-900">
                  {PRICING.trialPrice}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Explore the dashboard, alerts, and daily summary.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {pricingDetails.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={CHECKOUT_LINKS.trial}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-indigo-200 bg-white/70 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:text-indigo-800"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="rounded-3xl border border-transparent bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 p-[1px] shadow-soft">
                <div className="rounded-[22px] bg-white/90 p-8">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                      Bundle
                    </p>
                    <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-700">
                      Most popular
                    </span>
                  </div>
                  <p className="mt-4 text-4xl font-semibold text-slate-900">
                    {PRICING.bundlePrice}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    50% less than subscribing to 8 individual packages, with access to
                    all 8 packages. Cancel anytime.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {bundleDetails.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={CHECKOUT_LINKS.bundle}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-indigo-700 hover:via-fuchsia-600 hover:to-rose-600"
                  >
                    Subscribe to Bundle
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="faq" className="bg-gradient-to-b from-indigo-50 via-white to-rose-50 py-20">
          <Container>
            <SectionHeading
              eyebrow="FAQ"
              title="Answers to common questions"
              description="Still deciding? These are the most frequent questions from new members."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="rounded-3xl border border-white/70 bg-white/80 p-10 shadow-soft backdrop-blur lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                    Ready to start?
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
                    Get the newsletter + dashboard access today
                  </h2>
                  <p className="mt-4 text-base text-slate-600">
                    Join Strategy Fundamentals for educational signals, dashboard
                    alerts, and transparent historical strategy rules. No
                    recommendations — just clear setups you can evaluate.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href={CHECKOUT_LINKS.bundle}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-indigo-700 hover:via-fuchsia-600 hover:to-rose-600"
                  >
                    View Pricing & Plans
                  </Link>
                  <Link
                    href={CHECKOUT_LINKS.trial}
                    className="inline-flex w-full items-center justify-center rounded-full border border-indigo-200 bg-white/70 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:text-indigo-800"
                  >
                    Start Your Free Trial
                  </Link>
                  <p className="text-xs text-slate-500">
                    Explore pricing to choose the plan that fits your workflow.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-gradient-to-b from-white to-indigo-50 py-12">
        <Container>
          <div className="flex flex-col justify-between gap-6 border-b border-white/70 pb-8 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Strategy Fundamentals
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Educational newsletter + dashboard for backtested strategy rules.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
              <a href="#" className="transition hover:text-accent-600">
                Terms
              </a>
              <a href="#" className="transition hover:text-accent-600">
                Privacy
              </a>
              <a href="#" className="transition hover:text-accent-600">
                Disclosures
              </a>
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Strategy Fundamentals is for educational and informational purposes
            only and does not provide financial advice. All signals, trade ideas,
            and strategy rules are based on historical data and are not
            guarantees of future results. You are solely responsible for your
            own trading decisions. Historical backtests are not indicative of
            future performance.
          </p>
        </Container>
      </footer>
    </div>
  );
}
