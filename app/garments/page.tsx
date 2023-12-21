import TitleStrip from '@/components/TitleStrip'
import AnyDesignGarment from '@/components/garments/AnyDesignGarment'
import Gallery from '@/components/garments/GalleryGarments'
import Interested from '@/components/garments/InterestedGarments'
import React from 'react'

export default function page() {
  return (
    <main className="w-full flex flex-col">
      <TitleStrip
        title="Printed Garments"
        subtitle="Get your design printed on the garment of your choice."
      />
      <AnyDesignGarment />
      <Interested />
      <Gallery />
    </main>
  )
}
