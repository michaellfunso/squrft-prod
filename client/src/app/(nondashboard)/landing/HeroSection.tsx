"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setFilters } from "@/state";
import { Search } from "lucide-react";

const heroData = [
  {
    headline: "For Property Owners and Tenants",
    highlight: "Transparent Pricing",
    subtext: "Secure transactions. Zero Agent Dramas.",
    image: "/landing-splash.png",
  },
  {
    headline: "Smarter Way to Find or List Your",
    highlight: "Perfect Home",
    subtext: "Skip the agents. Browse verified listings, connect directly, and close with confidence.",
    image: "/landing-splash.png",
  },
  {
    headline: "Instant Access to Tenant-to-Tenant",
    highlight: "Deals You Miss",
    subtext: "Snag a property before it hits the market. Direct takeovers, zero stress.",
    image: "/landing-splash.png",
  },
  {
    headline: "List or Sell Properties With",
    highlight: "Zero Commission",
    subtext: "Post residential units, estates, or lands—no middlemen, no fees.",
    image: "/landing-splash.png",
  },
  {
    headline: "Trust and Transparency in",
    highlight: "Every Transaction",
    subtext: "Verified listings. Fair pricing. Instant reservations. No hidden costs.",
    image: "/landing-splash.png",
  },
];

const HeroSection = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleLocationSearch = async () => {
    try {
      const trimmedQuery = searchQuery.trim();
      if (!trimmedQuery) return;

      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          trimmedQuery
        )}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&fuzzyMatch=true`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        dispatch(
          setFilters({
            location: trimmedQuery,
            coordinates: [lat, lng],
          })
        );
        const params = new URLSearchParams({
          location: trimmedQuery,
          lat: lat.toString(),
          lng: lng,
        });
        router.push(`/search?${params.toString()}`);
      }
    } catch (error) {
      console.error("error search location:", error);
    }
  };

  const current = heroData[activeIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 -mt-32">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h1
            key={current.headline}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            {current.headline}{" "}
            <span className="inline-block px-4 py-1 rounded-full border-2 border-blue-500 text-secondary-500 bg-white/10 backdrop-blur-sm">
              {current.highlight}
            </span>
          </motion.h1>

          <motion.p
            key={current.subtext}
            className="text-lg sm:text-xl text-secondary-500/90 font-bold mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 text-secondary-500">
              {current.subtext}
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative flex-1">
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLocationSearch()}
                placeholder="Search by city, neighborhood or address"
                className="w-full pl-12 pr-4 py-6 rounded-xl border-none bg-white/95 focus-visible:ring-2 focus-visible:ring-secondary-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            </div>
            <Button
              onClick={handleLocationSearch}
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-6 px-8 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-secondary-500/30"
            >
              Explore Properties
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/80 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
