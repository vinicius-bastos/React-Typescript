import { useCallback, useMemo, useRef, useState } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(senha)
    }, [email, senha]);

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    return (
        <div>
            <form>

                <p>Quantidade de caracteres no email: {emailLength}</p>

                <InputLogin
                 label="Email"
                 value={email}
                 onChange={newValue => setEmail(newValue)}
                 onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin
                 label="Senha"
                 type="password"
                 value={senha}
                 ref={inputPasswordRef}
                 onChange={newValue => setSenha(newValue) }
                />

                <ButtonLogin type="button" onClick={handleEntrar}>
                    Entrar
                </ButtonLogin>

            </form>
        </div>
    );
}