import { FC, ReactNode } from 'react';
import Image, { ImageProps } from './Image';

interface CardProps {
  children?: ReactNode;
  image?: ImageProps;
}

const Card: FC<CardProps> = ({ children, image }) => {
  return (
    <div className="Card text-center">
      <Image src={image?.src} webp={image?.webp} alt={image?.alt} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {children}
      </div>
    </div>
  );
};

export default Card;
