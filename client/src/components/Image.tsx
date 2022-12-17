import { FC, useEffect, useRef } from 'react';

export interface ImageProps {
  alt?: string;
  src?: string;
  webp?: string;
}

const Image: FC<ImageProps> = ({ alt, src, webp }) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {};

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        const imageElement = entry.target as HTMLImageElement;
        const sourceElement = entry.target.previousElementSibling as HTMLSourceElement;

        if (entry.isIntersecting) {
          imageElement.src = imageElement.dataset.src || '';
          sourceElement.srcset = sourceElement.dataset.srcset || '';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <picture>
      <source data-srcset={webp} type="image/webp" />
      <img ref={ref} data-src={src} alt={alt} />
    </picture>
  );
};

export default Image;
