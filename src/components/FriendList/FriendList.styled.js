import styled from 'styled-components';

export const Friends = styled.ul`
  margin-top: 20px;
  width: 400px;
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  margin-bottom: 10px;

  border-radius: 15px;
  box-shadow: 4px 4px 13px -3px rgba(0, 0, 0, 0.75);

  img {
    padding: 20px;
    margin-left: 20px;
    border: 1px solid;
    border-radius: 15px;
  }
  p {
    margin-right: auto;
    margin-left: 20px;
  }
  span {
    margin-left: 10px;
    background-color: ${props => {
      return props.isOnline ? 'green' : 'red';
    }};
    width: 15px;

    height: 15px;
    border-radius: 50%;
  }
`;
