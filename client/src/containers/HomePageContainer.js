import React, { Component } from 'react';
import HeaderComponent from '../components/home/HeaderComponent';
import DatesComponent from '../components/home/DatesComponent';

export default class HomePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [], 
            eventDates: []
        }
    }
    render() {
        return (
            <>
                <HeaderComponent />
                <DatesComponent eventDates={this.state.eventDates} />
                <h1>HomePageContainer</h1>
            </>
        )
    }
}