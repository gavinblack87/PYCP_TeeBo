import React, { Component } from 'react';
import HeaderComponent from '../components/home/HeaderComponent';
import DatesComponent from '../components/home/DatesComponent';

export default class HomePageContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [], 
            eventDates: ['2019/10/28', '2019/12/28', '2020/06/18', '2020/07/08']
        }
    }
    render() {
        return (
            <>
                <HeaderComponent />
                <DatesComponent eventDates={this.state.eventDates} />
            </>
        )
    }
}