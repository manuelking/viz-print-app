import React from 'react'

interface TitleStripProps {
  title: string
  subtitle: string
}

export default function TitleStrip({ title, subtitle }: TitleStripProps) {
  return (
    <div className="w-full flex flex-col bg-tertiary px-[200px] py-[55px] gap-[10px]">
      <p className="font-bold text-[40px] leading-[52px] text-fifth">{title}</p>
      <p className="font-normal text-[24px] leading-[31.2px] text-black">
        {subtitle}
      </p>
    </div>
  )
}
