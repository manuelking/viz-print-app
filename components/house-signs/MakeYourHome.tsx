import Image from 'next/image'
import React from 'react'

export default function MakeYourHome() {
  return (
    <div className="w-full flex flex-row pt-[88px] pb-[115px] px-[200px] justify-between">
      <div>
        <p className="font-bold text-[40px] leading-[52px] text-black pb-[14px] max-w-[386px]">
          Make your house, your home
        </p>
        <p className="font-normal text-[24px] leading-[31.2px] text-black max-w-[444px]">
          Whether it’s for your house, opening times for your store or a sign
          for your bedroom - these signs will add a touch of personality
          wherever you put them.
        </p>
      </div>
      <Image
        src={'/viz-house-signs.png'}
        alt="Email Icon"
        width={528}
        height={305}
      />
    </div>
  )
}
