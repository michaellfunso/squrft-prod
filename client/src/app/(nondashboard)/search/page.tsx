"use client";

import { NAVBAR_HEIGHT } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import FiltersBar from "./FiltersBar";
import FiltersFull from "./FiltersFull";
import { cleanParams } from "@/lib/utils";
import { setFilters } from "@/state";
import Map from "./Map";
import Listings from "./Listings";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const isFiltersFullOpen = useAppSelector(
    (state) => state.global.isFiltersFullOpen
  );

  useEffect(() => {
    const initialFilters = Array.from(searchParams.entries()).reduce(
      (acc: any, [key, value]) => {
        if (key === "priceRange" || key === "squareFeet") {
          acc[key] = value.split(",").map((v) => (v === "" ? null : Number(v)));
        } else if (key === "coordinates") {
          acc[key] = value.split(",").map(Number);
        } else {
          acc[key] = value === "any" ? null : value;
        }

        return acc;
      },
      {}
    );

    const cleanedFilters = cleanParams(initialFilters);
    dispatch(setFilters(cleanedFilters));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
    className="w-full mx-auto px-4 sm:px-5 flex flex-col"
    style={{
      height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
    }}
  >
    <FiltersBar />
  
    <div className="flex flex-col md:flex-row justify-between flex-1 overflow-hidden gap-3 mb-5">
      {/* Filters Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-auto md:h-full ${
          isFiltersFullOpen
            ? "w-full md:w-3/12 opacity-100 visible"
            : "w-0 md:w-0 opacity-0 invisible md:visible"
        }`}
      >
        <FiltersFull />
      </div>
  
      {/* Map Section */}
    
        <Map />
   
  
      {/* Listings Section */}
      <div className="w-full md:basis-4/12 overflow-y-auto max-h-[50vh] md:max-h-full">
        <Listings />
      </div>
    </div>
  </div>
  
  );
};

export default SearchPage;
