import Image from 'next/image'
import React from 'react'

export default function ContactMe() {
  return (
    <div className="w-full flex flex-col bg-white px-[200px] py-[55px]">
      <div className="pb-[56px]">
        <p className="font-medium text-[40px] leading-[52px] text-secondary">
          Contact me
        </p>
        <p className="font-normal text-[28px] leading-[36.4px] text-quart">
          Get in touch today for your bespoke orders
        </p>
      </div>
      <div className="flex flex-row">
        <div className="flex-1 flex flex-row items-start gap-[30px]">
          <Image
            src={'/viz-phone-icon-black.svg'}
            alt="Email Icon"
            width={52}
            height={52}
          />
          <div className="space-y-[25px]">
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
        <div className="flex-1 flex flex-row items-start gap-[30px]">
          <Image
            src={'/viz-email-icon-black.svg'}
            alt="Email Icon"
            width={52}
            height={52}
          />
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
    </div>
  )
}
