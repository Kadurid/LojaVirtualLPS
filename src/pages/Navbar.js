import React from 'react';
import {configuration} from '../data/configuration.json';
import NavbarDesktop from './components/NavbarDesktop';
import NavbarMobile from './components/NavbarMobile';



export default class Navbar extends React.Component {
  constructor(props){
    super();
    this.config = JSON.stringify(configuration);
    this.config = JSON.parse(this.config);
    console.log(this.config[0].navbar);
    
  }
  render(props){
    if(this.config[0].navbar === "mobile"){
      return <NavbarMobile />
    }
    else{
      return <NavbarDesktop />
    }
  }
}