import React from 'react';
import {configuration} from '../data/configuration.json';
import CarrinhoDesktop from './featureComponents/CarrinhoDesktop';
import CarrinhoMobile from './featureComponents/CarrinhoMobile';

export default class Carrinho extends React.Component {
  constructor(props){
    super();
    this.config = JSON.stringify(configuration);
    this.config = JSON.parse(this.config);
    console.log(this.config[0].navbar);
    
  }
  render(){
    if(this.config[0].carrinhodisplay === "mobile"){
      return <CarrinhoMobile cartItems={this.props.cartItems} onAdd={this.onAdd} onRemove={this.onRemove} />
    }
    else{
      return <CarrinhoDesktop cartItems={this.props.cartItems} onAdd={this.onAdd} onRemove={this.onRemove} />
    }
  }
}