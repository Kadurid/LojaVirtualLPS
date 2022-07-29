import React from 'react';
import {config} from "../../data/config.js";
import Feature from "./Feature";
import OptionalFeature from "./OptionalFeature"

export default class AlternativeFeature extends React.Component {
  
  constructor(props){
    //Se a estrutura de diretórios diferir de estar na mesma pasta, pode dar erro
    //Usar o caminho por base de arquivo de config, json
    super();
    //React lazy não carrega funções
    //var rule = React.lazy(() => import(config[props.rule].path))
    this.result = props.rule(props.components);
    console.log(this.result);
  }

  render(){
      //var Component = this.Component;
      console.log(this.result.length);
      if(this.props.optional){
        return (
          <>
            {this.result.map(value => {
              return(
                <div>
                  <OptionalFeature component = {value.component} rules={value.rule} {...this.props}/> 
                </div>
              )
            })}
          </>
        )
      } else if(this.result.length === 0){
        return (
          <div >
          </div>
        )
      }
      return (
        <>
          {this.result.map(value => {
            console.log(value);
            return(
              <div>
                <Feature component = {value.component} {...this.props}/>  
              </div>
            )
          })}
        </>
      )
  }
}
// <NavbarDesktop {...this.props}/>
