import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  
  border-width: 1px;
  border-style: solid;
  border-color: #fff;
  border-radius: 4px;
  padding: 8px;

  width: max-content;
`

export const StyledCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 200px;
`

export const StyledCardIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`

export const StyledCardImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export const StyledCardTitle = styled.h2`
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledCardSubTitle = styled.h3`
  font-size: 16px;
`

export const StyledCardIconButton = styled.button`
  border: none;
  background-color: transparent;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

export const StyledCardInput = styled.input`
  border: none;
  border-radius: 2px;
  padding: 2px;
  color: #353b48;
  max-width: 160px;
`