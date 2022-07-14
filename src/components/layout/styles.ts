import styled from 'styled-components';

export const StyledLayout = styled.main`
  display: flex;
  width: 100%;
  height: 100vh;
  gap: 70px;
  .aside {
    width: 25%;
  }
  .main-content {
    width: 75%;
  }
  
  @media screen and (max-width: 500px) {
    .aside {
      display: none;
    }
    .main-content {
      width: 100%;
    }
  }
`