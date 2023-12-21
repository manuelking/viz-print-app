import Image from 'next/image'
import React from 'react'

export default function WelcomeBanner() {
  return (
    <div className="w-full flex flex-row items-center justify-center bg-white px-[200px] py-[60px]">
      <div className="flex-1 flex-col flex items-center">
        <p className="font-medium text-[48px] leading-[62.4px] text-secondary">
          Welcome to Viz Print!
        </p>
        <p className="font-normal text-[24px] leading-[31.2px] text-black max-w-[469px]">
          Get custom garments, memorial plaques, house signs and much more.
        </p>
      </div>
      <div className="flex-1 flex-col flex items-center">
        <div>
          <Image
            src={'/viz-custom-garments.png'}
            alt="Custom Garments"
            width={402}
            height={290}
            className="rounded-[20px]"
          />
          <div>
            <p className="font-medium text-[24px] leading-[31.2px] text-black">
              Custom Garments
            </p>
            <p className="font-normal text-[14px] leading-[19.5px] text-black">
              Hoodies, T-shirts and more
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
