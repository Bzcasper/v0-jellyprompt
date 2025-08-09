"use client"

import { useEffect, useState } from "react"

// Golden ratio constant
export const GOLDEN_RATIO = 1.618

export function useGoldenRatio() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    goldenWidth: 0,
    goldenHeight: 0,
  })

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return

    const updateDimensions = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setDimensions({
        width,
        height,
        goldenWidth: width / GOLDEN_RATIO,
        goldenHeight: height / GOLDEN_RATIO,
      })
    }

    // Initial calculation
    updateDimensions()

    // Update on resize
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  // Helper functions
  const goldenSectionWidth = (containerWidth: number) => containerWidth / GOLDEN_RATIO
  const goldenSectionHeight = (containerHeight: number) => containerHeight / GOLDEN_RATIO

  // Calculate padding based on golden ratio
  const goldenPadding = (basePadding: number) => basePadding * GOLDEN_RATIO

  // Calculate font size based on golden ratio
  const goldenFontSize = (baseFontSize: number) => baseFontSize * GOLDEN_RATIO

  return {
    ...dimensions,
    goldenSectionWidth,
    goldenSectionHeight,
    goldenPadding,
    goldenFontSize,
    GOLDEN_RATIO,
  }
}
