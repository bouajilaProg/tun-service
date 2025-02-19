"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for the profile
const profileData = {
  id: 1,
  name: "John Doe",
  level: "Expert",
  job: "Plumber",
  location: "Zwawin, Bizerte",
  rating: 4.5,
  verified: true,
  experience: "10 years",
  phone: "+1234567890",
  email: "john.doe@example.com",
  services: [
    { name: "Basic Plumbing", price: 50 },
    { name: "Pipe Installation", price: 100 },
    { name: "Emergency Repairs", price: 150 },
  ],
}

const ProfilePage = () => {
  const params = useParams()
  const { id } = params

  // In a real application, you would fetch the profile data based on the ID
  // For this example, we'll use the mock data

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <img
          src="/placeholder.svg?height=200&width=200"
          alt={profileData.name}
          className="w-48 h-48 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-foreground mb-2">{profileData.name}</h1>
        <Badge variant="secondary" className="mb-4">
          Level: {profileData.level}
        </Badge>

        <div className="flex justify-center items-center mb-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-6 h-6 ${index < Math.floor(profileData.rating) ? "text-yellow-400" : "text-gray-500"}`}
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-foreground">{profileData.rating.toFixed(1)}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Personal Information</h2>
        <p className="text-muted-foreground mb-2">Job: {profileData.job}</p>
        <p className="text-muted-foreground mb-2">Location: {profileData.location}</p>
        <p className="text-muted-foreground mb-2">Experience: {profileData.experience}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-card rounded-lg p-6 mb-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Contact Information</h2>
        <p className="text-muted-foreground mb-2">Phone: {profileData.phone}</p>
        <p className="text-muted-foreground mb-2">Email: {profileData.email}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-card rounded-lg p-6"
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Services & Prices</h2>
        <ul>
          {profileData.services.map((service, index) => (
            <li key={index} className="text-muted-foreground mb-2">
              {service.name}: ${service.price}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default ProfilePage

