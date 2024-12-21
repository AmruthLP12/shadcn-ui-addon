'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface WobbleCardProps {
  title: string
  description: string
  content: React.ReactNode
  footer?: React.ReactNode
  imageUrl: string
}

export function WobbleCard({ title, description, content, footer, imageUrl }: WobbleCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const dampen = 20
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = e.clientX - rect.left - width / 2
    const mouseYFromCenter = e.clientY - rect.top - height / 2
    mouseX.set(mouseXFromCenter / width)
    mouseY.set(mouseYFromCenter / height)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }

  useEffect(() => {
    const unsubscribeX = rotateX.on('change', () => {})
    const unsubscribeY = rotateY.on('change', () => {})
    return () => {
      unsubscribeX()
      unsubscribeY()
    }
  }, [rotateX, rotateY])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      className="relative w-[350px] h-[450px]"
    >
      <Card className="w-full h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${imageUrl})`,
            filter: hovered ? 'brightness(0.8)' : 'brightness(0.6)',
          }}
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="relative z-10 flex flex-col justify-end h-full text-foreground p-6"
          style={{ transform: "translateZ(50px)" }}
        >
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
            <CardDescription className="text-foreground/80">{description}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mb-4">
            {content}
          </CardContent>
          {footer && (
            <CardFooter className="p-0">
              {footer}
            </CardFooter>
          )}
        </motion.div>
      </Card>
    </motion.div>
  )
}

