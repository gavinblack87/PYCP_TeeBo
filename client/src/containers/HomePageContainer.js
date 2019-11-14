import React, { Component } from 'react';

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
                <h1>HomePageContainer</h1>
            </>
        )
    }
}