import { TitleStyle, StripeStyle } from './StripeStyles';

const Stripe = ({ text }) => {

    return (
        <StripeStyle>
            <TitleStyle>{text}</TitleStyle>
        </StripeStyle>
    )
}

export default Stripe;