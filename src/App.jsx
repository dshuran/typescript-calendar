import React, {Component, Fragment} from 'react';
import {Calendar} from './Calendar.jsx';
import {DateOutput} from "./DateOutput";

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {date: new Date(), eventDate : '1'};
        this.handleTableClick = this.handleTableClick.bind(this);
        this.onMonthYearChanged = this.onMonthYearChanged.bind(this);
        this.onNextPrevClick = this.onNextPrevClick.bind(this);
    }

    onNextPrevClick(type) {
        this.setState(function(prevState) {
            let tmpDate = prevState.date;
            if(type === "next") {
                tmpDate.setMonth(tmpDate.getMonth() + 1);
            } else {
                tmpDate.setMonth(tmpDate.getMonth() - 1);
            }
            return {date : tmpDate};
        })
    }

    onMonthYearChanged(year, month) {
        this.setState({date : new Date(year, month)});
    }

    handleTableClick(e) {
        this.setState({eventDate : e.target.innerHTML});
    }

    render() {
        const year = this.state.date.getFullYear();
        const month = this.state.date.getMonth();
        const eventDate = this.state.eventDate;
        return (
            <Fragment>
                <Calendar date={this.state.date} handleTableClick={this.handleTableClick}
                          onMonthYearChanged={this.onMonthYearChanged}
                          onNextPrevClick={this.onNextPrevClick}/>
                <DateOutput year={year} month={month} eventDate={eventDate}/>
            </Fragment>
        );
    }
}

export {App};