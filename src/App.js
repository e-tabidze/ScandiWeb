import React from "react";
import Carousel from "./Carousel/Carousel";
import "regenerator-runtime/runtime";

const App = () => {
  return (
    <div>
      <Carousel
        show={3}
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://via.placeholder.com/300x300"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default App;
