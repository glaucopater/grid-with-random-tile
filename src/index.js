import React from "react";
import ReactDOM from "react-dom";
import Item from "./components/Item";
import { StyledGrid } from "./components/Styled";

import "./styles.css";
import { MAX_ITEMS, MAX_ITEMS_PER_ROW } from "./constants";

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
      topConnected: null,
      rightConnected: null,
      leftConnected: null,
      bottomConnected: null
    };
  };

  const connectItems = itemsWithProps => {
    const rightConnectedItems = itemsWithProps.map((item, index) => {
      //every check and update should be atomic
      const {
        rightConnected,
        leftConnected,
        topConnected,
        bottomConnected,
        ...props
      } = item.props;
      return React.cloneElement(item, {
        topConnected:
          itemsWithProps[index - MAX_ITEMS_PER_ROW] &&
          itemsWithProps[index - MAX_ITEMS_PER_ROW].props.bottom &&
          item.props.top,
        rightConnected:
          (index + 1) % MAX_ITEMS_PER_ROW !== 0 &&
          itemsWithProps[index + 1] &&
          itemsWithProps[index + 1].props.left &&
          item.props.right,
        bottomConnected:
          itemsWithProps[index + MAX_ITEMS_PER_ROW] &&
          itemsWithProps[index + MAX_ITEMS_PER_ROW].props.top &&
          item.props.bottom,
        leftConnected:
          index % MAX_ITEMS_PER_ROW !== 0 &&
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
