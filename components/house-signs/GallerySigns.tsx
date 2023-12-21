'use client'
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'

export default function GallerySigns() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const images = [
    {
      id: 'viz-img-1',
      src: '/viz-house-signs.png',
      alt: 'Gallery Image 1',
      w: 1200,
      h: 364.7,
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
      <div className="grid grid-cols-3">
        {images.map((image, index) => {
          const { id, src, alt, w, h } = image
          return (
            <Image
              key={id}
              src={src}
              width={w}
              height={h}
              alt={alt}
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
