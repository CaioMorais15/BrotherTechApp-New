import styles from  "./Cadastrar.module.css"

export const cadastro = () => {

    return <>
    <h1 className={styles.caixa}>Bem-Vindo à Brothers Tech</h1>
         <div id="Text cadastro"></div>

        <h1 className={styles.email}>Cadastre-se</h1>
            <div id="Cadastre-se">
            <input type="E-Mail/Telefone" placeholder="E-Mail/Telefone..." />

        <h1 className={styles.senha}>Senha</h1>
            <div id="Senha">
            <input type="password" placeholder="Criar Senha..." />

        <h1 className={styles.confirmar}>Confirmar Senha</h1>
            <div id="Confirmar">
                <input type="Confirmar" placeholder="Confirmar Senha..." />

                <p>Concordo com os Termos de Serviço e com a Política de Privacidade da Brothers Tech</p>
            <button className={styles.campoEntrar} >Entrar</button>
            <p>Ainda não tem uma conta?<a href="cadastro.html" >Crie uma!</a></p>

            </div>
        
        </div>
        </div>
    </>
}

export default cadastro