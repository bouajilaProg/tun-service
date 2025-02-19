"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [language, setLanguage] = useState("English")

  return (
    <motion.nav
      className="bg-background border-b shadow-sm"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-foreground">
              TunService
            </Link>
          </div>
          <div className="flex items-center">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[180px] mr-4">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Français">Français</SelectItem>
                <SelectItem value="العربية">العربية</SelectItem>
              </SelectContent>
            </Select>
            <Button asChild variant="outline">
              <Link href="/become-seller">Become a Seller</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar

