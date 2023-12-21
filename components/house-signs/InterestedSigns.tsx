import Image from 'next/image'
import React from 'react'

export default function InterestedSigns() {
  return (
    <div className="w-full flex flex-col px-[200px] py-[44px] bg-white">
      <div className="space-y-[20px] pb-[20px]">
        <p className="font-bold text-[36px] leading-[46.8px] text-black">
          Interested?
        </p>
        <p className="font-normal text-[20px] leading-[26px] text-black">
          To get your plaque created, reach out to me today
        </p>
      </div>
      <div className="space-y-[20px]">
        <div className="flex-1 flex flex-row items-start gap-[30px]">
          <Image
            src={'/viz-email-icon-black.svg'}
            alt="Email Icon"
            width={27}
            height={27}
          />
          <p className="font-normal text-[20px] leading-[26px] text-black">
            vizprintreading@gmail.com
          </p>
        </div>
        <div className="flex-1 flex flex-row items-start gap-[30px]">
          <Image
            src={'/viz-phone-icon-black.svg'}
            alt="Email Icon"
            width={27}
            height={27}
          />
          <div className="space-y-[25px]">
            <div className="space-y-1">
              <p className="font-medium text-[20px] leading-[26px] text-black">
                Mobile
              </p>
              <p className="font-normal text-[20px] leading-[26px] text-black">
                07582 395884
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-[20px] leading-[26px] text-black">
                Office
              </p>
              <p className="font-normal text-[20px] leading-[26px] text-black">
                0118 9471899
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start gap-[30px]">
          <Image
            src={'/viz-info-icon.svg'}
            alt="Email Icon"
            width={27}
            height={27}
          />

          <div className="space-y-1">
            <p className="font-medium text-[20px] leading-[26px] text-black">
              Make sure to include
            </p>
            <p className="font-normal text-[20px] leading-[26px] text-black">
              Your design The garment(s) you wish to see it on
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
