import React from "react";
import "./App.css";
import {MonthSelector} from "./MonthSelector";
import {YearSelector} from "./YearSelector";

interface IProps {
    year: number;
    month: number;
    onChanged(year: number, month: number): void;
}

class CalendarHeader extends React.PureComponent<IProps> {
    public render() {
        return (
            <div className="header">
                <div className="leftArrow" onClick={this.handlePrevMonthClick}>‹</div>
                <MonthSelector month={this.props.month} onMonthChanged={this.onMonthChanged}/>
                <YearSelector year={this.props.year} onYearChanged={this.onYearChanged}/>
                <div className="rightArrow" onClick={this.handleNextMonthClick}>›</div>
            </div>
        );
    }

    private handleNextMonthClick = () => {
        const newDate = new Date(this.props.year, this.props.month + 1);
        this.props.onChanged(newDate.getFullYear(), newDate.getMonth());
    };

    private handlePrevMonthClick = () => {
        const newDate = new Date(this.props.year, this.props.month - 1);
        this.props.onChanged(newDate.getFullYear(), newDate.getMonth());
    };

    private onYearChanged = (year: number) => {
        const newDate = new Date(year, this.props.month);
        this.props.onChanged(newDate.getFullYear(), newDate.getMonth());
    };

    private onMonthChanged = (month: number) => {
        const newDate = new Date(this.props.year, month);
        this.props.onChanged(newDate.getFullYear(), newDate.getMonth());
    };
}

export {CalendarHeader};
