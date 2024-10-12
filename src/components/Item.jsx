import React from "react";
import { 
  StyledItem, 
  Content, 
  Top, 
  Right, 
  Bottom, 
  Left,
  TopConnection,
  RightConnection,
  BottomConnection,
  LeftConnection
} from "./Styled";
import styled from "styled-components";

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: white;
  border: 2px solid #333;
  position: relative;
  z-index: 2;
  font-family: 'Roboto', sans-serif;
`;

const IconContent = styled.div`
  font-size: 24px;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = ({ style = {}, children }) => (
  <IconWrapper style={{ ...style }}>
    <IconContent>
      {children || "🔗"}
    </IconContent>
  </IconWrapper>
);

const StyledBlock = ({ style = {}, children }) => (
  <IconWrapper style={{ ...style }}>
    <IconContent>
      {children || "⛔"}
    </IconContent>
  </IconWrapper>
);

const DirectionalComponent = ({ isConnected, linkProps = {}, blockProps = {} }) =>
  isConnected ? <StyledLink {...linkProps} /> : <StyledBlock {...blockProps} />;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const TileNumber = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

const Item = ({ firstAction, topConnected, rightConnected, bottomConnected, leftConnected, pos, index, children, ...props }) => {
  const color = React.useMemo(() => getRandomColor(), []);
  const hasConnections = topConnected || rightConnected || bottomConnected || leftConnected;

  return (
    <StyledItem color={color} style={{ opacity: hasConnections ? 1 : 0.5, fontFamily: 'Roboto, sans-serif' }}>
      <TileNumber>{children}</TileNumber>
      {topConnected && <TopConnection />}
      {rightConnected && <RightConnection />}
      {bottomConnected && <BottomConnection />}
      {leftConnected && <LeftConnection />}
      <Content>
        <Top>
          <DirectionalComponent isConnected={topConnected} />
        </Top>
        <Right>
          <DirectionalComponent isConnected={rightConnected} />
        </Right>
        <Bottom>
          <DirectionalComponent isConnected={bottomConnected} />
        </Bottom>
        <Left>
          <DirectionalComponent isConnected={leftConnected} />
        </Left>
      </Content>
    </StyledItem>
  );
};

export default Item;
