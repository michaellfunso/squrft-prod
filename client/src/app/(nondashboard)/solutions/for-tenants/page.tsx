"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FooterSection from "../../landing/FooterSection";

const tenantFeatures = [
  {
    title: "Discover Listings Instantly",
    description:
      "Find rental properties tailored to your budget, lifestyle, and preferred move-in dates using Squrft's powerful dual-mode search system (AI Match + Filters).",
  },
  {
    title: "Tenant-to-Tenant Takeovers",
    description:
      "Gain early access to spaces being vacated before they hit the public market. Transition smoothly into apartments, co-living spaces, and rooms directly from outgoing tenants.",
  },
  {
    title: "Zero-Agent, Transparent Deals",
    description:
      "Avoid unnecessary fees and delays. Chat securely with landlords and verified tenants before you commit. Negotiate terms directly, with full clarity and control.",
  },
  {
    title: "Escrow Payments & Deposit Protection",
    description:
      "Never worry about losing your money to scams. We hold your payment safely in escrow until move-in conditions are confirmed by both parties.",
  },
  {
    title: "Verified Landlords & Smart Contracts",
    description:
      "We verify all landlord accounts and enable digital agreement signing. Enjoy peace of mind with automated receipts, reminders, and contract storage.",
  },
  {
    title: "Community Ratings & Reviews",
    description:
      "Browse honest feedback from past tenants about landlords, apartments, and neighborhoods to make better rental decisions.",
  },
];

export default function ForTenantsPage() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-20"
      >
        For Tenants
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-16">
        {tenantFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="relative bg-white/60 border border-gray-200 rounded-2xl p-6 shadow-xl backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg mr-4">
                {i + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-28 text-center"
      >
        <h4 className="text-xl font-medium text-gray-700 mb-3">
          Ready to find your next place?
        </h4>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Join Squrft for free and start discovering listings, connecting with tenants, and securing places confidently.
        </p>
        <Link
          href="/signin"
          className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          Browse Rentals
        </Link>
      </motion.div>
    </div>
    <FooterSection />
    </>
  );
}
