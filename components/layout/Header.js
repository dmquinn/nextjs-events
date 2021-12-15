import React, { useState, useEffect, useCallback, useRef } from "react";
import headerData from "../../pages/headerData";
import Hamburger from "../ui/Hamburger";

const Header = () => {
  const imgArray = headerData.map((value) => value.img);
  const textArray = headerData.map((value) => value.text);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === imgArray.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 9000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      <div
        className="banner h-70 mt--8 z-1"
        style={{ backgroundImage: `url(${imgArray[currentIndex]})` }}
      >
        {" "}
        <Hamburger />
        <h1 className="z-5 bannerText text-white">{textArray[currentIndex]}</h1>
      </div>
    </div>
  );
};

export default Header;
