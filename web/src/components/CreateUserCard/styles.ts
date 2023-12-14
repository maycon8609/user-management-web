import styled from "styled-components";

export const StyledCreateUserCardButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledCreateUserCardButton = styled.button`
  width: 180px;
  height: 30px;
  border: none;
  border-radius: 4px;
  color: #f5f6fa;
  font-weight: 600;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`