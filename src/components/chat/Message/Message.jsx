import React from "react";

const Message = ({ data, own }) => {
  return own ? (
    <div className="message">
      <img src="./avatar.png" alt="" />
      <div className="texts">
        <p>{data}</p>
        <span>1 min ago</span>
      </div>
    </div>
  ) : (
    <div className="message">
      <img src="./avatar.png" alt="" />
      <div className="texts">
        <p>{data}</p>
        <span>1 min ago</span>
      </div>
    </div>
  );
};

export default Message;
