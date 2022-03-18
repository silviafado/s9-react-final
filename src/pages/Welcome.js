import { ContainerStyle, RedStripe, BlueStripe, YellowStripe, PurpleStripe, GreenStripe } from '../components/welcome/StripeStyles';
import Stripe from '../components/welcome/Stripe';

const Welcome = () => {

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
                <Stripe text={`Start ♥`} />
            </RedStripe>
        </ContainerStyle>
    )
}

export default Welcome;