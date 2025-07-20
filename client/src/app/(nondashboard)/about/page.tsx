"use client";

import { motion } from "framer-motion";
import FooterSection from "../landing/FooterSection";

export default function AboutPage() {
  return (
    <>
    <div className="bg-gradient-to-br from-white via-secondary-50 to-white py-24 px-6 sm:px-10 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-600">
          About Squrft
        </h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Squrft is redefining how Africans find, lease, and sell properties. Whether you&apos;re
          a tenant, a landlord, a developer, or an agent, Squrft offers a seamless,
          transparent, and tech-enabled experience that helps you make smarter real estate
          decisions, faster.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 grid md:grid-cols-2 gap-16 max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-secondary-600">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our mission is to empower every African with the tools to confidently find or
            list property, eliminate middlemen chaos, and restore trust in property
            transactions. Squrft simplifies access to real estate with AI-driven discovery,
            direct landlord-tenant interaction, and escrow-secured payments.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-secondary-600">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We envision a future where Squrft becomes the default way Africans rent, buy,
            and lease spaces. A platform that not only lists homes, but unlocks freedom,
            flexibility, and ownership for a generation held back by rigid housing systems.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mt-36"
      >
        <h3 className="text-2xl font-semibold text-blue-600 mb-3">
          Why We Built Squrft
        </h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          Africa’s housing system is riddled with inefficiencies — from ghost agents to last-minute price changes and rental scams. We created Squrft to return power to users: verified owners, responsible tenants, and smart digital citizens who deserve better.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe housing is not just about shelter; it’s about freedom, security, and opportunity. Squrft is your ally for every move.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl mx-auto text-center"
      >
        <h3 className="text-2xl font-semibold text-blue-600 mb-6">
          What Makes Squrft Different?
        </h3>
        <ul className="grid sm:grid-cols-2 gap-10 text-left text-gray-700 text-base">
          <li className="bg-white p-6 rounded-xl shadow-md">
             Dual Mode Search: AI-matched + Manual filters.
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md">
            Tenant-to-Tenant Handover System.
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md">
            Escrow-based payment security.
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md">
            Verified user base and smart contract agreements.
          </li>
          <li className="bg-white p-6 rounded-xl shadow-md">
            Support for rent-to-own and savings-based models.
          </li>
        </ul>
      </motion.div>

      
      

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-28 text-center"
      >
        <p className="text-gray-500 mb-4">Join our growing community of smart tenants and owners</p>
        <a
          href="/signin"
          className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg"
        >
          Get Started with Squrft
        </a>
      </motion.div>
    </div>
    <FooterSection />
    </>
  );
}
