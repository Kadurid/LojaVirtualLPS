import React from 'react';
import {config} from "../../data/config.js";
import Feature from "./Feature";
import NavbarDesktop from "./../components/NavbarDesktop"
import OptionalFeature from "./OptionalFeature"

export default class AlternativeFeature extends React.Component {
  
  constructor(props){
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    //Usar o caminho por base de arquivo de config, json
    super();
    var result = props.rule();
    //Se a regra retornar mais de um componente, enviar todos para a tela.
    if(result == null && props.optional){
      this.Component = <></>
    }
    if(result == null){
      //Quando não retornar componente nenhum, retornar um componente default. Um componente que só ocupa espaço e é vazia.
      throw Error;
    } else {
      console.log(typeof config[result].path);
      let configString = config[result].path;
      console.log(configString === "./../components/NavbarDesktop");
      this.comp = result;
      //this.Component = React.lazy(() => import(configString))
      //this.Component  = <NavbarDesktop/>
      //this.Component = <Feature component = {result}/>
    }
  }

  render(){
      //var Component = this.Component;
      //console.log(typeof Component);
      var rule = () => true;
      if(this.props.optional){
        return (
          <>
          <React.Suspense fallback={<div className="bg-primary">Carregando...</div>}>
          <OptionalFeature component = {this.comp} rules={rule} {...this.props}/>  
          </React.Suspense>
          </>
        )
      }
      return (
        <>
        <React.Suspense fallback={<div className="bg-primary">Carregando...</div>}>
        <Feature component = {this.comp} {...this.props}/>  
        </React.Suspense>
        </>
      )
  }
}
//          <NavbarDesktop {...this.props}/>
