import { io } from "socket.io-client";
import React from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";
import Message from "./Message/Message";

const Chat = () => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setEmojiPickerOpen(false);
  };

  const socket = io("http://localhost:8000");

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (text.trim()) {
      socket.emit("MessageFromClient", text);
      setText("");
    }
  };
  socket.on("MessageToAllClients", (data) => {
    setMessages([...messages, data]);
  });

  const endRef = useRef();
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet </p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {messages.map((message, index) => (
          <Message
            data={message}
            own={false}
            key={index} // Use index as the key for now
          />
        ))}
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setEmojiPickerOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={emojiPickerOpen} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton" onClick={handleSubmitMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
