import React, { useMemo } from "react";
import Item from "../../components/Item";
import { StyledGrid } from "../../components/Styled";
import { MAX_ITEMS, MAX_ITEMS_PER_ROW } from "../../constants";
import { connect } from "react-redux";
import { firstAction } from "./boardActions";
import styled from "styled-components";

// Improved random number generator (Xorshift)
const createXorshift = (seed) => {
  let x = seed;
  let y = 362436069;
  let z = 521288629;
  let w = 88675123;
  return () => {
    const t = x ^ (x << 11);
    x = y; y = z; z = w;
    w = w ^ (w >> 19) ^ (t ^ (t >> 8));
    return (w & 0x7fffffff) / 0x7fffffff;
  };
};

const ConnectionsDisplay = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
`;

const Board = ({ firstAction }) => {
  const { items, connections } = useMemo(() => {
    const seed = Date.now();
    const xorshift = createXorshift(seed);
    const randomBool = (probability = 0.7) => xorshift() < probability;

    const generateRandomProp = (index) => ({
      pos: { x: index, y: 0 },
      top: randomBool(),
      right: randomBool(),
      bottom: randomBool(),
      left: randomBool(),
    });

    const items = [...Array(MAX_ITEMS).keys()].map((_, index) => {
      const randomProps = generateRandomProp(index);
      return { ...randomProps, index };
    });

    const connections = [];
    items.forEach((item, index) => {
      if (item.top && index >= MAX_ITEMS_PER_ROW && items[index - MAX_ITEMS_PER_ROW].bottom) {
        connections.push(`${index + 1}-${index - MAX_ITEMS_PER_ROW + 1}`);
        items[index].topConnected = true;
        items[index - MAX_ITEMS_PER_ROW].bottomConnected = true;
      }
      if (item.right && (index + 1) % MAX_ITEMS_PER_ROW !== 0 && items[index + 1].left) {
        connections.push(`${index + 1}-${index + 2}`);
        items[index].rightConnected = true;
        items[index + 1].leftConnected = true;
      }
    });

    return { items, connections };
  }, []);

  const itemComponents = items.map((item) => (
    <Item key={item.index} {...item} firstAction={firstAction}>
      {item.index + 1}
    </Item>
  ));

  return (
    <div>
      <ConnectionsDisplay>
        Connections: {connections.join(', ')}
      </ConnectionsDisplay>
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
