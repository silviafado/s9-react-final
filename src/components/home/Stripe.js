import { TitleStyle, StripeStyle, ButtonStyle } from './StripeStyles';

const Stripe = ({ text, showRed }) => {

    return (
        <StripeStyle>
            {showRed ?
                <a href="/photos/">
                    <ButtonStyle>
                        <TitleStyle>{text}</TitleStyle>
                    </ButtonStyle>
                </a> :
                <TitleStyle>{text}</TitleStyle>}
        </StripeStyle>
    )
}

export default Stripe;