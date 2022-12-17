import { FC, useState } from 'react';

interface TabItem {
  title: string;
  content: JSX.Element;
}

interface TabsProps {
  tabList?: TabItem[];
}

const Tabs: FC<TabsProps> = ({ tabList }) => {
  const [tab, setTab] = useState(0);

  const onChangeTab = (idx: number) => () => {
    setTab(idx);
  };

  return (
    <div className="Tabs">
      <div className="flex">
        {tabList &&
          tabList.map((item, idx) => (
            <div
              key={`tab-${item.title}`}
              className={
                'flex-1 text-center py-2 px-1 font-semibold text-xl hover:bg-blue-100' +
                (tab === idx ? ' bg-blue-200 text-blue-800 border-b-2 border-blue-800' : '')
              }
              onClick={onChangeTab(idx)}
            >
              {item.title}
            </div>
          ))}
      </div>
      <div className="py-10">
        {tabList &&
          tabList.map((item, idx) => (
            <div key={`tab-content-${item.title}`} className={tab === idx ? '' : 'hidden'}>
              {item.content}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
