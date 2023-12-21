import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const dropdown = [
  {
    id: 'dd-1',
    title: 'Garments',
    link: '/garments',
  },
  {
    id: 'dd-2',
    title: 'Garden Plaques',
    link: '/garden-plaques',
  },
  {
    id: 'dd-3',
    title: 'Place mats & Coasters',
    link: '/place-mats-coasters',
  },
  {
    id: 'dd-4',
    title: 'House Signs',
    link: '/house-signs',
  },
]

export default function Navbar() {
  return (
    // add a max height after a certain media size then for all other smaller sizes add a min height or something so that it goes back to the height dictated by the elements/image. OR this set the height for a certain screen size and then smaller than that it should just reset.
    <div className="w-full flex flex-row justify-between px-[200px] bg-white items-center">
      <div>
        <Link href={'/'}>
          <Image
            src={'/viz-logo.svg'}
            alt="Viz Print Logo"
            width={202}
            height={126}
          />
        </Link>
      </div>
      <div className="flex flex-row gap-x-[27px]">
        <div className="dropdown dropdown-hover">
          <p tabIndex={0} className="text-primary text-[20px] leading-[20px]">
            products
          </p>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-[20px] shadow bg-[#0F3670] rounded-box w-[168px]"
          >
            {dropdown.map(({ id, title, link }) => (
              <div key={id} className="space-y-[15px] pb-[15px]">
                <Link href={link}>
                  <li className="font-medium text-[16px] leading-[20.8px] text-[white]">
                    {title}
                  </li>
                </Link>
                <hr className="border-1 border-[#8CBAFF]" />
              </div>
            ))}
          </ul>
        </div>
        <p className="text-primary text-[20px] leading-[20px]">contact me</p>
      </div>
    </div>
  )
}
