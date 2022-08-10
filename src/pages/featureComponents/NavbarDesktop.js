import React from "react";
import '../css/Navbar.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Router, Route, Link} from 'react-router-dom';

export default class NavbarDesktop extends React.Component{
  render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                <a className="navbar-brand" href="#">
                    
                </a>
                <span className="p-float-label">
                    <InputText id="in"/>
                    <label htmlFor="in">Pesquise aqui</label>
                </span>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active">
                        Produtos
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/carrinho" className="nav-link active">
                        Meu carrinho
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/perfil" className="nav-link active">
                        Meu perfil
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


     /* <div>
        <nav>
        <a><img src={"../../../public/logo192.png"} className="App-logo" alt="logo"/></a>
            <a>Nome da Loja</a>
          <span className="p-float-label">
            <InputText id="in"/>
            <label htmlFor="in">Pesquise aqui</label>
          </span>
          <Button icon="pi pi-search" className="p-button-rounded" />
          <Button label=""/>
          <Button id="carrinho" icon="pi pi-shopping-cart" label="" iconPos="right"/>
          <Button id="perfil" icon="pi pi-user" label="" iconPos="right"/>
        </nav>
      </div>*/


    );
  }
}

