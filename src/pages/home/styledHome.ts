import styled from 'styled-components';

export const StyledNav = styled.div`
  padding: 5px;
  margin: 0 auto;
  max-width: 1100px;
`;

export const StyledTable = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

