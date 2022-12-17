import { CSSProperties, FC } from 'react';

interface ImagesWithTitleProps {
  bgColor?: string;
  imageList?: string[];
  title?: string;
}

const ImagesWithTitle: FC<ImagesWithTitleProps> = ({ bgColor, imageList, title }) => {
  const bgStyled: CSSProperties = {
    backgroundColor: bgColor,
  };

  return (
    <div className="ImagesWithTitle py-20" style={bgStyled}>
      <div className="container mx-auto">
        <div className="text-center text-4xl font-semibold text-gray-800 mb-3">{title}</div>
        {imageList &&
          imageList.map((image, idx) => (
            <div key={idx}>
              <img src={image} className="w-full lg:w-9/12 mx-auto" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImagesWithTitle;
