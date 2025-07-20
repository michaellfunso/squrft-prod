"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function DualSearchBar() {
  const [searchMode, setSearchMode] = useState<"default" | "ai">("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [aiQuery, setAiQuery] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const filterRef = useRef<HTMLDivElement | null>(null);

  const toggleSearchMode = () => {
    setSearchMode((prev) => (prev === "default" ? "ai" : "default"));
    setShowFilter(false);
  };

  const handleSearch = () => {
    if (searchMode === "default") {
      console.log("Searching for:", searchQuery);
    } else {
      console.log("AI searching for:", aiQuery);
    }
  };

  // ✅ Close filter on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target as Node)
      ) {
        setShowFilter(false);
      }
    };
    if (showFilter) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilter]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mt-10">
      {/* Search bar + OR + Toggle */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Search Input */}
        <AnimatePresence mode="wait">
          {searchMode === "default" ? (
            <motion.div
              key="default-search"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative flex-1 w-full"
            >
              <Input
                type="text"
                placeholder="Search through properties using our advanced filters"
                value={searchQuery}
                onFocus={() => setShowFilter(true)}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 py-8 rounded-full bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
              />
              <Search
                onClick={handleSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black transition h-5 w-5"
              />
            </motion.div>
          ) : (
            <motion.div
              key="ai-search"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative flex-1 w-full"
            >
              <Input
                type="text"
                placeholder="e.g. A 2-bedroom flat near a university with 24/7 power, my budget is around 1 million naira"
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                className="pl-12 pr-10 py-8 rounded-full bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
              />
              <Search
                onClick={handleSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer hover:text-black transition h-5 w-5"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* OR */}
        <div className="text-xs font-medium text-gray-500 hidden sm:block">
          OR
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleSearchMode}
          className={`px-5 py-3 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300 ${
            searchMode === "ai"
              ? "bg-white text-blue-500 border border-blue-500 shadow-sm hover:bg-blue-50"
              : "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg ring-2 ring-blue-200"
          }`}
        >
          {searchMode === "ai" ? "Search with Filter" : "Search with AI"}
        </button>
      </div>

      {/* FILTER POPUP */}
      <AnimatePresence>
        {showFilter && searchMode === "default" && (
          <motion.div
            ref={filterRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white p-6 rounded-xl shadow-lg w-full border border-gray-200 space-y-4 z-10 relative"
          >
            <h3 className="font-semibold text-lg">Filters</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Self Contained",
                "One Room",
                "One Bedroom",
                "Two Bedrooms",
              ].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  className="rounded-full px-4 py-2"
                >
                  {type}
                </Button>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-gray-600">Min</label>
                <Input type="number" placeholder="₦0" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-gray-600">Max</label>
                <Input type="number" placeholder="₦5,000,000" />
              </div>
            </div>

            <div className="text-right">
              <Button onClick={() => setShowFilter(false)}>Apply Filters</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
