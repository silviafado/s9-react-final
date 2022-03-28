import { useAuth } from '../../hooks/useAuth';
import Vip from '../../pages/Vip';

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated && <Vip />;
};

export default PrivateRoute;