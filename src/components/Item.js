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

  componentDidMount() {
    this.setState({ ...this.props }, () => {
      this.props.firstAction(this.state);
    });
  }

  render() {
    return (
      <StyledItem>
        <Content>
          <Top {...this.state}>{this.state.topConnected && <StyledLink />}</Top>
          <Right {...this.state}>
            {this.state.rightConnected && <StyledLink />}
          </Right>
          <Bottom {...this.state}>
            {this.state.bottomConnected && <StyledLink />}
          </Bottom>
          <Left {...this.state}>
            {this.state.leftConnected && <StyledLink />}
          </Left>
        </Content>
      </StyledItem>
    );
  }
}

export default Item;
