import { nanoid } from 'nanoid';

import main1 from '../assets/images/main1.jpg';
import main2 from '../assets/images/main2.jpg';
import main3 from '../assets/images/main3.jpg';
import main_items from '../assets/images/main-items.jpg';
import main_parts from '../assets/images/main-parts.jpg';
import main_styles from '../assets/images/main-styles.jpg';
import { BannerVideo, Card, Image, Meta, ThreeColumns, TwoColumns } from '../components';
import { ROUTER_PATH } from '../constants';

const MainPage = () => {
  return (
    <div className="MainPage -mt-16">
      <BannerVideo />
      <div className="mx-auto">
        <ThreeColumns
          columns={[
            <Card key={nanoid()} imgSrc={main1}>
              롱보드는 아주 재밌습니다.
            </Card>,
            <Card key={nanoid()} imgSrc={main2}>
              롱보드를 타면 아주 신납니다.
            </Card>,
            <Card key={nanoid()} imgSrc={main3}>
              롱보드는 굉장히 재밌습니다.
            </Card>,
          ]}
        />
        <TwoColumns
          bgColor={'#f4f4f4'}
          columns={[
            <Image key={nanoid()} src={main_items} />,
            <Meta
              key={nanoid()}
              title="Items"
              content="롱보드는 기본적으로 데크가 크기 때문에 입맛에 따라 정말 여러가지로 변형된 형태가 나올수 있습니다. 실제로 데크마다 가지는 모양, 재질, 무게는 천차만별인데, 본인의 라이딩 스타일에 맞춰 롱보드를 구매하시는게 좋습니다."
              btnLink={ROUTER_PATH.ITEMS}
            />,
          ]}
        />
        <TwoColumns
          bgColor="#fafafa"
          columns={[
            <Meta
              key={nanoid()}
              title="Parts of Longboard"
              content="롱보드는 데크, 트럭, 휠, 킹핀, 베어링 등 여러 부품들로 구성됩니다. 롱보드를 타다보면 조금씩 고장나는 부품이 있기 마련인데, 이럴때를 위해 롱보들의 부품들에 대해서 알고 있으면 큰 도움이 됩니다."
              btnLink={ROUTER_PATH.PART}
            />,
            <Image key={nanoid()} src={main_parts} />,
          ]}
          mobileReverse={true}
        />
        <TwoColumns
          bgColor="#f4f4f4"
          columns={[
            <Image key={nanoid()} src={main_styles} />,
            <Meta
              key={nanoid()}
              title="Riding Styles"
              content="롱보드 라이딩 스타일에는 크게 프리스타일, 다운힐, 프리라이딩, 댄싱이 있습니다. 보통 롱보드는 라이딩 스타일에 따라 데크의 모양이 조금씩 달라집니다. 많은 롱보드 매니아들이 각 쓰임새에 맞는 보드들을 소유하고 있습니다."
              btnLink={ROUTER_PATH.RIDING_STYLES}
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default MainPage;
