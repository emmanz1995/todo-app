import styled from 'styled-components';

export const StyledCard = styled.main`
  width: 270px;
  height: 150px;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

export const StyledCardContent = styled.div`
  margin: 10px 0;
  p {
    margin: 20px 0;
  }
`;
