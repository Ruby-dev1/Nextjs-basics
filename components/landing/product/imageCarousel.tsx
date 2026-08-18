"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
interface IProps {
  images: {
    path: string;
    public_id: string;
  }[];
}

const ProductImageCarousel = ({ images }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // No images
  if (!images || images.length === 0) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-gray-100 text-gray-400">
        No image available
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={images[currentIndex].path}
          alt={`Product image ${currentIndex + 1}`}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover "
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl shadow-md transition hover:bg-white"
            aria-label="Previous image"
          >
            <IoIosArrowBack />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl shadow-md transition hover:bg-white"
            aria-label="Next image"
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={image.public_id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                currentIndex === index
                  ? "border-primary"
                  : "border-transparent"
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image.path}
                alt={`Product thumbnail ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageCarousel;