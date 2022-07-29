import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Produto from './pages/Produto';
import Navbar from './pages/Navbar';
import Feature from './pages/feature-generic/Feature';
import OptionalFeature from './pages/feature-generic/OptionalFeature';
import MeuPerfil from './pages/MeuPerfil';
import Carrinho from './pages/Carrinho';
import {produtos} from './data/produtos.json';
import {alternativeFeatureRule} from "./rules/rules.js";
import AlternativeFeature from "./pages/feature-generic/AlternativeFeature";
import genericRule from "./rules/genericRule";
import {config} from "./data/config.js";
import {navbarMobileRule} from"./rules/rules.js"
import {navbarDesktopRule} from "./rules/rules.js"
//---------------------------------------------------------
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartItems : []
    }
   this.onAdd = this.onAdd.bind(this);
   this.onRemove = this.onRemove.bind(this);
   console.log(this.state.cartItems);
  }
  
  onAdd(product){
    const exist = this.state.cartItems.find(x => x.id === product.id);
    if(exist){
      product.qtd = product.qtd +1;
    }
    else {
      product["qtd"] = 1;
      this.state.cartItems.push(product);
      console.log(this.state.cartItems)   
    }
    
  }
  
  onRemove(product){
    const exist = this.state.cartItems.find((x) => x.id === product.id);
    if(exist.qtd ===1){
      this.setState({
        cartItems: this.state.cartItems.filter((x) => x.id !== product.id)
      });
    } else{
      product.qtd = product.qtd - 1;
    }
  }

  testRules(){
    let bol = 1;
    return bol === 1;
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>       
              <OptionalFeature component="ProductSlider" rules={this.testRules} produtos={produtos} cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove}/>
            </Route>
            <Route exact path= '/perfil' component= {MeuPerfil} />
            <Route exact path='/carrinho'>
              <Feature component = "CarrinhoDesktop" cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove} />
            </Route>
          </Switch>
          <AlternativeFeature optional components={[{component: "NavbarMobile", rule: navbarMobileRule}, {component : "NavbarDesktop",               rule: navbarDesktopRule}]}  rule={genericRule}  />        
        </Router>
      </div>
    )
  }
}
//AlternativeFeature: Regra genérica que usam os componentes que estão como array como argumento;

//Colocar situações mais reais no estudo de caso, nas regras, usar regras baseadas em tamanho de tela/navegador/etc.

//<AlternativeFeature optional name={} components={} />
//<Produto produtos={produtos} cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove}/>
// <Feature component="NavbarDesktop" />