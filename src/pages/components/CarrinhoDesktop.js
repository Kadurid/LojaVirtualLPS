import React from 'react';
import {carrinho} from "./../../data/carrinho.json";
import {compra} from './../../data/compra.json';
import { InputNumber } from 'primereact/inputnumber';

export default class CarrinhoDesktop extends React.Component{
  constructor(props){
    super();
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
        carrinho: [...this.props.cartItems.filter(item => item.qtd !== 0)],
        total: totalAmount
      });
  }

  componentWillUnmount() {

  }

 handleConfirmaCompra(){
    if(this.state.carrinho.length!==0){
      compra.push(carrinho);
      carrinho.pop(carrinho);
      this.setState({
        carrinho: [],
        total: 0})
      alert("Parabéns, compra efetuada com sucesso!!");
    }
    else{
      alert("Carrinho Vazio");
    }
  }

  onValueChange(e, id) {
    console.log(e);
    let newArray = this.state.carrinho;
    newArray[id].qtd = e.value;
    newArray = newArray.filter(cartItem => {
      return cartItem.qtd !== 0;
    })
    let totalAmount = 0;
    newArray.forEach(item => totalAmount = totalAmount + item.qtd*item.valor);
    this.setState({
      carrinho: [...newArray],
      total: totalAmount
    })

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
                                  <InputNumber value = {data.qtd} onValueChange = {(e) => this.onValueChange(e, key)}/>
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
                        <td>R$ {this.state.total}</td>
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

