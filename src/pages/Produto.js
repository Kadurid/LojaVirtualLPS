import React from 'react';
import {configuration} from '../data/configuration.json';
import ProductSlider from './components/ProductSlider';
import ProductList from './components/ProductList';



export default class Produto extends React.Component {
  constructor(props){
    super();
    this.config = JSON.stringify(configuration);
    this.config = JSON.parse(this.config);
  }
  render(props){
    if(this.config[0].produtodisplay === "mobile"){
      return <ProductSlider produtos={this.props.produtos} cartItems={this.props.cartItems} onAdd={this.props.onAdd} onRemove={this.props.onRemove}  />
    }
    else{
      return <ProductList produtos={this.props.produtos} cartItems={this.props.cartItems} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
    }
  }
}