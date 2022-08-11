import React from "react";
import '../pages/css/style.css';
import '../pages/css/Produto.css';

export default class ProductList extends React.Component{

  constructor(props){
    super(props);
    this.onAdd = this.props.onAdd;
    this.onRemove = this.props.onRemove;
    this.produtos = this.props.produtos;
    this.state = {
      products: []
    };
    this.setState({products : this.produtos})
    for(var key in this.produtos){
      if(!this.produtos.hasOwnProperty(key)){
          continue;
      }
    this.state.products.push(this.produtos[key])  
    }
  }
    
  
  render(){
    return(
    <div id="container-produto" className="col-md-10">
      <div className="row">
      {this.state.products.map((data,key) => {
        return(
          <div key={key} className="col-sm-6 col-md-3 produto">
            <div className="produto-item">
                <div className="col-md-12">
                    <figure><img alt="descricao" src={data.img} className="img-responsive"/></figure>
                </div>
                <div className="col-md-12 descricao">
                    <header>{data.descricao}</header>
                    <section><b>Disponível:</b>{data.qtdEstoque}</section>
                    <footer className="">
                        <b>Valor:R${data.valor}<br/><br/></b>
                        <div className="text-center" ><button className="btn btn-primary" onClick={() => { this.onAdd(data);}}>Comprar</button>
                        </div>
                    </footer>
                </div>
            </div>
          </div>
        );
      })}
      </div>
      </div>
    );
  }
//   $(document).ready(function(){
//     return(
//       <p>oii</p>
//     );
//   });
}

