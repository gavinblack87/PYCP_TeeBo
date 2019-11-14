import React, { Component } from 'react';
import HeaderComponent from '../components/home/HeaderComponent';

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
                <h1>HomePageContainer</h1>
            </>
        )
    }
}