import React from "react";
import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
      console.log("SET");
    } else console.log("NOT SET");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("HELLO!");
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="UserName" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Password" name="password" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
