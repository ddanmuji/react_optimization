import Image from './Image';

const Card = (props) => {
  return (
    <div className="Card text-center">
      <Image src={props.image} alt={'alt'} />
      <div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
        {props.children}
      </div>
    </div>
  );
};

export default Card;
