import React from 'react'
import {Link} from 'react-router-dom'
import {SidebarData} from './SidebarData';
import '../css/Navbar.css';
import {InputText} from 'primereact/inputtext';

export default class NavbarMobile extends React.Component{
  constructor(){
    super();
    this.state = {
      sidebar: false
    };
     
  }
  
  render(){
    return(
      
      <div>
        <div className='row'>
          <div className ="navbar">
            <Link to='#' className='menu-bars'>
              <i className='pi pi-bars'color='#fff' onClick={() => this.setState({sidebar: !this.state.sidebar})}/>
            </Link>
            <div className='col-6'>
              <span className="p-float-label">
                <InputText id="in" />
                <label htmlFor='in'>Pesquise aqui</label>
              </span>
              
            </div>
            <div className='col-2 p-0 shopping-col'>
              <i className="pi pi-shopping-cart" />
            </div>
          </div>
        </div>
          
    
        <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className= 'nav-menu-items' onClick={()=> this.setState({sidebar: !this.state.sidebar})}>
            <li className="navbar-toggle">
              <Link to="#" className='menu-bars'>
                <i className='pi pi-angle-left' color='#fff' />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key = {index} className = {item.cName}>
                  <Link to= {item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
          
        </nav>    
      </div>
      
    );
  }
}

