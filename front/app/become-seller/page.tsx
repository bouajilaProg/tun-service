"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const BecomeSeller = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cin: "",
    phone: "",
    email: "",
    resume: null as File | null,
    location: "",
    services: [] as string[],
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] })
    }
  }

  const handleServiceAdd = (service: string) => {
    if (!formData.services.includes(service)) {
      setFormData({ ...formData, services: [...formData.services, service] })
    }
  }

  const handleServiceRemove = (service: string) => {
    setFormData({ ...formData, services: formData.services.filter((s) => s !== service) })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Implement form submission logic here
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Become a Seller
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
        </div>

        <div>
          <Label htmlFor="cin">CIN (ID Number)</Label>
          <Input id="cin" name="cin" value={formData.cin} onChange={handleInputChange} required />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
        </div>

        <div>
          <Label htmlFor="resume">Resume</Label>
          <Input id="resume" name="resume" type="file" onChange={handleFileChange} required />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" value={formData.location} onChange={handleInputChange} required />
        </div>

        <div>
          <Label htmlFor="services">Services</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.services.map((service) => (
              <Badge key={service} variant="secondary" className="text-sm">
                {service}
                <button
                  type="button"
                  onClick={() => handleServiceRemove(service)}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </Badge>
            ))}
          </div>
          <Input
            id="services"
            placeholder="Add a service"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault()
                const input = e.target as HTMLInputElement
                handleServiceAdd(input.value)
                input.value = ""
              }
            }}
          />
        </div>

        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </motion.form>
    </div>
  )
}

export default BecomeSeller

