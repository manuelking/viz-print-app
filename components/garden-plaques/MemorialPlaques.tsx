import Image from 'next/image'
import React from 'react'

export default function MemorialPlaques() {
  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex flex-row justify-between px-[200px] py-[120px]">
        <div>
          <p className="font-medium text-[36px] leading-[46.8px] text-black">
            Pet memorial plaques
          </p>
          <p className="font-normal text-[24px] leading-[31.2px] text-black max-w-[449px]">
            These memorial plaques will make a lovely addition to your garden,
            remembering those dear to your heart.
          </p>
        </div>
        <Image
          src={'/viz-pet-plaques.png'}
          alt="Pet Plaques"
          width={473}
          height={350}
        />
      </div>
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
          (For 1 slate 150 x 240mm)
        </p>
        <p className="font-bold text-[24px] leading-[31.2px] text-black">£18</p>
      </div>
    </div>
  )
}
