
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111927;
    background-image: 
        radial-gradient(at 50% 50%, hsl(162.00, 77%, 55%) 0, transparent 65%), 
        radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);
  `

export const P = styled.p`
  color: #ffffff;
  font-size: 18px;
  opacity: 0.75;
`

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 25px;
`


export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  padding-left: 1.25rem;
  width: 342px;
  height: 60px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #F2F2F2;
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  list-style: none;

  @media screen and (max-width: 768px) {
    width: 280px;
    height: 60px;
    
  }
`
export const Trash = styled.button`
border: none;
cursor: pointer;
`
