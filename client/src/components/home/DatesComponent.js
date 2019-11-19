import React, { Component } from 'react';

export default class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          futureDates: this.props.eventDates.filter(d => new Date(d) - new Date() > 0)
        }
      }   

    render() {
        return(
          <>
            <h2>DatesComponent</h2>
            <h3>{this.state.futureDates}</h3>
          </>
        );
      }
    }