import { createContext, useCallback } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {

    const handleLogout = useCallback(() => {
        console.log('Logout Executou');
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Vinicius', logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );

}