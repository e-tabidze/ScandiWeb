import React, { useState, useEffect } from "react";
import "./carousel.css";
import CarouselData from "./carouselData";

const Carousel = ({ carouselData }) => {
  const [elementToShow, setElementToShow] = useState(null);
  const [indexOfElement, setIndexOfElement] = useState(0);

  useEffect(() => {
    handleElementChange();
    return () => {
      setIndexOfElement(0);
    };
  }, []);

  useEffect(() => {
    handleElementChange();
  }, [indexOfElement]);

  const handleElementChange = async () => {
    await setElementToShow(carouselData[indexOfElement]);
  };

  const handleNextClick = () => {
    let maxindex = carouselData.length - 1;
    if (indexOfElement == maxindex) {
      setIndexOfElement(0);
    } else {
      setIndexOfElement(indexOfElement + 1);
    }
    console.log(maxindex, carouselData.length);
  };

  const handlePrevClick = () => {
    if (indexOfElement == 0) {
      setIndexOfElement(carouselData.length - 1);
    } else {
      setIndexOfElement(indexOfElement - 1);
    }
  };

  return (
    <div className="contianer">
      <div>
        <div>ScandiwebSlider</div>

        <div className="slider">
          <CarouselData
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            elementToShow={elementToShow}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
