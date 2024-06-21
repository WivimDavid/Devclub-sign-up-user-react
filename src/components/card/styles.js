import styled from 'styled-components';

export const Card = styled.div`
  min-height: 150px;
  padding-top: 25px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.59);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  @media screen and (max-width: 768px) {
    width: 90%;
    
  }  
  

`