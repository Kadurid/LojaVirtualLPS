import React from 'react';
import * as config from "../../data/config.json";

export default class Feature extends React.Component {
  
  constructor(props){
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    //Usar o caminho por base de arquivo de config, json
    super();
    //var configuration = JSON.parse(config);
    var result = props.rule();
    if(result == null && props.optional){
      this.Component = <></>
    }
    if(result == null){
      throw Error;
    } else {
      this.Component = React.lazy(() => import(config[result].path))
    }
  }

  render(){
      var Component = this.Component;
      return (
        <>
        <React.Suspense fallback={<div className="bg-primary">Carregando...</div>}>
        <Component {...this.props}/>
        </React.Suspense>
        </>
      )
  }
}