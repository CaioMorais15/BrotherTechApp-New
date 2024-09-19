import styles from  "./Cadastrar.module.css"

export const Cadastrar = () => {

    return <>

    <div className={styles.divLogin}>

        <h1 className={styles.divLogo}></h1>

            <div className={styles.divLogo}>
            <img src="/logo.png" />
        </div>

        <h1 className={styles.Caixa}>Bem-Vindo à Brothers Tech</h1>
            <div id="Text cadastro"></div>

        <h1 className={styles.Email}>Cadastre-se</h1>
            <div id="Cadastre-se">
            <input className={styles.campo} type="E-Mail/Telefone" placeholder="E-Mail/Telefone..." />

        <h1 className={styles.Senha}>Senha</h1>
            <div id="Senha">
            <input className={styles.campo} type="password" placeholder="Criar Senha..."  />

        <h1 className={styles.Confirmar}>Confirmar Senha</h1>
            <div id="Confirmar">
            <input className={styles.campo} type="password" placeholder="Confirmar Senha..." />

                <p>
                <input type="checkbox" />  Concordo com os Termos de Serviço e com a Política de Privacidade da Brothers Tech</p>
            <button className={styles.campoEntrar} ><a href="site/src/components/Home">Cadastre-se</a></button>
            

            </div>
            </div>
        </div>
        </div>
    </>
}

export default Cadastrar















