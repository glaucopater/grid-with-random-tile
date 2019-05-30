import styled, { css } from "styled-components";
import chroma from "chroma-js";

export const StyledItem = styled.div`
  display: flex;
  flex: 1;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  ${({ color = chroma.random() }) =>
    css`
      background-color: ${color}
      color: ${chroma.contrast(color, "black") >= 4 ? "black" : "white"}
      font-size: 18px
      font-weight: bold
    `}
`;

export const Content = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Top = styled.div`
  position: absolute;
  height: 10px;
  width: 10px;
  top: 0;
  opacity: ${props => (props.top ? props.top : 0)};
`;

export const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  opacity: ${props => (props.bottom ? props.bottom : 0)};
`;

export const Left = styled.div`
  position: absolute;
  left: 0;
  opacity: ${props => (props.left ? props.left : 0)};
`;

export const Right = styled.div`
  position: absolute;
  right: 0;
  opacity: ${props => (props.right ? props.right : 0)};
`;

export const StyledGrid = styled.div`
  display: grid
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 100px 100px;
  grid-gap: 10px;
`;
