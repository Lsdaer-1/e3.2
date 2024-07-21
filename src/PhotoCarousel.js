import React, { useState, useEffect } from 'react';
import './PhotoCarousel.css'; // 确保有对应的CSS文件来进行样式调整
import photo1 from './Photo/p1.webp';
import photo2 from './Photo/p2.webp';
import photo3 from './Photo/p3.webp';

const photos = [
  photo1,photo2,photo3
];

const PhotoCarousel = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) =>
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 每3秒切换一次照片

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="photo-carousel">
      <img src={photos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} />
    </div>
  );
};

export default PhotoCarousel;
