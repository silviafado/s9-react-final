import styled, { keyframes } from "styled-components";

// Modal LOG IN and SIGN UP styling
export const ContainerStyle = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    margin-top: -20px;
`


/* Stripes styling */
export const StripeStyle = styled.div`
    font-family: 'Lato';
    font-weight: 300;
    font-size: 3.5vw;
    color: white;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative ;
    /* Stripes line effect when not hovering */
    &:before {
        content: "";
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1) ;
        overflow: hidden;
        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: skew(30deg) scaleY(1) translate(0, 0);
        transform: skew(30deg) scaleY(1) translate(0, 0);
        transition: background-color 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        transition: font-size .5s ease;
    }
    /* Stripes line animation when hovering */
    &:hover {
            -webkit-transform: skew(0deg) scale(3) translate(0, 0);
            transform: skew(0deg) scale(3) translate(0, 0);
            background-color: transparent;
            font-size: 1.2em;
            color: rgb(240,240,240,0.6);
            overflow: hidden ;
        }
    
`

export const ButtonStyle = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font: inherit;
    color: white;
    &:hover {
        color: rgb(240,240,240,0.6);
    }
`

/* The animation code */
/* Loading animation for each stripe */
const strip1 = keyframes`
    0% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`

const strip2 = keyframes`
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`

const strip3 = keyframes`
    0% {
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`

const strip4 = keyframes`
    0% {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`

const strip5 = keyframes`
    0% {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
    }
    100% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
`

/* Styling each line and loading animation */
export const BlueStripe = styled.div`
    background-color: #244F75;
    animation-name: ${strip1};
    left: 0;
    animation-delay: 0.1s;
    animation-fill-mode: both;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    width: 20%;
    transition: background-color 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    /* Stripes line animation when hovering */
    &:hover {
        -webkit-transform: skew(0deg) scale(3) translate(0, 0);
        transform: skew(0deg) scale(3) translate(0, 0);
    }
`

export const GreenStripe = styled.div`
    background-color: #60BFBF;
    animation-name: ${strip2};
    left: 20vw;
    animation-delay: 0.2s;
    animation-fill-mode: both;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    width: 20%;
`

export const PurpleStripe = styled.div`
    background-color: #8C4B7E;
    animation-name: ${strip3};
    left: 40vw;
    animation-delay: 0.3s;
    animation-fill-mode: both;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    width: 20%;
`

export const YellowStripe = styled.div`
    background-color: #F8BB44;
    animation-name: ${strip4};
    left: 60vw;
    animation-delay: 0.4s;
    animation-fill-mode: both;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    width: 20%;
`

export const RedStripe = styled.div`
    background-color: #F24B4B;
    animation-name: ${strip5};
    left: 80vw;
    animation-delay: 0.5s;
    animation-fill-mode: both;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    width: 20%;
    cursor: pointer;
`

/* Text styling */
export const TitleStyle = styled.div`
    display: block;
    margin: 0;
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center; 
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
    line-height: 1.5;
`