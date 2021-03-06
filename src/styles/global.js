import { createGlobalStyle } from "styled-components";
import Roboto from "./Roboto-Regular.woff";

export default createGlobalStyle`
       
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('woff');
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;   
    }
    
    body{
        /* font-family: 'Roboto'; */
        font-family: Verdana, Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased !important;
        background-color: #a8c9f8;
        overflow: hidden;
    }
  
`;
