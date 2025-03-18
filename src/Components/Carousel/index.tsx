import React, { useState, useEffect, useRef } from 'react';
import './Carousel.scss';

interface CarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const total = children.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getIndices = () => {
    if (total === 0) return [];
    if (total === 1) return [0, 0, 0, 0, 0];
    if (total === 2) return [1, 0, 1, 0, 1];
    const extraLeft = (activeIndex - 2 + total) % total;
    const prev = (activeIndex - 1 + total) % total;
    const next = (activeIndex + 1) % total;
    const extraRight = (activeIndex + 2) % total;
    return [extraLeft, prev, activeIndex, next, extraRight];
  };

  const visibleIndices = getIndices();

  const handleTransitionEnd = () => {
    if (direction === 'right') {
      setActiveIndex((prev) => (prev + 1) % total);
    } else if (direction === 'left') {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    }
    setDirection(null);
    setIsAnimating(false);
    if (containerRef.current) {
      containerRef.current.style.transition = 'none';
      containerRef.current.style.transform = 'translateX(-365px)';
      void containerRef.current.offsetWidth;
      containerRef.current.style.transition =
        'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('transitionend', handleTransitionEnd);
      return () => container.removeEventListener('transitionend', handleTransitionEnd);
    }
  }, [direction]);

  const rotateRight = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    if (containerRef.current) {
      containerRef.current.style.transform = 'translateX(-765px)';
    }
  };

  const rotateLeft = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    if (containerRef.current) {
      containerRef.current.style.transform = 'translateX(35px)';
    }
  };

  return (
    <div className="infinite-carousel-container">
      <button
        className="carousel-button prev-button"
        onClick={rotateLeft}
        disabled={isAnimating}
        aria-label="Previous"
      >
        &lt;
      </button>

      <div className="carousel-viewport">
        <div className="carousel-items-container" ref={containerRef}>
          {visibleIndices.map((index, i) => (
            <div
              key={`carousel-item-${i}`}
              className={`carousel-item ${i === 2 ? 'active' : ''}`}
            >
              {children[index]}
            </div>
          ))}
        </div>
      </div>

      <button
        className="carousel-button next-button"
        onClick={rotateRight}
        disabled={isAnimating}
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;