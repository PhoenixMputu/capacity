"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md"
      >

        <h1 className="text-5xl font-bold text-gray-800">404</h1>
        <h2 className="mt-2 text-xl font-semibold text-gray-600">
          Page non trouvée
        </h2>

        <p className="mt-4 text-gray-500">
          Désolé, la page que vous recherchez n’existe pas ou a été déplacée.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <Link href="/">Retour à l’accueil</Link>
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
          >
            Retour
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
