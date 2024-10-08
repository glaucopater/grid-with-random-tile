import React, { Component, Fragment } from "react";
import { StyledItem, Content, Top, Right, Bottom, Left } from "./Styled";
 
const StyledLink = () => {
  return (
    <div style={{  padding: "0px", fontSize: "16px" }}>
      🔗
    </div>
  );
};

const StyledBlock = () => {
  return (
    <div style={{  padding: "0px", fontSize: "16px" }}>
      ⛔
    </div>
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
          <Top {...this.state}>
            {this.state.topConnected ? <StyledLink />: <StyledBlock />}
          </Top>
          <Right {...this.state}>
            {this.state.rightConnected ? <StyledLink />: <StyledBlock />}
          </Right>
          <Bottom {...this.state}>
            {this.state.bottomConnected ? <StyledLink />: <StyledBlock />}
          </Bottom>
          <Left {...this.state}>
            {this.state.leftConnected ? <StyledLink />: <StyledBlock />}
          </Left>
        </Content>
      </StyledItem>
    );
  }
}

export default Item;
