import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    scroll-behavior: smooth;
  };

  body, #root {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  transition: .3s;
  background: #F8F8F8;

  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: .3s;

    &:disabled {
      cursor: default;
    }
  }
 }

 @media(max-width: 1400px){
    html {
      font-size: 80%;
    }
  }

  @media(max-width: 720px){
    html {
      font-size: 70%;
    }
  }

`;
