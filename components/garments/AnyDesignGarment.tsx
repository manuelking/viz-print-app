import Image from 'next/image'
import React from 'react'

export default function AnyDesignGarment() {
  return (
    <div className="w-full flex flex-row bg-white px-[200px] py-[70px] justify-between">
      <div className="flex flex-col">
        <Image
          src={'/viz-shirt-icon.svg'}
          alt="Email Icon"
          width={55.5}
          height={49.3}
        />
        <div className="pt-[26px]">
          <div>
            <p className="font-bold text-[40px] leading-[52px] text-black pb-[10px]">
              Any design, Any garment
            </p>
            <p className="font-normal text-[20px] leading-[26px] text-black">
              Request the design and the garment you want and I’ll get to work!
            </p>
          </div>
          <div className="pt-[26px]">
            <ul className="list-none space-y-[15px]">
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Image
                    src={'/viz-bullet-point.svg'}
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-normal text-[28px] leading-[36.4px] text-black">
                    T-shirts
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Image
                    src={'/viz-bullet-point.svg'}
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-normal text-[28px] leading-[36.4px] text-black">
                    Hoodies
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Image
                    src={'/viz-bullet-point.svg'}
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-normal text-[28px] leading-[36.4px] text-black">
                    Fleeces
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Image
                    src={'/viz-bullet-point.svg'}
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-normal text-[28px] leading-[36.4px] text-black">
                    Polos
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Image
                    src={'/viz-bullet-point.svg'}
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-normal text-[28px] leading-[36.4px] text-black">
                    Sweatshirts
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-[15px]">
                  <Image
                    src={'/viz-bullet-point.svg'}
                    alt="Email Icon"
                    width={20}
                    height={20}
                  />
                  <p className="font-normal text-[28px] leading-[36.4px] text-black">
                    Running vests
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <Image
          src={'/viz-any-design-any-garment.png'}
          alt="Email Icon"
          width={318}
          height={490}
        />
      </div>
    </div>
  )
}
