import { useState } from "react";
import { Button } from "antd";

import ManageBody from "./components/ManageBody";
import "./App.css";

import Gitee from "./assets/Gitee.png";
import Github from "./assets/GitHub.png";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>Welcome to Git Manager App</h1>
      {isLoggedIn ? (
        <>
          {" "}
          <p>Welcome git user</p>
          <Button type="primary" onClick={() => setIsLoggedIn(false)}>
            Log out
          </Button>
          <ManageBody />
        </>
      ) : (
        <div>
          <p>Choose login in method: gitee / github</p>
          <img
            src={Gitee}
            className="git-logo"
            alt="Gitee"
            onClick={() => setIsLoggedIn(true)}
          />
          <img
            src={Github}
            className="git-logo"
            alt="Github"
            onClick={() => setIsLoggedIn(true)}
          />
        </div>
      )}
    </>
  );
}

export default App;
