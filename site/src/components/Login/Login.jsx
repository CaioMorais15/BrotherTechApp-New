<<<<<<< HEAD
import logo from "/logo.png"
=======
import { useState } from "react"
>>>>>>> Caio
import styles from "./Login.module.css"
export const Login = () => {

    const [pagina, setPagina] = useState('home');

    const trocaPagina = (novaPagina) => {
        setPagina(novaPagina)
    }
    return <>
        <div className={styles.divLogin}>
<<<<<<< HEAD
            <img src={logo} />
=======
            <img src="../../../public/logo.png" />
>>>>>>> Caio
            <div id="Logo"></div>
            <h1 className={styles.caixa}>Bem-Vindo à Brothers Tech</h1>
            <div id="textoLogin">

                <h1 className={styles.tituloEmail}>Login</h1>
                <div id="Login">
                    <input className={styles.campoEmail} type="E-Mail/Telefone" placeholder="E-Mail/Telefone..." />
                </div>
<<<<<<< HEAD

                <h1 className={styles.tituloSenha}>Senha</h1>
                <div id="Senha">
                    <input className={styles.campoEmail} type="password" placeholder="Senha..." />
                </div>


                <p>
                    <input type="checkbox" /> Concordo com os Termos de Serviço e com a Política de Privacidade da Brothers Tech</p>
                <button className={styles.campoEntrar} >Entrar</button>
                <p>Ainda não tem uma conta?<a href="site/src/cadastro/Cadastrar.jsx" > Crie uma!</a></p>
            </div>
=======

                <h1 className={styles.tituloSenha}>Senha</h1>
                <div id="Senha">
                    <input className={styles.campoEmail} type="password" placeholder="Senha..." />
                </div>


                <p>
                    <input type="checkbox" /> Concordo com os Termos de Serviço e com a Política de Privacidade da Brothers Tech</p>
                <button onClick={()=> trocaPagina('index')} className={styles.campoEntrar}  >Entrar </button>
                <p>Ainda não tem uma conta?<a href="site/src/cadastro/Cadastrar.jsx" > Crie uma!</a></p>
            </div>
        </div>

        <div>
            {pagina === 'index' && <Index />}
>>>>>>> Caio
        </div>
    </>
}

export default Login