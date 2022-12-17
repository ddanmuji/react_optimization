import { CSSProperties, FC } from 'react';

interface ThreeColumnsProps {
  columns: JSX.Element[];
  mobileReverse?: boolean;
  bgColor?: string;
}

const TwoColumns: FC<ThreeColumnsProps> = ({ columns, bgColor, mobileReverse }) => {
  const bgStyled: CSSProperties = {
    backgroundColor: bgColor,
  };

  return (
    <div className="TwoColumns py-16" style={bgStyled}>
      <div
        className={
          'flex flex-col sm:flex-row container mx-auto' + (mobileReverse ? ' flex-col-reverse' : '')
        }
      >
        <div className="flex-1 sm:my-8 sm:ml-4 sm:mr-2 lg:ml-6 lg:mr-6 flex items-center">
          {columns[0]}
        </div>
        <div className="flex-1 sm:my-8 sm:mr-4 sm:ml-2 lg:mr-6 lg:ml-6 flex items-center">
          {columns[1]}
        </div>
      </div>
    </div>
  );
};

export default TwoColumns;
