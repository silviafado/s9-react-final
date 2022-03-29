import { useContext } from 'react';
import { AppContext } from '../application/provider';

export const useAuth = () => {
    const [state, setState] = useContext(AppContext);
    console.log(state)

    return {
        isAuthenticated: !!state,
    };
}