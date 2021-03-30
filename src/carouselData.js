import React, { useState, useRef } from "react";
import "./carouselData.css";

function CarouselData({ handleNextClick, handlePrevClick, elementToShow }) {
  const [scrollLeft, setScrollLeft] = useState(null);

  let isDown = false;
  let startX = 0;
  // let scrollLeft = 0;
  const eachslide = useRef();

  const handleMouseDown = (e) => {
    e.persist();
    isDown = true;
    startX = e.pageX - slider.current.offsetLeft;
    let scrollLeft = slider.current.scrollLeft;
    console.log("Mouse is Down", startX, scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (startX - x) / 20;
    const z = slider.current.scrollLeft - walk;
    setScrollLeft(scrollLeft + z);
    console.log(
      "Mouse Move",
      startX,
      scrollLeft,
      walk,
      slider.current.scrollLeft
    );
  };

  const handleMouseLeave = (e) => {
    isDown = false;
    console.log("Mouse left", e);
  };

  const handleMouseUp = (e) => {
    isDown = false;
    console.log("Mouse is Up ", e);
    console.log("OffsetLeft", slider);
  };
  return (
    <div>
      <div
        id="slide"
        className="eachslide"
        ref={eachslide}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <h1 className="slideheader">{elementToShow && elementToShow.key}</h1>
        <img className="slideimg" src={elementToShow && elementToShow.image} />
      </div>
      <div className="button-container">
        <button onClick={() => handlePrevClick()} className="prev">
          Prev
        </button>
        <button onClick={() => handleNextClick()} className="next">
          Next
        </button>
      </div>
    </div>
  );
}

export default CarouselData;
