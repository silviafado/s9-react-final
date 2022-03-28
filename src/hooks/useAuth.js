import { useContext, createContext } from 'react';

export const useAuth = () => {
    const AppContext = createContext();
    console.log(AppContext)
    const [state, setState] = useContext(AppContext);

    return {
        isAuthenticated: !!state.user,
    };
}