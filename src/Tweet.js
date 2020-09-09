import React from "react";
import "./App.css";

function Tweet(props) {
  return (
    <div className="tweet">
      <h3>{props.name}</h3>
      <h3>Message</h3>
      <h3>Date</h3>
      <h3>Likes</h3>
    </div>
  );
}
export default Tweet;
