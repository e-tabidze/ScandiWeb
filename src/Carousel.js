import React, { useState, useEffect, useRef } from "react";
import "./Carousel/Carousel.css";

const Carousel = (props) => {
  const slider = useRef();
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);
  const [isDown, setIsDown] = useState(false);
  const [active, setActive] = useState(false);
  const [startX, setStartX] = useState();
  const [p, setP] = useState(0);
  const [left, setLeft] = useState(0);
  const [percent, setPercent] = useState(false);

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const handleMouseDown = (e) => {
    e.persist();
    setIsDown(true);
    setActive(true);
    setStartX(e.pageX - slider.current.getBoundingClientRect().left);
    slider.current.style.cursor = "grabbing";
  };

  const hanldeMouseLeave = () => {
    setIsDown(false);
    setActive(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
    setActive(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current.getBoundingClientRect().left;
    const walk = startX - x;
    const z = slider.current.scrollLeft + walk;
    setLeft(left + z);
    slider.current.scrollLeft = z;
  };

  const goLeftPercent = () => {
    return {
      // transform: `translatex(${p}px)`,
      transition: "0.3s",
    };
  };
  // const goLeft = () => {
  //   if (p < -970) {
  //     return;
  //   }
  //   setP(p - 326);
  //   setLeft({ left: p });
  //   setPercent(true);
  // };

  const goLeft = (e) => {
    if (isDown) return;
    e.preventDefault();
    // const walk = 300;
    const z = slider.current.scrollLeft + 300;
    setLeft(left + z);
    slider.current.scrollLeft = z;
    console.log(z);
  };
  const goRight = (e) => {
    if (isDown) return;
    e.preventDefault();
    // const walk = 300;
    const z = slider.current.scrollLeft - 300;
    setLeft(left - z);
    slider.current.scrollLeft = z;
    console.log(z);
  };
  // const goRight = () => {
  //   if (p === 0) {
  //     return;
  //   }
  //   setP(p + 326);
  //   setLeft({ left: p });
  // };

  const mouseMove = () => {
    if (left > 0) {
      setLeft(0);
      return;
    } else if (left < -980) {
      setLeft(-980);
      return;
    }
    // return {
    //   transform: `translatex(${left}px)`,
    // };
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="left-arrow" onClick={goLeft}>
          &lt;
        </button>
        <div
          className={
            active
              ? "carousel-content-wrapper-active"
              : "carousel-content-wrapper"
          }
          style={percent ? goLeftPercent() : mouseMove()}
          ref={slider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseDown={handleMouseDown}
          onMouseLeave={hanldeMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {children}
          </div>
        </div>
        <button className="right-arrow" onClick={goRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
