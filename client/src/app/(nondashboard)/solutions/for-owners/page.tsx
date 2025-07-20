"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FooterSection from "../../landing/FooterSection";

const ownerFeatures = [
  {
    title: "List Properties with Ease",
    description:
      "Upload and manage multiple property types—residential, commercial, short-let—all from one dashboard.",
  },
  {
    title: "Smart Exposure",
    description:
      "Our hybrid search engine uses AI matchmaking and filters to connect your property with verified, ready tenants or buyers.",
  },
  {
    title: "Verified Requests & Offers",
    description:
      "Receive interest from pre-screened tenants and buyers. View verified profiles before engaging.",
  },
  {
    title: "Zero Hidden Fees",
    description:
      "Transparent listings and transaction tools—no commission surprises or platform lock-ins.",
  },
  {
    title: "Earn with Handover & Referrals",
    description:
      "Encourage outgoing tenants to handover seamlessly. Earn through referral-based incentives and verified linkages.",
  },
  {
    title: "Escrow-Enabled Payments",
    description:
      "Receive funds securely using escrow wallets and milestone payment agreements—all traceable and platform-protected.",
  },
];

export default function ForOwnersPage() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-20"
      >
        For Property Owners
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-16">
        {ownerFeatures.map((feature, i) => (
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
          Ready to list your property?
        </h4>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Join Squrft today and simplify how you list, manage, and earn from your properties with secure, modern tools.
        </p>
        <Link
          href="/signin"
          className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          List Property Now
        </Link>
      </motion.div>
    </div>
    <FooterSection />
    </>
  );
}
