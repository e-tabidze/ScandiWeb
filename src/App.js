import React from "react";
import Carousel from "./carousel";
import "regenerator-runtime/runtime";

const App = () => {
  const carouselData = [
    {
      image:
        "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      key: "Hi! I am Elene Tabidze",
    },
    {
      image:
        "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png",
      key:
        "And this is carousel component in React, created without 'npx create-react-app'",
    },
    {
      image: "https://xpgraph.com/wp-content/uploads/2017/12/reactjs.jpg",
      key:
        "Honestly, I enjoyed doing this task, tnx for opportunity to learn sth new ",
    },
    {
      image:
        "https://scontent.ftbs5-2.fna.fbcdn.net/v/t1.6435-9/82040019_10158115685727022_8486535397537480704_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=e3f864&_nc_ohc=TB6twcBwLBwAX9nP4-p&_nc_ht=scontent.ftbs5-2.fna&oh=710158b6989d7b17ca301fd2819ccc8d&oe=6082F2E9",
      key:
        "I am looking forward to hearing from you! Say hello to Latvia, I really missed it",
    },
  ];

  return (
    <div>
      <Carousel carouselData={carouselData} />
    </div>
  );
};

export default App;
