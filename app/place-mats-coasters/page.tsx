import TitleStrip from '@/components/TitleStrip'
import InterestedPlace from '@/components/place-mats-coasters/InterestedPlace'
import PerfectWedding from '@/components/place-mats-coasters/PerfectWedding'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
      <TitleStrip
        title="Place mats and Coasters"
        subtitle="For that special day..."
      />
      <PerfectWedding />
      <div className="flex flex-col px-[200px] py-[46px] bg-tertiary gap-[14px]">
        <div className="flex flex-row space-x-[5px]">
          <Image
            src={'/viz-money-icon.svg'}
            alt="Pet Plaques"
            width={44}
            height={44}
          />
          <p className="font-bold text-[36px] leading-[46.8px] text-black">
            Pricing
          </p>
        </div>
        <p className="font-normal text-[24px] leading-[31.2px] text-black">
          (For a set of four)
        </p>
        <div>
          <p>Slate</p>
          <p className="font-bold text-[24px] leading-[31.2px] text-black">
            £18
          </p>
          <p>Acrylic</p>
          <p>£18</p>
        </div>
      </div>
      <InterestedPlace />
    </div>
  )
}
