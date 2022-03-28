import styled from 'styled-components';


export const StylesVipHeader = styled.header`
    display: flex;
    justify-content: center;
    padding: 30px;
`

export const StylesVip = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background: #f8f8cb;
    margin-top: -65px;
    & p:first-child {
        font-size: 40px;
        font-weight: 700;
    }
    & p {
        font-size: 90px;
        font-weight: bolder;
        text-shadow: 2px 2px grey;
    }
`