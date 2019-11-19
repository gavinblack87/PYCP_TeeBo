import React, { Component } from 'react';
import Moment from 'react-moment';

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
            <h2>Future Dates:</h2>
            {this.state.futureDates.map((date, index) => {
              return<h3><Moment key={index} format="Do MMMM YYYY">{date}</Moment></h3>
            })}
          </>
        );
      }
    }