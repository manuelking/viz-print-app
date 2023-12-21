import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className="w-full flex flex-row pt-[57px] py-[105px] px-[200px] bg-secondary">
      <div className="flex-1">
        <p className="text-[32px] leading-[41.6px] text-white font-bold pb-[20px]">
          Products
        </p>
        <div className="space-y-4">
          <p className="font-normal text-[20px] leading-[26px] text-white">
            custom garments
          </p>
          <p className="font-normal text-[20px] leading-[26px] text-white">
            garden plaques
          </p>
          <p className="font-normal text-[20px] leading-[26px] text-white">
            place-mats & coasters
          </p>
          <p className="font-normal text-[20px] leading-[26px] text-white">
            house signs
          </p>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-[32px] leading-[41.6px] text-white font-bold pb-[20px]">
          Contact Me
        </p>
        <div className="flex flex-row gap-[25px] pb-[20px]">
          <Image
            src={'/viz-email-icon-white.svg'}
            alt="Email Icon"
            width={27}
            height={27}
          />
          <p className="font-normal text-[20px] leading-[26px] text-white">
            vizprintreading@gmail.com
          </p>
        </div>
        <div className="flex flex-row items-start gap-[25px]">
          <Image
            src={'/viz-phone-icon-white.svg'}
            alt="Email Icon"
            width={27}
            height={27}
          />
          <div className="space-y-[10px]">
            <div className="space-y-1">
              <p className="font-medium text-[20px] leading-[26px] text-white">
                Mobile
              </p>
              <p className="font-normal text-[20px] leading-[26px] text-white">
                07582 395884
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-[20px] leading-[26px] text-white">
                Office
              </p>
              <p className="font-normal text-[20px] leading-[26px] text-white">
                0118 9471899
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
