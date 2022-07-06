import React from 'react';

export default class OptionalFeature extends React.Component {
  
  constructor(props)
  {
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    super();
    this.Component = React.lazy(() => import("../components/"+ props.component +""))
    this.rules = props.rules.bind();
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
