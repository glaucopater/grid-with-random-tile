import React from "react";
import ReactDOM from "react-dom";
import Item from "./components/Item";
import { StyledGrid } from "./components/Styled";

import "./styles.css";

function App() {
  const items = [...Array(20).keys()];

  const randomInt = () => {
    return Math.random() < 0.5;
  };

  return (
    <div className="App">
      <StyledGrid>
        {items.map((item, index) => {
          const randomProps = {
            pos: { x: index, y: 0 },
            top: randomInt(),
            right: randomInt(),
            bottom: randomInt(),
            left: randomInt()
          };
          return <Item {...randomProps}>{index}</Item>;
        })}
      </StyledGrid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
