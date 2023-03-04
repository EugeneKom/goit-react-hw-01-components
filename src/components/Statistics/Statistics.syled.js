import styled from 'styled-components';

export const StatsWrapper = styled.section`
  border: 1px solid black;
  border-radius: 15px;
  padding: 4px;
  margin-top: 10px;
  background-color: cornsilk;
  ul {
    display: flex;
    gap: 5px;
    padding: 0;
    margin-bottom: 0;
  }
  h2 {
    padding: 40px 0;
  }
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: ${props => props.color};
`;
