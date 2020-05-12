import React, { useState } from "react";

export default function Avatar({
  id,
  name,
  subscribed,
  setSubscribed,
  dialog,
  link,
}) {
  const [subscribe, setSubscribe] = useState(subscribed);
  const subscribeToggle = () => {
    setSubscribe(!subscribe);
    setSubscribed(!subscribe);
  };
  return (
    <div className="card">
      <img
        height="220px"
        src={`https://joeschmoe.io/api/v1/${name}`}
        alt="Avatar"
      />
      <h2 className="name"> {name} </h2>
      <h4 className="dialog">"{dialog}"</h4>
      <button onClick={subscribeToggle} className={subscribe ? "grey" : "red"}>
        {subscribe ? "Unsubscribe" : "Subscribe"}
      </button>
      <a href="{link}">Visit Channel</a>
    </div>
  );
}
