import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  p = 0;
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
    };

    this.slider = React.createRef();
  }

  onMouseDown = (e) => {
    e.persist();
    this.isDown = true;

    this.startX = e.pageX - this.slider.current.offsetLeft;
    this.scrollLeft = this.slider.current.scrollLeft;
    this.slider.current.style.cursor = "grabbing";
    // console.log(
    //   e.pageX - this.slider.current.offsetLeft,
    //   this.slider.current.scrollLeft
    // );
  };
  onMouseLeave = () => {
    this.isDown = false;
  };
  onMouseUp = () => {
    this.isDown = false;
    this.slider.current.style.cursor = "pointer";
  };
  onMouseMove = (e) => {
    if (!this.isDown) {
      return;
    }

    e.preventDefault();
    var x = e.pageX - this.slider.current.offsetLeft;
    var walk = (this.startX - x) / 20;
    var z = this.slider.current.scrollLeft - walk;

    this.setState({ left: this.state.left + z }, () => {
      this.slider.current.scrollLeft = this.state.left;
    });
  };
  goLeftPercent = () => {
    return {
      transform: `translatex(${this.p}px)`,
      transition: "0.3s",
    };
  };
  goLeft = () => {
    if (this.p < -970) {
      return;
    }
    this.p += -326;
    this.setState({ left: this.p, percent: true });
  };
  goRight = () => {
    if (this.p === 0) {
      return;
    }
    this.p += 326;
    this.setState({ left: this.p });
  };

  mouseMove = () => {
    if (this.state.left > 0) {
      this.setState({ left: 0 });
      return;
    } else if (this.state.left < -980) {
      this.setState({ left: -980 });
      return;
    }
    return {
      transform: `translatex(${this.state.left}px)`,
    };
  };

  render() {
    const slides = [
      { src: "", name: "Livingroom1" },
      { src: "", name: "Livingroom2" },
    ];

    return (
      <div className="slider">
        <div className="slider-wrapper">
          <div
            onMouseDown={this.onMouseDown}
            style={this.state.percent ? this.goLeftPercent() : this.mouseMove()}
            onMouseUp={this.onMouseUp}
            onMouseLeave={this.onMouseLeave}
            onMouseMove={this.onMouseMove}
            ref={this.slider}
            className="slider-container test"
          >
            {slides.map((slide) => (
              <div className="slide">
                <img src={slide.src} alt="" />
                <div className="overlay">
                  <h1>{slide.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="slider-arrows">
          <div onClick={this.goLeft} className="arrow-wrapper">
            {" "}
            Left
            <div className="arrow-left">
              <div className="arrow-top" /> <div className="arrow-bottom" />{" "}
            </div>
          </div>
          <div onClick={this.goRight} className="arrow-right">
            Right
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
