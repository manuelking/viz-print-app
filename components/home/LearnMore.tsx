import Image from 'next/image'
import React from 'react'

export default function LearnMore() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-tertiary px-[200px] py-[30px]">
      <div>
        <p className="font-medium text-[32px] leading-[41.6px] text-secondary pb-[43px]">
          Learn more about what we have to offer:
        </p>
        <div className="grid grid-cols-2 grid-flow-row gap-[20px]">
          <Image
            src={'/viz-home-garments-card.png'}
            alt="Custom Garments"
            width={510}
            height={250}
            className="transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105 duration-300"
          />
          <Image
            src={'/viz-home-memorial-card.png'}
            alt="Custom Garments"
            width={510}
            height={250}
            className="transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105 duration-300"
          />
          <Image
            src={'/viz-home-placemats-card.png'}
            alt="Custom Garments"
            width={510}
            height={250}
            className="transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105 duration-300"
          />
          <Image
            src={'/viz-home-garments-card.png'}
            alt="Custom Garments"
            width={510}
            height={250}
            className="transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  )
}
