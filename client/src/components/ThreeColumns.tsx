import { FC } from 'react';

interface ThreeColumnsProps {
  columns: JSX.Element[];
}

const ThreeColumns: FC<ThreeColumnsProps> = ({ columns }) => {
  return (
    <div className="ThreeColumns my-16">
      <div className="flex container mx-auto flex-col sm:flex-row">
        <div className="flex-1 mx-4 lg:m-8 lg:ml-32">{columns[0]}</div>
        <div className="flex-1 mx-4 lg:m-8">{columns[1]}</div>
        <div className="flex-1 mx-4 lg:m-8 lg:mr-32">{columns[2]}</div>
      </div>
    </div>
  );
};

export default ThreeColumns;
