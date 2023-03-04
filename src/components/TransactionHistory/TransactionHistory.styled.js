import styled from 'styled-components';

export const Table = styled.table`
  width: 720px;
  box-shadow: 4px 4px 13px -3px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
  thead {
    background-color: #00bcd5;
    color: white;
    th {
      padding: 5px;
      width: 33.3%;
    }
  }
  tbody {
    text-transform: capitalize;
    font-size: 18px;
    color: grey;
    tr:nth-child(2n + 1) {
      background-color: #ecf1f4;
    }
    td {
      padding: 10px;
    }
  }
`;
