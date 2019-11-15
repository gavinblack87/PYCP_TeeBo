import React, { Component } from 'react';

export default class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            futureDates: []
        }
    }


    render() {
        return(
          <>
            <h2>DatesComponent</h2>
          </>
        );
      }
    }