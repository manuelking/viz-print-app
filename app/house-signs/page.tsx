import TitleStrip from '@/components/TitleStrip'
import GallerySigns from '@/components/house-signs/GallerySigns'
import InterestedSigns from '@/components/house-signs/InterestedSigns'
import MakeYourHome from '@/components/house-signs/MakeYourHome'
import React from 'react'

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <TitleStrip title="House signs" subtitle="To personalise your home" />
      <MakeYourHome />
      <InterestedSigns />
      <GallerySigns />
    </div>
  )
}
