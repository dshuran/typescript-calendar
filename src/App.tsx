import {observable} from "mobx";
import {action} from "mobx";
import {observer} from "mobx-react";
import React, {Fragment} from "react";
import {Calendar} from "./Calendar";
import {DateOutput} from "./DateOutput";

@observer
class App extends React.Component <{}> {
    @observable private year: number;
    @observable private month: number;
    @observable private day: number;
    constructor(props: {}) {
        super(props);

        const curDate = new Date();
        this.year = curDate.getFullYear();
        this.month = curDate.getMonth();
        this.day = curDate.getDate();
    }

    public render() {
        return (
            <Fragment>
                <Calendar year={this.year} month={this.month}
                          onDaySelect={this.onDaySelect} onChanged={this.onMonthYearChanged} />
                <DateOutput year={this.year} month={this.month}
                            eventDate={this.day} />
            </Fragment>
        );
    }

    @action private onDaySelect = (day: number) => {
        this.day = day;
    };

    @action private onMonthYearChanged = (year: number, month: number) => {
        this.year = year;
        this.month = month;
    };
}

export {App};
