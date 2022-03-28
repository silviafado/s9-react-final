import NavbarC from '../components/navbar/Navbar';
import { StylesVip, StylesVipHeader } from '../components/vip/VipStyles';

const Vip = () => {

    return (
        <div >
            <NavbarC />
            <StylesVip>
                <StylesVipHeader>CONGRATS YOU ARE NOW</StylesVipHeader>
                <p>VIP</p>
            </StylesVip>
        </div>
    );
}

export default Vip;