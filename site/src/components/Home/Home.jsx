import './Home.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container">
      <div className="row text-center gap-5 p-5">
        <div className="card-body col-12 col-md-6">
          213,278,714
          USUÁRIOS CONFIAM EM NÓS
          <form className="d-flex" role="search" >
            <input className="form-control me-1 " type="search" placeholder="Email/Telefone" aria-label="Email/Telefone" />
            <button className="btn btn-danger" type="submit">Entrar</button>
          </form>
        </div>
        <div className="col-12 col-md-5 ">
          <div className="row">
            <div className="rounded-5 col-12 col-md-4">
              <p>Popular</p>
            </div>

            <div className="col-12 col-md-4">
              <p>Nova Listagem</p>
            </div>
            <div className="col-12 col-md-4">
              <p>Ver Todas as 350+ Moedas</p>
            </div>
          </div>
          <div className='row'>
            <p>Criptomoedas</p>
            <p>Criptomoedas</p>
            <p>Criptomoedas</p>
            <p>Criptomoedas</p>
            <p>Criptomoedas</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
