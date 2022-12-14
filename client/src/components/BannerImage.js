import React from 'react';

function BannerImage(props) {
  return (
    <div className="BannerImage w-full h-screen overflow-hidden relative bg-texture">
      <div className="absolute h-screen w-full">
        <img
          src={props.image}
          className="absolute translateX--1/2 h-screen max-w-none min-w-full -z-10"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-white text-center">
          <div className="text-6xl leading-none font-semibold">{props.text}</div>
        </div>
      </div>
    </div>
  );
}

export default BannerImage;
