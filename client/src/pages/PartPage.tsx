import main_parts from '../assets/images/main-parts.jpg';
import deck1 from '../assets/images/deck1.jpg';
import deck2 from '../assets/images/deck2.jpg';
import truck1 from '../assets/images/truck1.webp';
import wheel1 from '../assets/images/wheel1.png';
import wheel2 from '../assets/images/wheel2.jpg';
import etc1 from '../assets/images/etc1.jpg';
import etc2 from '../assets/images/etc2.jpg';
import etc3 from '../assets/images/etc3.jpg';
import { BannerImage, ImagesWithTitle } from '../components';

const PartPage = () => {
  return (
    <div className="PartPage -mt-16">
      <BannerImage imgSrc={main_parts} text="Parts of Longboard" />
      <div className="container mx-auto">
        <ImagesWithTitle title="덱 (Deck)" bgColor="none" imageList={[deck1, deck2]} />
        <ImagesWithTitle title="트럭 (Truck)" bgColor="none" imageList={[truck1]} />
        <ImagesWithTitle title="휠 (Wheel)" bgColor="none" imageList={[wheel1, wheel2]} />
        <ImagesWithTitle title="기타 부품 (ETC)" bgColor="none" imageList={[etc1, etc2, etc3]} />
      </div>
    </div>
  );
};

export default PartPage;
