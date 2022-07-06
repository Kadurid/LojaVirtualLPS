import React from 'react';

export default class Feature extends React.Component {
  
  constructor(props){
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    //Usar o caminho por base de arquivo de config, json
    super();
    this.Component = React.lazy(() => import("../components/"+ props.component +""))
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