import React from "react";
import ReactDOM from "react-dom";
import Item from "./components/Item";
import { StyledGrid } from "./components/Styled";

import "./styles.css";
import { MAX_ITEMS } from "./constants";

function App() {
  const randomInt = () => {
    return Math.random() < 0.5;
  };

  const generateRandomProp = index => {
    return {
      pos: { x: index, y: 0 },
      top: randomInt(),
      right: randomInt(),
      bottom: randomInt(),
      left: randomInt(),
      rightConnected: null,
      leftConnected: null
    };
  };

  const connectItems = itemsWithProps => {
    const rightConnectedItems = itemsWithProps.map((item, index) => {
      //every check and update should be atomic
      //connections could be 4...
      const { rightConnected, leftConnected, ...props } = item.props;
      return React.cloneElement(item, {
        rightConnected:
          itemsWithProps[index + 1] &&
          itemsWithProps[index + 1].props.left &&
          item.props.right,
        leftConnected:
          itemsWithProps[index - 1] &&
          itemsWithProps[index - 1].props.right &&
          item.props.left,
        ...props
      });
    });

    return rightConnectedItems;
  };

  const generateItems = () => {
    const items = [...Array(MAX_ITEMS).keys()];
    const itemsWithProps = items.map((item, index) => {
      const randomProps = generateRandomProp(index);
      return (
        <Item key={index} {...randomProps}>
          {index}
        </Item>
      );
    });

    return connectItems(itemsWithProps);
  };

  return (
    <div className="App">
      <StyledGrid>{generateItems()}</StyledGrid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
