"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

const PRICING = {
  trialPrice: "$0 for 14 days",
  monthlyPrice: "Then continue monthly"
};

const CHECKOUT_LINKS = {
  trial:
    "https://www.optionfundamentals.com/product/stockfundamentals-14-day-free-trial/",
  monthly:
    "https://www.optionfundamentals.com/product/stockfundamentals-14-day-free-trial/"
};

const trustBullets = [
  "Entries & Targets",
  "High-quality stock setups",
  "Real-time alerts on phone & desktop"
];

const faqs = [
  {
    question: "Is this financial advice?",
    answer:
      "No. Stock Fundamentals is an educational newsletter and dashboard. We share historical strategy rules and trade ideas for informational purposes only."
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel or change your plan from your account settings at any time."
  },
  {
    question: "Do you execute trades for me?",
    answer:
      "No. We provide trade ideas and context, but you decide if and when to place any trades."
  },
  {
    question: "What markets/timeframes does this cover?",
    answer:
      "We focus on U.S. equities with multiple timeframes, from intraday to swing setups. Coverage evolves as new strategies are added."
  }
];

const pricingDetails = [
  "Full dashboard access",
  "Daily trade ideas",
  "Entry and Target Prices",
  "Onboarding support",
  "Latest news associated"
];

const illustrativeTradeIdeas = [
  {
    symbol: "ALGN",
    idea: "Breakout continuation",
    entry: "$312.40",
    target: "$334.00",
    move: "+6.9%"
  },
  {
    symbol: "SHOP",
    idea: "Pullback support",
    entry: "$67.80",
    target: "$72.25",
    move: "+6.6%"
  },
  {
    symbol: "AMD",
    idea: "Momentum reclaim",
    entry: "$168.10",
    target: "$178.50",
    move: "+6.2%"
  },
  {
    symbol: "COST",
    idea: "Trend follow",
    entry: "$828.60",
    target: "$862.00",
    move: "+4.0%"
  }
];

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-sky-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
        <Container className="flex items-center justify-between py-4">
          <div className="text-xl font-semibold text-slate-900 sm:text-2xl">
            Stock Fundamentals
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a className="transition hover:text-accent-600" href="#dashboard">
              Dashboard
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
            className="rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:from-emerald-700 hover:via-teal-600 hover:to-sky-600"
          >
            Start Free Trial
          </Link>
        </Container>
      </header>

      <main>
        <section className="relative overflow-hidden pb-20 pt-16 sm:pt-20">
          <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/40 via-teal-300/40 to-sky-300/30 blur-3xl"></div>
          <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-gradient-to-br from-sky-400/40 via-cyan-300/30 to-emerald-300/30 blur-3xl"></div>
          <Container className="fade-up grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                Stock Fundamentals Newsletter
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Smarter Stock Trade Ideas. Delivered.
              </h1>
              <p className="mt-5 text-lg text-slate-600">
                Stock Fundamentals Newsletter sends curated stock setups with
                clear entry and target levels — so you can act fast and stay
                disciplined.
              </p>
              <p className="mt-2 text-base text-slate-500">
                Rule-based trade ideas designed for self-directed traders.
              </p>
              <p className="mt-4 text-sm text-slate-500">
                No credit card required. Cancel anytime.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={CHECKOUT_LINKS.trial}
                  className="rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-emerald-700 hover:via-teal-600 hover:to-sky-600"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-2 text-sm text-slate-600">
                {trustBullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2">
                    <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"></span>
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
                  Get 14 days of trade ideas for $0.
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Activate your free trial in seconds. No credit card required.
                </p>
                <Link
                  href={CHECKOUT_LINKS.trial}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-emerald-700 hover:via-teal-600 hover:to-sky-600"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-sm">
                <Image
                  src="/happytrader.png"
                  alt="Trader reviewing trade ideas on a dashboard"
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
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Illustrative Trade Idea Examples
              </p>
            </div>
            <p className="mx-auto mt-4 max-w-5xl text-xs text-slate-500">
              Illustrative examples only. The trade ideas shown are hypothetical
              examples provided for informational purposes and do not represent
              actual trading results, client performance, or a complete history
              of alerts. Results are not typical and will vary based on
              execution, timing, fees, and market conditions. Not all ideas
              reach targets and losses are possible. No trades are placed on
              behalf of users.
            </p>
            <div className="mt-6 overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-600">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    <tr>
                      <th className="px-6 py-4">Symbol</th>
                      <th className="px-6 py-4">Idea Type</th>
                      <th className="px-6 py-4">Example Entry</th>
                      <th className="px-6 py-4">Example Target</th>
                      <th className="px-6 py-4">Illustrative Move</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {illustrativeTradeIdeas.map((idea) => (
                      <tr key={`${idea.symbol}-${idea.entry}`}>
                        <td className="px-6 py-4 font-semibold text-slate-700">
                          {idea.symbol}
                        </td>
                        <td className="px-6 py-4">{idea.idea}</td>
                        <td className="px-6 py-4">{idea.entry}</td>
                        <td className="px-6 py-4">{idea.target}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-700">
                          {idea.move}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        <section
          id="dashboard"
          className="bg-gradient-to-b from-emerald-50 via-white to-sky-50 py-20"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col justify-center">
                <SectionHeading
                  eyebrow="Dashboard preview"
                  title="Everything in one trade-idea-focused workspace"
                  description="Track active setups, review risk notes, and see alert status in one glance. Designed for fast decisions and clean data hygiene."
                />
              </div>
              <div className="rounded-3xl border border-white/70 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                  <span>Trade ideas dashboard</span>
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
                  Illustrative dashboard layout. Educational trade ideas only.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="pricing" className="py-20">
          <Container>
            <SectionHeading
              eyebrow="PRICING"
              title="Simple pricing"
              description="Start with a 14-day free trial, then continue monthly. Cancel anytime."
              align="center"
            />
            <div className="mt-12 flex justify-center">
              <div className="w-full max-w-xl rounded-3xl border border-transparent bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-500 p-[1px] shadow-soft">
                <div className="rounded-[22px] bg-white/90 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
                    Stock Fundamentals Membership
                  </p>
                  <p className="mt-4 text-4xl font-semibold text-slate-900">
                    {PRICING.trialPrice}
                  </p>
                  <p className="mt-2 text-base font-medium text-slate-600">
                    {PRICING.monthlyPrice}
                  </p>
                  <p className="mt-4 text-sm text-slate-600">
                    Full access to Stock Fundamentals Newsletter, alerts, and dashboard.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {pricingDetails.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={CHECKOUT_LINKS.trial}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-emerald-700 hover:via-teal-600 hover:to-sky-600"
                  >
                    Start 14-Day Free Trial
                  </Link>
                  <p className="mt-4 text-xs text-slate-500">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="faq" className="bg-gradient-to-b from-emerald-50 via-white to-sky-50 py-20">
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
                    Join Stock Fundamentals for educational trade ideas, dashboard
                    alerts, and transparent historical strategy rules. No
                    recommendations — just clear setups you can evaluate.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link
                    href={CHECKOUT_LINKS.trial}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-emerald-700 hover:via-teal-600 hover:to-sky-600"
                  >
                    Start 14-Day Free Trial
                  </Link>
                  <p className="text-xs text-slate-500">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-white/70 bg-gradient-to-b from-white to-emerald-50 py-12">
        <Container>
          <div className="flex flex-col justify-between gap-6 border-b border-white/70 pb-8 md:flex-row md:items-center">
            <div>
              <p className="text-lg font-semibold text-slate-900">
                Stock Fundamentals
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Educational newsletter + dashboard for backtested strategy rules.
              </p>
            </div>
            <div className="text-sm font-semibold text-slate-600">
              Disclaimer
            </div>
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Stock Fundamentals is a subscription-based financial information
            and market commentary newsletter. All content is provided for
            educational and informational purposes only and should not be
            considered investment advice, a recommendation, or an offer to buy
            or sell any security. Trading and investing involve risk, and past
            performance is not indicative of future results. You are solely
            responsible for your trading and investment decisions.
          </p>
        </Container>
      </footer>
    </div>
  );
}
