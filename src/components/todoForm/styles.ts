import styled from 'styled-components';

export const StyledAddTodoContainer = styled.div`
  margin: 20px 0;
  padding: 30px;
  .add-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input {
    width: 100%;
    padding: 7px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  } 
  textarea {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    height: 100px;
  }
  .btn-close {
    cursor: pointer;
  }
  .error {
    color: red;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 7px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;