"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
  const [level, setLevel] = useState<string[]>([])
  const [verified, setVerified] = useState(false)
  const [rating, setRating] = useState(0)

  const handleLevelChange = (selectedLevel: string) => {
    if (level.includes(selectedLevel)) {
      setLevel(level.filter((l) => l !== selectedLevel))
    } else {
      setLevel([...level, selectedLevel])
    }
  }

  const handleRatingChange = (selectedRating: number) => {
    setRating(selectedRating === rating ? 0 : selectedRating)
  }

  return (
    <motion.div
      className="bg-card p-4 rounded-md shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">Filters</h3>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="level">
          <AccordionTrigger className="text-foreground">Level</AccordionTrigger>
          <AccordionContent>
            {["1", "2", "3", "Pro", "Expert"].map((l) => (
              <div key={l} className="flex items-center space-x-2 mb-2">
                <Checkbox id={`level-${l}`} checked={level.includes(l)} onCheckedChange={() => handleLevelChange(l)} />
                <Label htmlFor={`level-${l}`} className="text-foreground">{`Level ${l}`}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mb-4 mt-4">
        <Label className="text-foreground">Price Range</Label>
        <div className="flex items-center space-x-2 mt-2">
          <Input
            type="number"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) => setPriceRange({ ...priceRange, min: Number.parseInt(e.target.value) || 0 })}
            className="w-1/2 bg-background text-foreground border-input"
          />
          <Input
            type="number"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) => setPriceRange({ ...priceRange, max: Number.parseInt(e.target.value) || 0 })}
            className="w-1/2 bg-background text-foreground border-input"
          />
        </div>
      </div>

      <div className="mb-4">
        <Label className="text-foreground">Minimum Rating</Label>
        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-6 h-6 cursor-pointer ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
              onClick={() => handleRatingChange(star)}
            />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="verified" checked={verified} onCheckedChange={(checked) => setVerified(checked as boolean)} />
          <Label htmlFor="verified" className="text-foreground">
            Verified Only
          </Label>
        </div>
      </div>

      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Apply Filters</Button>
    </motion.div>
  )
}

export default FilterSection

