import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 60px;
  margin: 40px 0 40px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  background-color: #33964E;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: #227664;
  }

  &:active{
    opacity: 0.8;
    
  }

`