import { FC } from 'react';

interface YoutubePlayerProps {
  id: string;
}

const YoutubePlayer: FC<YoutubePlayerProps> = ({ id }) => {
  return (
    <div className="relative pb-16:9 h-0">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};

export default YoutubePlayer;
