import React from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef, useEffect } from "react";

const Chat = () => {
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setEmojiPickerOpen(false);
  };

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
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
              ducimus fugit delectus in libero perspiciatis obcaecati? Excepturi
              quibusdam mollitia perferendis! Hic mollitia perspiciatis cumque
              ut voluptatibus temporibus, suscipit ipsa deleniti!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
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
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
