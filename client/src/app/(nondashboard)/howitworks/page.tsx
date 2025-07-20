"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FooterSection from "../landing/FooterSection";

const steps = [
  {
    title: "Create Your Listing or Request",
    description:
      "Sign up in seconds. Whether you're listing a property or searching, Squrft makes it easy to get started.",
  },
  {
    title: "Smart Matchmaking Engine",
    description:
      "Our dual-mode search (AI & Filter) connects buyers, tenants, and agents faster than traditional portals.",
  },
  {
    title: "Secure Interactions & Negotiation",
    description:
      "Chat securely. Make offers, negotiate, or ask questions without revealing personal contacts until ready.",
  },
  {
    title: "Tenant-to-Tenant Handover",
    description:
      "Seamlessly take over a rental from an existing tenant. Reduce agent dependency, save time and cost.",
  },
  {
    title: "Instant Payments & Escrow Wallets",
    description:
      "Transact with confidence. Use escrow wallets and milestone payments to ensure fairness for both parties.",
  },
  {
    title: "Own with Savings or Share Deals",
    description:
      "Join savings circles or share investment opportunities with trusted partners. Empower your journey to ownership.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-20"
      >
        How Squrft Works
      </motion.h1>

      <div className="space-y-32 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/20 via-transparent to-blue-500/20 pointer-events-none"></div>
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            className={`relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 p-6 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-2xl shadow-md">
                {i + 1}
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <h4 className="text-xl font-medium text-gray-700 mb-3">
          Still wondering?
        </h4>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Squrft is more than listings, it&apos;s a smarter way to discover, list, and close real estate deals in Africa.
        </p>
        <Link
          href="/signup"
          className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
     <FooterSection />
     </>
  );
}
