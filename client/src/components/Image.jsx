import { useEffect, useRef } from 'react';

const Image = ({ src, alt }) => {
  const ref = useRef(null);

  useEffect(() => {
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserver(entry.target);
        }
      });
    };

    const options = {};

    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
  }, []);

  return <img ref={ref} data-src={src} alt={alt} />;
};

export default Image;
