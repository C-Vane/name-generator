import styled from "styled-components";
export const ListNames = styled.div`
-webkit-font-smoothing: antialiased;
text-align: center;
margin-block: 0px;
margin-inline: 0px;
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
display: grid;
grid-template-columns: 1fr;
gap: 1rem;
width: 30rem;
font-family: "Nova Flat", sans-serif;
  h5{
    -webkit-font-smoothing: antialiased;
    margin-block: 0px;
    margin-inline: 0px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-weight: 700;
    color: rgb(255, 255, 255);
    line-height: 1.45;
    font-size: 1.25rem;
    letter-spacing: 1px;
    text-shadow: rgb(12, 11, 19) 2px 2px 4px;
    margin: 2.75rem 0px 1rem;
    text-align: center;
  }
`;

export const StylishNames = styled.div`
-webkit-font-smoothing: antialiased;
text-align: center;
margin: 0px;
margin-block: 0px;
margin-inline: 0px;
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
border-radius: 0.375rem;
width: 100%;
position: relative;
height: 3.75rem;
border: 2px solid rgb(255, 208, 38);
background-color: rgb(12, 11, 19);
max-width: 30rem;
transform: skewX(-27.5deg);
transition: transform .2s;
cursor:pointer;
  div{
    text-align: center;
    margin: 0px;
    margin-block: 0px;
    margin-inline: 0px;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    z-index: -1;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 208, 38);
    position: absolute;
  }
  :hover{
    div{
      opacity:0.8;
    }
    transform: scale(1.2) skewX(-27.5deg);
  }
  h5{
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 1.45;
  opacity: 1;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-shadow: rgb(12, 11, 19) 2px 2px 4px;
  margin: 0px;
  margin-top:1rem;
  transform: skewX(27.5deg);
  }
`;