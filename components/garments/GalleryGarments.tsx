'use client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const images = [
    {
      id: 'viz-img-1',
      src: '/viz-gal-1.png',
      alt: 'Gallery Image 1',
      w: 1200,
      h: 364.7,
    },
    {
      id: 'viz-img-2',
      src: '/viz-any-design-any-garment.png',
      alt: 'Gallery Image 2',
      w: 295,
      h: 434,
    },
    {
      id: 'viz-img-3',
      src: '/viz-custom-garments.png',
      alt: 'Gallery Image 3',
      w: 483,
      h: 434,
    },
    {
      id: 'viz-img-4',
      src: '/viz-gal-2.png',
      alt: 'Gallery Image 4',
      w: 401,
      h: 434,
    },
  ]

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <div className="w-full flex flex-col bg-white px-[200px] pt-[64px] pb-[96px]">
      <div className="pb-[64px] space-y-[5px]">
        <p className="font-bold text-[40px] leading-[52px] text-black">
          Gallery
        </p>
        <Image src="/viz-line.svg" alt="" width={66} height={0} />
      </div>
      <div className="grid grid-cols-3 grid-flow-row auto-rows-max gap-y-[34.29px]">
        {images.map((image, index) => {
          const { id, src, alt, w, h } = image
          return (
            <Image
              key={id}
              src={src}
              width={w}
              height={h}
              alt={alt}
              className={index === 0 ? `col-span-3` : ``}
              onClick={() => openImageViewer(index)}
            />
          )
        })}

        {isViewerOpen && (
          <ImageViewer
            src={images.map((i) => i.src)}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </div>
  )
}
