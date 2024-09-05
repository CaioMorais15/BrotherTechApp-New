import './Home.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="container">
      <div class="row text-center gap-5 p-5">
        <div class="card-body col-12 col-md-6">
          213,278,714
          USUÁRIOS CONFIAM EM NÓS
          <form class="d-flex" role="search" >
            <input class="form-control me-1 " type="search" placeholder="Email/Telefone" aria-label="Email/Telefone" />
            <button class="btn btn-danger" type="submit">Entrar</button>
          </form>
        </div>
        <div className="col-12 col-md-5 ">
          <div className="row ">
            <div className="rounded-5 col-12 col-md-4 ">
              <p>Popular</p>
            </div>

            <div className="col-12 col-md-4">
              <p>Nova Listagem</p>
            </div>
            <div className="col-12 col-md-4">
              <p>Ver Todas as 350+ Moedas</p>
            </div>
          </div>
          <div className='row col-md-4 '>
            <p>BTC bitcoin</p>
            <p>ETH ethereum</p>
            <p>BNB bnb</p>
            <p>XRP ripple</p>
            <p>SOL solana</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
