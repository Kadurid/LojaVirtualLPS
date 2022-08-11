import React, { Component } from 'react'
import { Carousel } from 'primereact/carousel';
import '../pages/css/Produto.css';
import '../pages/css/style.css';

export default class ProductSlider extends Component {
  constructor(props){
    super(props);
    this.onAdd = props.onAdd;
    this.onRemove = props.onRemove;
    this.produtos = props.produtos;
    this.state = {
      products: this.produtos
    };
    this.productTemplate = this.productTemplate.bind(this);
    for(var key in this.produtos){
      if(!this.produtos.hasOwnProperty(key)){
          continue;
      }
      this.state.products.push(this.produtos[key])  
    }  
  }
  componentDidMount(){
    for(var key in this.produtos){
      if(!this.produtos.hasOwnProperty(key)){
          continue;
      }
      this.state.products.push(this.produtos[key])  
    }  
  }
  productTemplate(data) {
    return(
      <div className="produto-item">
                <div className="col-2">
                    <figure><img src={data.img} className="img-responsive" alt={data.descricao}/></figure>
                </div>
                <div className="col-8 descricao mt-4">
                    <header>{data.descricao}</header>
                    <footer className="">
                        <b>Valor:R${data.valor}<br/><br/></b>
                        <div className="flex justify-content-center">
                          <button className="btn btn-primary" 
                          onClick={() => { this.onAdd(data)}}
                          >Comprar</button>
                        </div>
                    </footer>
                </div>
            </div>
    );
  }
  render() {
    return (
      <div className="carousel-demo">
        <div className="card">
          <Carousel value = {this.state.products.slice(0,24)} itemTemplate={this.productTemplate}
          numVisible={1} numScroll={1} circular={true}></Carousel>
        </div>
      </div>
      
    )
  }
}
