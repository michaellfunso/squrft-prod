"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FooterSection from "../landing/FooterSection";

const faqs = [
  {
    question: "What is Squrft?",
    answer:
      "Squrft is a modern property platform that connects tenants, property owners, and buyers directly—no agents, no hidden fees, and no unnecessary delays.",
  },
  {
    question: "Is it free to list my property?",
    answer:
      "Yes, listing your property on Squrft is completely free. We charge only for optional premium features and value-added services.",
  },
  {
    question: "How are tenants verified?",
    answer:
      "All tenant accounts go through ID verification and usage scoring, including payment reputation, before they can make serious offers.",
  },
  {
    question: "How does payment work on Squrft?",
    answer:
      "Payments are processed through secure escrow wallets. Funds are only released upon successful agreement milestones or move-in confirmations.",
  },
  {
    question: "Can I handover my space to another tenant?",
    answer:
      "Absolutely! Our handover feature enables outgoing tenants to smoothly pass on verified leases or agreements to new tenants, ensuring continuous occupancy.",
  },
  {
    question: "Is Squrft available outside Nigeria?",
    answer:
      "We’re launching in Nigeria first, but regional expansion—including Ghana, Kenya, and South Africa—is part of our roadmap.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-24 px-6 sm:px-12 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-blue-600"
        >
          Frequently Asked Questions
        </motion.h1>

        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;
            return (
              <motion.div
                key={i}
                className="bg-white border border-blue-100 rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center text-lg font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                >
                  {faq.question}
                  <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 overflow-hidden"
                    >
                      <div>{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-4">Still have questions or need support?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
    <FooterSection />
    </>
  );
}
