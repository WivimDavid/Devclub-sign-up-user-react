
import styled from "styled-components";


// export const Container = styled.div`
//   height: 100vh;
//   background: url("${BackgroundBlack}");
//   background: cover;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #111927;
    background-image: 
        radial-gradient(at 50% 50%, hsl(162.00, 77%, 55%) 0, transparent 65%), 
        radial-gradient(at 82% 65%, hsl(218.00, 39%, 11%) 0, transparent 55%);
  `

export const Card = styled.div`
  padding-top: 50px;
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.59);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

`

export const P = styled.p`
  color: #ffffff;
  font-size: 25px;
  opacity: 0.75;
`

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 34px;
  margin-bottom: 20px;
`

export const Inputs = styled.input`
  margin-top: 5px;
  padding-left: 20px;
  width: 342px;
  height: 60px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  outline: none;
  line-height: 17.58px;
  background-color: #F2F2F2;
  color: #000000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
`
export const Button = styled.button`
  width: 260px;
  height: 60px;
  margin-top: 40px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  background-color: #33964E;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover{
    opacity: 0.9;
    color: #000000;
  }

  &:active{
    opacity: 0.8;
  }
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
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;
  list-style: none;
`
export const Trash = styled.button`
border: none;

`
