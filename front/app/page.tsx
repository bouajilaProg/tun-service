"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import SearchBar from "@/components/SearchBar"

const MainPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Find Services in Your Area
      </motion.h1>

      <SearchBar />

      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Popular Services</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Popular services"
            className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:mr-4"
          />
          <p className="md:w-1/2">
            Discover a wide range of services from verified professionals in your area. From home repairs to personal
            training, find the help you need quickly and easily.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="How it works"
            className="w-full md:w-1/2 h-auto mb-4 md:mb-0 md:ml-4"
          />
          <p className="md:w-1/2">
            Simply search for the service you need, browse through our verified professionals, and book your
            appointment. It's that easy to get the help you need, when you need it.
          </p>
        </div>
      </motion.section>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
      </motion.div>
    </div>
  )
}

export default MainPage

