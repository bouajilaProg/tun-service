"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"  // Import Input from ShadCN
import { locations } from "@/data/locations"

const SearchBar = () => {
  const [city, setCity] = useState("")
  const [delegation, setDelegation] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?city=${city}&delegation=${delegation}&query=${searchQuery}`)
  }

  const handleGetLocation = () => {
    // Implement geolocation logic here
    console.log("Get location clicked")
  }

  return (
    <motion.form
      onSubmit={handleSearch}
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
        {/* ShadCN Input for Search Bar */}
        <Input
          type="text"
          placeholder="Search..."
          className=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mt-4">
        <Select onValueChange={setCity}>
          <SelectTrigger className="w-full bg-background text-foreground border-input">
            <SelectValue placeholder="Select City" />
          </SelectTrigger>
          <SelectContent className="bg-background text-foreground border-input">
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setDelegation}>
          <SelectTrigger className="w-full bg-background text-foreground border-input">
            <SelectValue placeholder="Select Delegation" />
          </SelectTrigger>
          <SelectContent className="bg-background text-foreground border-input">
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          type="button"
          onClick={handleGetLocation}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Get My Location
        </Button>
      </div>

      <Button type="submit" className="w-full max-w-2xl bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
        Search
      </Button>
    </motion.form>
  )
}

export default SearchBar
