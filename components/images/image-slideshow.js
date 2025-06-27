"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

export default function ImageSlideshow({ images = [] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(images) && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images]);

  if (!Array.isArray(images) || images.length === 0) {
    return <div className={classes.slideshow}>No images found</div>;
  }

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
          width={800}
          height={600}
          priority={index === 0}
        />
      ))}
    </div>
  );
}
