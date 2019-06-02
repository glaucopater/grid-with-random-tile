import React, { Component, Fragment } from "react";
import { StyledItem, Content, Top, Right, Bottom, Left } from "./Styled";
import { Link } from "styled-icons/evil";

const StyledLink = () => {
  return (
    <Fragment>
      <Link size="16" />
    </Fragment>
  );
};

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: null,
      bottom: null,
      left: null,
      right: null,
      pos: { x: null, y: null },
      rightConnected: null,
      leftConnected: null,
      topConnected: null,
      bottomConnected: null
    };
  }

  render() {
    return (
      <StyledItem>
        <Content>
          <Top {...this.props}>{this.props.topConnected && <StyledLink />}</Top>
          <Right {...this.props}>
            {this.props.rightConnected && <StyledLink />}
          </Right>
          <Bottom {...this.props}>
            {this.props.bottomConnected && <StyledLink />}
          </Bottom>
          <Left {...this.props}>
            {this.props.leftConnected && <StyledLink />}
          </Left>
        </Content>
      </StyledItem>
    );
  }
}

export default Item;
