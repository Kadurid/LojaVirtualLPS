import React from "react";
import {carrinho} from './../../data/carrinho.json';
import {compra} from './../../data/compra.json';

class CarrinhoMobile extends React.Component{
  constructor(){
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

  removeHandler(key){
    let newArray = this.state.carrinho;
    newArray[key].qtd = newArray[key].qtd - 1;
    if(newArray[key].qtd === 0 ){
      newArray = newArray.filter(item => item.qtd !== 0);
    }
    let totalAmount = 0;
    newArray.forEach(item => totalAmount = totalAmount + item.qtd*item.valor);
    this.setState({
      carrinho: [...newArray],
      total: totalAmount
    }) 
  }

  addHandler(key){
    let newArray = this.state.carrinho;
    newArray[key].qtd = newArray[key].qtd + 1;
    if(newArray[key].qtd === 0 ){
      newArray = newArray.filter(item => item.qtd !== 0);
    }
    let totalAmount = 0;
    newArray.forEach(item => totalAmount = totalAmount + item.qtd*item.valor);
    this.setState({
      carrinho: [...newArray],
      total: totalAmount
    });
  }
  
  render(){
    return(
        <div id="containerCarrinho" className="col-12">
            <div className="table-responsive">
                <table className="table bg-secondary">
                  <thead>
                      <tr>
                          <th>Descrição</th>
                          <th>Quantidade</th>
                          <th>Valor</th>
                      </tr>
                  </thead>
                  <tbody>
                    {this.state.carrinho.map((data,key) => { 
                        
                        return(
                            <tr key={key}> 
                                <td>{data.descricao.substr(0, 10)}</td>
                                <td>
                                  <div className="row flex d-flex flex-wrap">
                                  <button type="button" className="btn btn-danger col-4 m-0 p-2 justify-content-center" onClick={() => this.removeHandler(key)}>-</button>
                                  <p class="text-center col-4">{data.qtd}</p>
                                  <button type="button" className="btn btn-success col-4 m-0 p-2 me-2 justify-content-center"
                                  onClick={() => this.addHandler(key)}>+</button>
                                  </div>
                                </td>
                                <td>R${data.valor}</td>
                            </tr>
                        );
                    })
                    }
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>R$ {this.state.total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center" > <button className="btn btn-primary" onClick={() => { this.handleConfirmaCompra();}}>Confirmar Compra</button>
                        </div>
            </div>
        </div>
    );
  }
}

export default CarrinhoMobile;