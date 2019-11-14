import React, { Component } from 'react';
import Logo from '../images/tee_bo_logo.png';
import '../../styling/components/home/HeaderComponent.css'

export default class HeaderComponent extends Component {

    render() {
        return(
          <>
          <div className='header'>
              <img src={Logo} className='logo' alt='Tee Bo logo'></img>
            </div>
          </>
        );
      }
    }
    