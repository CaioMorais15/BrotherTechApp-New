import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logotech.png'
// import SobreNos from '../SobreNos/SobreNos';
import { lazy } from 'react';


function Navbar() {

    const SobreNos = lazy(() => import('../SobreNos/SobreNos'));

    return (
        <nav className="p-0 m-0 navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid mt-1">
                <a className="navbar-brand" href="#">
                    <img className='mt-4'
                        src={logo}
                        alt="Logo"
                        width="120"
                        height="120"
                        display="flex"


                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" padding="0px">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href={SobreNos} >Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">Compre Cripto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Mercados</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Trade</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Earn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Square</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Mais</a>
                        </li>
                    </ul>
                    <form class="d-flex mt-03" role="search" background="000000">
                        <input class="form-control me-1" type="ENTRE" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-danger" type="submit">Cadastre</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;