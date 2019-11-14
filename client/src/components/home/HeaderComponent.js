import React, { Component } from 'react';
import Logo from '../images/tee_bo_logo.png';

export default class HeaderComponent extends Component {

    render() {
        return(
          <>
          <div>
              <img src={Logo} className='logo' alt='Tee Bo logo'></img>
            </div>
          </>
        );
      }
    }
    