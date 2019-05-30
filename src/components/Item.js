import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyledItem, Content, Top, Right, Bottom, Left } from "./Styled";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      bottom: null,
      left: null,
      right: null,
      pos: { x: null, y: null }
    };
  }

  componentDidMount() {}

  render() {
    return (
      <StyledItem>
        <Content>
          <Top {...this.props}>T</Top>
          <Right {...this.props}>R</Right>
          <Bottom {...this.props}>B</Bottom>
          <Left {...this.props}>L</Left>
        </Content>
      </StyledItem>
    );
  }
}

export default Item;
