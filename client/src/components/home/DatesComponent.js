import React, { Component } from 'react';
import Moment from 'react-moment';
import '../../styling/components/home/DatesComponent.css'

export default class DateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          futureDates: this.props.eventDates.filter(d => new Date(d) - new Date() > 0)
        }
      }   

    render() {
        return(
          <div className="dates-component">
              <h2 className="date-heading">Future Dates:</h2>
                <div className="dates-container">
                {this.state.futureDates.map((date, index) => {
                  return<h3 className="date"><Moment key={index} format="Do MMMM YYYY">{date}</Moment></h3>
                })}
                </div>
          </div>
        );
      }
    }