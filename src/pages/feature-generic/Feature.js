import React from 'react';

export default class MandatoryFeature extends React.Component {
  
  constructor(props){
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    //Usar o caminho por base de arquivo de config, json
    super();
    this.state = {
      carrinho: [],
      total: 0
    };
    this.Component = React.lazy(() => import("../../featureComponents/"+ props.component +""))
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