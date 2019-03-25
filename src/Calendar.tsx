import React, {Fragment} from "react";
import {CalendarBody} from "./CalendarBody";
import {CalendarHeader} from "./CalendarHeader";

interface IProps {
    year: number;
    month: number;
    onChanged(year: number, month: number): void;
    onDaySelect(day: number): void;
}

class Calendar extends React.PureComponent<IProps> {

    public render() {
        return (
            <Fragment>
                <CalendarHeader year={this.props.year} month={this.props.month} onChanged={this.props.onChanged} />
                <CalendarBody year={this.props.year} month={this.props.month}  onDaySelect={this.props.onDaySelect} />
            </Fragment>
        );
    }
}

export {Calendar};
