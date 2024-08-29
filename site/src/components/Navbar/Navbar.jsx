import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logotech.png'



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className='mt-4'
                        src={logo}
                        alt="Logo"
                        width="120"
                        height="120"
                        display="flex"


                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
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
                    <form class="d-flex" role="search" background="000000">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;