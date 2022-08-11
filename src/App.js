import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MandatoryFeature from './pages/feature-generic/Feature';
import OptionalFeature from './pages/feature-generic/OptionalFeature';
import MeuPerfil from './pages/MeuPerfil';
import {produtos} from './data/produtos.json';
import AlternativeFeature from "./pages/feature-generic/AlternativeFeature";
import genericRule from "./rules/genericRule";
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
   this.bol = 1;  
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
  
  testRules(cartItems){
    return cartItems.length > 0;
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>       
              <MandatoryFeature component="ProductList" produtos={produtos} cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove}/>
            </Route>
            <Route exact path= '/perfil' component= {MeuPerfil} />
            <Route exact path='/carrinho'>
              <OptionalFeature component = "CarrinhoDesktop" rules={() => this.testRules(this.state.cartItems)} cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove} />
            </Route>
          </Switch>
          <AlternativeFeature components={[{component: "NavbarMobile", rule: navbarMobileRule}, {component : "NavbarDesktop", rule: navbarDesktopRule}]}  rule={genericRule}  />        
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