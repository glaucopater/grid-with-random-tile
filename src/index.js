import React from "react";
import ReactDOM from "react-dom";
import Item from "./components/Item";
import { StyledGrid } from "./components/Styled";

import "./styles.css";

const MAX_ITEMS = 5;

function App() {

  const randomInt = () => {
    return Math.random() < 0.5;
  };

  const generateRandomProp = (index) => {
    return {
      pos: { x: index, y: 0 },
      top: randomInt(),
      right: randomInt(),
      bottom: randomInt(),
      left: randomInt(),
      rightConnected: null,
      leftConnected: null
    }
  }

  const connectItems = (itemsWithProps) => {
    const rightConnectedItems = 
    itemsWithProps.map((item,index)=>{
      //every check and update should be atomic
      //connections could be 4
      //first check right with next left
      if(itemsWithProps[index+1]){
        if(item.props.right && (item.props.right === itemsWithProps[index+1].props.left)){
          const { rightConnected, ...props } = item.props;
          const newItem =  React.cloneElement(item, {
            rightConnected: true,
            ...props
          });

              //second check left with previous right, I just need to know if it was rightConnected
          if(itemsWithProps[index-1]){
            console.log("checking connection ",index, index-1, newItem.props.left, itemsWithProps[index-1].props.right );
            if(newItem.props.left && (newItem.props.left === itemsWithProps[index-1].props.right)){
            const { leftConnected, ...props } = newItem.props;
              return React.cloneElement(item, {
                leftConnected: true,
                ...props
              });
            }
else
          return newItem;
        }
        else return newItem;
      }

        else return item;
      }

      else return item;
    })

    return rightConnectedItems;

  }

  const generateItems = () => {
    const items = [...Array(MAX_ITEMS).keys()];
    const itemsWithProps =
      items.map((item, index) => {
      const randomProps = generateRandomProp(index);
      return <Item key={index} {...randomProps}>{index}</Item>;
    })

    return connectItems(itemsWithProps);
  }

  return (
    <div className="App">
      <StyledGrid>
        {generateItems()}
      </StyledGrid>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
