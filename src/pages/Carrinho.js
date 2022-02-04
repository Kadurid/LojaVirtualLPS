import React from 'react';
import {configuration} from '../data/configuration.json';
import CarrinhoDesktop from './components/CarrinhoDesktop';

export default class Produto extends React.Component {
  render(){
    if(configuration.carrinhodisplay === "mobile"){
      return <div></div>
    }
    else{
      return <CarrinhoDesktop cartItems={this.props.cartItems} onAdd={this.onAdd} onRemove={this.onRemove} />
    }
  }
}