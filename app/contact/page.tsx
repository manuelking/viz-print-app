import TitleStrip from '@/components/TitleStrip'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <TitleStrip
        title="Contact me"
        subtitle={`I’d love to hear from you and your requests`}
      />
      <div className="w-full flex">
        <Image
          src={'/viz-gal-2.png'}
          alt="Email Icon"
          width={293}
          height={317}
          className="absolute right-[200px] top-[201px]"
        />
      </div>
      <div className="px-[200px] pt-[69px] pb-[86px] space-y-[56px]">
        <div className="flex flex-row items-start gap-[25px]">
          <Image
            src={'/viz-email-icon-black.svg'}
            alt="Email Icon"
            width={52}
            height={52}
          />
          <div className="space-y-[10px]">
            <div className="space-y-1">
              <p className="font-medium text-[32px] leading-[41.6px] text-black">
                Email
              </p>
              <p className="font-normal text-[32px] leading-[41.6px] text-black">
                vizprintreading@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start gap-[25px]">
          <Image
            src={'/viz-phone-icon-black.svg'}
            alt="Email Icon"
            width={52}
            height={52}
          />
          <div className="space-y-[10px]">
            <div className="space-y-1">
              <p className="font-medium text-[32px] leading-[41.6px] text-black">
                Mobile
              </p>
              <p className="font-normal text-[32px] leading-[41.6px] text-black">
                07582 395884
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-[32px] leading-[41.6px] text-black">
                Office
              </p>
              <p className="font-normal text-[32px] leading-[41.6px] text-black">
                0118 9471899
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
