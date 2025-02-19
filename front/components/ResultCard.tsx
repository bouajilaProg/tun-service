import type React from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface ResultCardProps {
  id: number
  name: string
  level: string
  job: string
  location: string
  rating: number
  verified: boolean
  price: number
}

const ResultCard: React.FC<ResultCardProps> = ({ id, name, level, job, location, rating, verified, price }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="w-fit" >
      <Link href={`/profile/${id}`}>
        <Card className={"w-64 bg-gray-100"}>
          <CardHeader>
            <img
              src="/placeholder.svg?height=150&width=200"
              alt={name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <CardTitle className="text-foreground">{name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">
              {job} - {location}
            </p>
            <div className="flex items-center mb-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={`w-4 h-4 ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-500"}`}
                  fill="currentColor"
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">{rating.toFixed(1)}</span>
            </div>
            <Badge variant="secondary" className="mb-2">
              Level: {level}
            </Badge>
            {verified && (
              <Badge variant="default" className="ml-2 mb-2">
                Verified
              </Badge>
            )}
            <p className="text-lg font-bold mt-2 text-foreground">Starting from ${price}</p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

export default ResultCard

