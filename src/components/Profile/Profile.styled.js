import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid;
  border-radius: 15px;
  padding: 5px;
  img {
    width: 300px;
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  gap: 10px;

  font-size: 20px;

  span {
    margin-right: 10px;
  }
`;
