import { FC, ImgHTMLAttributes, useEffect, useRef } from 'react';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const Image: FC<ImageProps> = ({ src, alt, ...rest }) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {};

    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLImageElement).src =
            (entry.target as HTMLImageElement).dataset.src || '';
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (ref.current) observer.observe(ref.current);
  }, []);

  return <img ref={ref} data-src={src} alt={alt} {...rest} />;
};

export default Image;
