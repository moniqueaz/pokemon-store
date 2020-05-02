import { createGlobalStyle, keyframes } from 'styled-components';
import { black, white, grayLight } from './theme';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  min-height: 100%;
}

body{
  background-color: ${white};
  -webkit-font-smoothing: antialiased !important;
  font-size: 20px;
}

body, input, button{
  color: ${black};
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  // font-family: 'VT323', monospace;
}

input{
  &::placeholder {
    font-family: 'Roboto', sans-serif;
    color: ${grayLight};
  }
}

li{
  list-style: none;
}

button{
  cursor: pointer;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  transition: all 0.1s linear;
  &:active {
    opacity: 0.8;
    transition: all 0.1s linear;
  }
}

.loop {
  animation: ${rotate} 1s linear infinite;
  position: relative;

  svg{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

`;
