import main_styles from '../assets/images/main-styles.jpg';
import { BannerImage, Tabs, YoutubePlayer } from '../components';

const tabList = [
  { title: '댄싱', content: <YoutubePlayer id="0BwkZLJI-PI" /> },
  { title: '프리스타일', content: <YoutubePlayer id="ybBMXQX_1_w" /> },
  { title: '다운힐', content: <YoutubePlayer id="Qwim07syZgQ" /> },
  { title: '프리라이딩', content: <YoutubePlayer id="rO9wGssc3Dk" /> },
];

const RidingStylesPage = () => {
  return (
    <div className="RidingStylesPage -mt-16">
      <BannerImage imgSrc={main_styles} text="Riding Styles" />
      <div className="container py-16 mx-auto">
        <Tabs tabList={tabList} />
      </div>
    </div>
  );
};

export default RidingStylesPage;
