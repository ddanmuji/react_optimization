import { FC, ReactNode } from 'react';
import Image from './Image';

interface CardProps {
  children?: ReactNode;
  imgAlt?: HTMLImageElement['alt'];
  imgSrc?: HTMLImageElement['src'];
}

const Card: FC<CardProps> = ({ children, imgAlt, imgSrc }) => {
  return (
    <div className="Card text-center">
      <Image src={imgSrc} alt={imgAlt} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {children}
      </div>
    </div>
  );
};

export default Card;
