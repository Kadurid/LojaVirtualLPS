import React, { Component } from 'react';
import './css/style.css';
import './css/MeuPerfil.css';
import 'primeicons/primeicons.css';

export default class MeuPerfil extends Component {
  render() {
    return (
      <div>
        <div id="perfilContainer" className="col-sm-6">
            <div className="row">
                <div className="col-5 foto">
                    <i className="pi pi-user"></i>
                </div>

                <div className="col-7 info">
                    <h3>Nome: Fulano de Tal</h3>
                    <h3>Endereço: Gotham City</h3>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
