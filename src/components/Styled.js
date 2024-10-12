import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  width: 90vmin;
  height: 90vmin;
  max-width: 600px;
  max-height: 600px;
  margin: auto;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 450px) {
    width: 90vw;
    height: 90vw;
    gap: 8px;
    padding: 8px;
  }

  @media (max-width: 350px) {
    width: 95vw;
    height: 95vw;
    gap: 5px;
    padding: 5px;
  }
`;

export const StyledItem = styled.div`
  background-color: ${props => props.color || '#f0f0f0'};
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 5px;
  width: 100%;
  height: 100%;
`;

export const Top = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const Right = styled.div`
  grid-column: 3;
  grid-row: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Bottom = styled.div`
  grid-column: 2;
  grid-row: 3;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Left = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Connection = styled.div`
  position: absolute;
  background-color: #333;
  z-index: 1;
`;

export const TopConnection = styled(Connection)`
  width: 4px;
  height: calc(50% - 18px); // Half of IconWrapper height (36px)
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const RightConnection = styled(Connection)`
  width: calc(50% - 18px);
  height: 4px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const BottomConnection = styled(Connection)`
  width: 4px;
  height: calc(50% - 18px);
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const LeftConnection = styled(Connection)`
  width: calc(50% - 18px);
  height: 4px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
