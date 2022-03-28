import styled from 'styled-components';

export const StylesContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
`

export const StylesRow = styled.div`
    display: flex;
    @media(max-width: 900px) {
        flex-direction: column;
    }
`

export const StylesSelectedDiv = styled.div`
    width: 65%;
    margin-right: 20px;
    @media(min-width:901px) and (max-width:1200px){
        width: 55%;
    }
    @media(max-width:900px){
        width: 100%;
        margin-right: 0px;
    }
`

/* Styles right list */
export const StylesList = styled.div`
    width: 30%;
    @media(min-width:901px) and (max-width:1200px){
        width: 40%;
    }
    @media(max-width:900px){
        width: 100%;
        margin-top: 20px ;
    }
`

export const StylesItem = styled.div`
    padding-bottom: 0.42857143em;
    display: flex;
    align-items: center;
    border-top: 0.5px solid rgba(34,36,38,.15);
    font-weight: bold;
    cursor: pointer;
    &:first-child {
        border-top: none;
        padding-top: 0;
        & img {
            padding-top: 0px;
        }
    }
    & img {
        max-width: 180px;
        margin-right: 10px;
        padding-top: 6px;
    }
`

/* Styles selected video */
export const StylesSelectedFrame = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    & iframe {
        position: absolute;
        width: 100%;
        height: 100%;
    }
`

export const StylesSelectedText = styled.div`
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    margin: 1rem 0;
    padding: 1em 1em;
    border-radius: 0.28571429rem;
    border: 1px solid rgba(34,36,38,.15);
`

export const StylesSelectedHeader = styled.h4`
    margin: calc(2rem - 0.14285714em) 0 1rem;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    font-size: 1.07142857rem;
    font-weight: 700;
    line-height: 1.28571429em;
    color: rgba(0,0,0,.87);
    &:first-child {
        margin-top: -0.14285714em;
    }  
`