import React from 'react';
import {config} from "../../data/config.js";

export default class OptionalFeature extends React.Component {
  
  constructor(props)
  {
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    super();
    this.Component = React.lazy(() => import("../featureComponents/"+ props.component +""));
    //this.Component = React.lazy(async() => await import(props.componentPath));
    //let texto = "" + config[props.component].path + ""
    //let texto = "../components/"+ props.component +"";
    //this.Component = React.lazy(() => import(texto));
    //console.log(typeof texto);
    //console.log(config[props.component].path === texto)
    //this.Component = React.lazy(() => import(config[props.component].path))
    this.rules = props.rules.bind();
    //Caminho correto, porém não conseguiu importar a função
    //import(config[props.component].rule).then(obj => this.rules = obj).catch(err => console.log(err));
    
  }

  render(){
    var Component = this.Component;
    if(this.props.rules()){
      return (
        <>
        <React.Suspense fallback={<div className="bg-primary">Carregando...</div>}>
        <Component {...this.props}/>
        </React.Suspense>
        </>
      )
    } else {
      return null;
    }
  }
}
