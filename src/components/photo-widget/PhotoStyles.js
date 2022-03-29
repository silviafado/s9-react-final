import styled from 'styled-components';

export const StylesList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0 10px;
    grid-auto-rows: 10px;
    & img {
        width: 100%;
        grid-row-end: span 2;
    }
`

/* Styles Search bar used in photos and videos */
export const StylesSearchDiv = styled.div`
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    box-shadow: 0 1px 2px 0 rgb(34 36 38 / 15%);
    margin: 1rem 0;
    padding: 1em 1em;
    border-radius: 0.28571429rem;
    border: 1px solid rgba(34,36,38,.15);
        font-size: 1rem;
    &:first-child {
        margin-top: 0;
    }
`

export const StylesForm = styled.form`
    display: block;
    margin-top: 0em;
    margin-bottom: 0px;
    & label {
        font-weight: 500;
    }
`

export const StylesInput = styled.input`
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    width: 100%;
    margin: 0;
    outline: 0;
    -webkit-appearance: none;
    line-height: 1.21428571em;
    padding: 0.67857143em 1em;
    font-size: 1em;
    background: #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: 0.28571429rem;
    -webkit-box-shadow: 0 0 0 0 transparent inset;
    box-shadow: 0 0 0 0 transparent inset;
    -webkit-transition: color .1s ease,border-color .1s ease;
    transition: color .1s ease,border-color .1s ease;   
    &:focus {
        color: rgba(0,0,0,.95);
        border-color: #85b7d9;
        border-radius: 0.28571429rem;
        background: #fff;
        box-shadow: 0 0 0 0 rgb(34 36 38 / 35%) inset;
        -webkit-box-shadow: 0 0 0 0 rgb(34 36 38 / 35%) inset;
    }
`