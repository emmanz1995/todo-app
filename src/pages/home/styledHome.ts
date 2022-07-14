import styled from 'styled-components';

export const StyledNav = styled.div`
  padding: 5px;
  margin: 0 auto;
  max-width: 1100px;
`;

export const StyledMainSection = styled.main`
  margin: 0 auto; 
  max-width: 1100px; 
  padding: 20px 0;
  .btn-add {
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;
  }
`;

export const StyledSection = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
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

