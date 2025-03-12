"use client"
import Image from "next/image";
import { useState } from "react";
import { IconType } from "react-icons";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
    images: string[];
}

interface ButtonProps {
  onClick: () => void;
  icon: IconType;
  disabled: boolean;
}

const NavigationButton = ({ onClick, icon: Icon, disabled }: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="disabled:opacity-10 disabled:pointer-events-none cursor-pointer flex justify-center px-4 py-4 border border-primary-500 rounded-[8px] hover:bg-primary-500 active:scale-95 transition-all hover:text-white text-primary-500"
  >
    <Icon className="size-8" />
  </button>
);

export default function ImagePreview({ images }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <Image
        className="border border-primary-500 rounded-[8px]"
        alt="product image"
        src={images[currentImageIndex]}
        width={512}
        height={512}
      />

      <div className="grid grid-cols-2 gap-4">
        <NavigationButton onClick={handlePrevClick} icon={FiChevronLeft} disabled={currentImageIndex === 0} />
        <NavigationButton onClick={handleNextClick} icon={FiChevronRight} disabled={currentImageIndex === images.length - 1} />
      </div>
    </>
  );
}
