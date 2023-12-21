import TitleStrip from '@/components/TitleStrip'
import GalleryPlaques from '@/components/garden-plaques/GalleryPlaques'
import InterestedPlaques from '@/components/garden-plaques/InterestedPlaques'
import MemorialPlaques from '@/components/garden-plaques/MemorialPlaques'
import React from 'react'

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <TitleStrip
        title="Garden Plaques"
        subtitle="To remember those close to you"
      />
      <MemorialPlaques />
      <InterestedPlaques />
      <GalleryPlaques />
    </div>
  )
}
