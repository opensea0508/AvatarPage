import React from "react";
import Avatar from "./Avatar";
import "./App.css";

const list = [
  {
    id: 1,
    name: "Bhuvan",
    subscribed: true,
    dialog: "Bhai ke izzat dubadi",
    link: "https://www.youtube.com/channel/UCqwUrj10mAEsqezcItqvwEw",
  },
  {
    id: 2,
    name: "Ashish",
    subscribed: false,
    dialog: "Bijli ka bill tera baap bharega",
    link: "https://www.youtube.com/user/ashchanchlani",
  },
  {
    id: 3,
    name: "Mr.Carry",
    subscribed: true,
    dialog: "Toh kaise hai aap log",
    link: "https://www.youtube.com/user/AddictedA1",
  },
  {
    id: 4,
    name: "Gaurav Chaudhary",
    subscribed: false,
    dialog: "Chaliye shuru karte hai",
    link: "https://www.youtube.com/channel/UCOhHO2ICt0ti9KAh-QHvttQ",
  },
];

function App() {
  const card = list.map((card, index) => {
    const setSubscribed = (state) => {
      card.subscribed = state;
      // console.log("change");
      // console.log(card.subscribed);
    };
    return (
      <Avatar
        key={index}
        id={card.id}
        name={card.name}
        subscribed={card.subscribed}
        setSubscribed={setSubscribed}
        dialog={card.dialog}
        link={card.link}
      />
    );
  });

  return (
    <div className="app">
      <div className="heading">
        <h1>Welcome to Youtubers Avatar Page</h1>
      </div>

      <div className="card-list"> {card}</div>
    </div>
  );
}

export default App;
