import React from "react";
import Item from "../../components/Item";
import { StyledGrid } from "../../components/Styled";
import { MAX_ITEMS, MAX_ITEMS_PER_ROW } from "../../constants";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { firstAction } from "./actions";

class Board extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  randomInt = () => {
    return Math.random() < 0.5;
  };

  generateRandomProp = index => {
    return {
      pos: { x: index, y: 0 },
      top: this.randomInt(),
      right: this.randomInt(),
      bottom: this.randomInt(),
      left: this.randomInt(),
      topConnected: null,
      rightConnected: null,
      leftConnected: null,
      bottomConnected: null
    };
  };

  connectItems = itemsWithProps => {
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

  generateItems = () => {
    const items = [...Array(MAX_ITEMS).keys()];
    const itemsWithProps = items.map((item, index) => {
      const randomProps = this.generateRandomProp(index);
      return (
        <Item key={index} {...randomProps} firstAction={this.props.firstAction}>
          {index}
        </Item>
      );
    });

    return this.connectItems(itemsWithProps);
  };

  render() {
    return (
      <div className="Board">
        <StyledGrid>{this.generateItems()}</StyledGrid>
      </div>
    );
  }
}

export default connect(
  ({ first1 }) => ({
    first1
  }),
  dispatch =>
    bindActionCreators(
      {
        firstAction
      },
      dispatch
    )
)(Board);
