import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Display from "./components/Display";

const Button = styled.button`
  width: ${props => props.width};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`;

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${clickCount} times!`;
  }, [clickCount]);

  useEffect(() => {
    document.title = `Go and click`;

    return () => {
      console.log("Component is unmounting");
    };
  }, []);

  const increaseClickCount = e => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Display count={clickCount} />
        <Button
          width="300px"
          bgColor="blue"
          color="yellow"
          onClick={e => increaseClickCount(e)}
        >
          Increase Count
        </Button>
        <Button width="150px" bgColor="red" color="green">
          Decrease Count
        </Button>
      </header>
    </div>
  );
}

// const styles = {
//   blueButton: {
//     backgroundColor: "blue",
//     color: "yellow"
//   }
// };

export default App;
