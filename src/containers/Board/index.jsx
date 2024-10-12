import React, { useMemo } from "react";
import Item from "../../components/Item";
import { StyledGrid } from "../../components/Styled";
import { connect } from "react-redux";
import { firstAction } from "./boardActions";
import styled from "styled-components";
import { createXorshift, generateItems, generatePaths } from "../../utils/boardUtils";

const PathsDisplay = styled.div`
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  overflow-wrap: break-word;

  @media (max-width: 450px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

const PathsTitle = styled.span`
  color: #333;
  margin-right: 10px;
`;

const PathsList = styled.span`
  color: #0066cc;
`;

const Board = ({ firstAction }) => {
  const { items, paths } = useMemo(() => {
    const seed = Date.now();
    const xorshift = createXorshift(seed);
    const items = generateItems(xorshift);
    const paths = generatePaths(items);
    return { items, paths };
  }, []);

  const itemComponents = items.map((item) => (
    <Item key={item.index} {...item} firstAction={firstAction}>
      {item.index + 1}
    </Item>
  ));

  return (
    <div>
      <PathsDisplay>
        <PathsTitle>Paths:</PathsTitle>
        <PathsList>{paths.join(', ')}</PathsList>
      </PathsDisplay>
      <div className="Board" style={{ 
        minHeight: '90vh', 
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxSizing: 'border-box',
        padding: '10px'
      }}>
        <StyledGrid>{itemComponents}</StyledGrid>
      </div>
    </div>
  );
};

export default connect(
  ({ first1 }) => ({
    first1,
  }),
  { firstAction }
)(Board);
