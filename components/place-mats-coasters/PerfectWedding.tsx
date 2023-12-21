import Image from 'next/image'
import React from 'react'

export default function PerfectWedding() {
  return (
    <div className="flex flex-row justify-between px-[200px] pt-[39px] pb-[86px]">
      <div>
        <p>Perfect for weddings or anniversaries</p>
        <div>
          <p>Choose:</p>
          <p>Material</p>
          <div className="flex flex-row">
            <Image
              src={'/viz-bullet-point.svg'}
              alt="Email Icon"
              width={20}
              height={20}
            />
            <p>Slate or Acrylic</p>
          </div>
          <p>Text Colour</p>
          <div className="flex flex-row">
            <Image
              src={'/viz-bullet-point.svg'}
              alt="Email Icon"
              width={20}
              height={20}
            />
            <p>Gold or Silver</p>
          </div>
        </div>
      </div>
    </div>
  )
}
