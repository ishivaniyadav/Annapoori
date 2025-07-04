import React, { useState } from "react";

const Image = ({ image, alt, style }) => {
  const [loaded, setLoaded] = useState(true);
  return (
    <div className="">
      {loaded && (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
      <img
        src={image}
        alt={alt}
        className={`${style}`}
        onLoad={() => setLoaded(false)}
      />
    </div>
  );
};

export default Image;
