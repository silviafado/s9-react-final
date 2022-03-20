import { ContainerStyle, RedStripe, BlueStripe, YellowStripe, PurpleStripe, GreenStripe } from '../components/welcome/StripeStyles';
import Stripe from '../components/welcome/Stripe';

const Home = () => {

    return (
        <ContainerStyle>
            <BlueStripe>
                <Stripe text={`Art`} />
            </BlueStripe>
            <GreenStripe>
                <Stripe text={`Culture`} />
            </GreenStripe>
            <PurpleStripe>
                <Stripe text={`Imagine`} />
            </PurpleStripe>
            <YellowStripe>
                <Stripe text={`Create`} />
            </YellowStripe>
            <RedStripe>
                <Stripe text={`Start ♥`} showRed={true}>
                </Stripe>
            </RedStripe>
        </ContainerStyle>
    )
}

export default Home;