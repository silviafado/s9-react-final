import styled, { createGlobalStyle } from "styled-components";

// Global styling
export const GlobalStyle = createGlobalStyle`
    body {
        background-color: #c4c7ee;
        margin: 0px;
        /*@media (max-width: 700px) {
        }*/
    }
`;

export const StylesHeader = styled.header`
    display: flex;
    justify-content: center;
    padding: 30px;
`;

export const StylesLogo = styled.img`
    width: 200px;
`;

export const StylesHome = styled.div`
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;