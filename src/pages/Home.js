import { GlobalStyle, StylesHeader, StylesLogo, StylesHome } from '../styled';

const Home = () => {

    return (
        <>
            <GlobalStyle />
            <StylesHeader>
                <StylesLogo />
            </StylesHeader>
            <StylesHome>
                <p>CULTURE & ART</p>
                <p>Browser</p>
                <a href="/videos/">
                    <button>Start fun!!</button>
                </a>
            </StylesHome>
        </>
    )
}

export default Home;