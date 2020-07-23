import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    background-image: url("https://source.unsplash.com/random");
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 10px;
  > p {
    color: #fff;
  }

  @media screen and (max-width: 1440px) {
    width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    width: 800px;
  }
  @media screen and (max-width: 768px) {
    width: 425px;
  }
  @media screen and (max-width: 425px) {
    width: 375px;
  }
  @media screen and (max-width: 375px) {
    width: 320px;
  }

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    color: white;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
