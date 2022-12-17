import { useState, useEffect } from 'react';
import axios from 'axios';

import main_items from '../assets/images/main-items.jpg';
import { BannerImage, ItemGrid } from '../components';

const ItemsPage = () => {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios.get('http://localhost:8001/items').then((success) => {
      console.log(success.data);
      setItems(success.data);
    });
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="ItemsPage -mt-16">
      <BannerImage imgSrc={main_items} />
      <div className="container mx-auto py-24">
        <ItemGrid data={items} />
      </div>
    </div>
  );
};

export default ItemsPage;
