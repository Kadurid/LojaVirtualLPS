import React from 'react';
import {carrinho} from "./../../data/carrinho.json";
import { InputNumber } from 'primereact/inputnumber';

export default class CarrinhoDesktop extends React.Component{
  constructor(props){
    super();
    console.log(this.props)
  
    this.state = {
      carrinho: [],
      total: 0
    };
     
  }

  componentDidMount(props) {
    let totalAmount = 0;
    this.props.cartItems.forEach(item => totalAmount = totalAmount + item.qtd*item.valor);
    this.setState(
      { 
        carrinho: [...this.props.cartItems],
        total: totalAmount
      });
  }

  componentWillUnmount() {

  }
  
  render(){
    return(
      <div id="containerCarrinho" className="col-md-8">
            <div className="table-responsive">
                <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Total</th>
                    </tr>
                </thead>
                    <tbody>
                    {this.state.carrinho.map((data,key) => { 
                        
                        return(
                            <tr key={key}>
                                <td>{data.descricao.substr(0, 25)}</td>
                                <td>
                                  <InputNumber value = {data.qtd} onValueChange = {(e) => data.qtd = e.event.value}/>
                                </td>
                                <td>R${data.valor}</td>
                                <td>R${data.qtd*data.valor}</td>
                            </tr>
                        );
                    })
                    }
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>R$ {this.total}</td>
                    </tr>
                    </tbody>
                </table>
                <div className="text-center" ><button className="btn btn-primary" onClick={() => { this.handleConfirmaCompra();}}>Confirmar Compra</button>
                        </div>
            </div>
        </div>
    );
  }
}

