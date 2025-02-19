"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SearchBar from "@/components/SearchBar"
import FilterSection from "@/components/FilterSection"
import ResultCard from "@/components/ResultCard"
import { useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { filters } from "@/data/filters"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import results from "@/data/people"

const SearchPage = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)


  const totalPages = 10 // Mock total pages

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <SearchBar />

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <motion.div
          className="md:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            className="md:hidden w-full mb-4 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </Button>
          <div className={`md:block ${showFilters ? "block" : "hidden"}`}>
            <FilterSection />
          </div>
        </motion.div>

        <motion.div
          className="md:w-3/4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-foreground">Search Results</h2>
            <Select>
              <SelectTrigger className="w-[180px] bg-background text-foreground border-input">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-background text-foreground border-input">
                {filters.sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((result) => (
              <ResultCard key={result.id} {...result} />
            ))}
          </div>

          {/* pagination*/}

          <br />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>


              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </motion.div>
      </div>
    </div>
  )
}

export default SearchPage

