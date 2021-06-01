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
              src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvcmtpbmd8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="placeholder"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div style={{ padding: 8 }}>
            <img
              src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
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
