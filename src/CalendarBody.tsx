import React from "react";
import {MouseEvent} from "react";
import {BodyHeader} from "./BodyHeader";

interface IProps {
    year: number;
    month: number;
    onDaySelect(day: number): void;
}

function getDay(day: number) {
    if (day === 0) {
        day = 7;
    }
    day--;
    return day;
}

class CalendarBody extends React.PureComponent<IProps> {
    public render() {
        let curDate = new Date(this.props.year, this.props.month, 1);
        const firstDay = getDay(curDate.getDay());
        const table = [];
        for (let i = 0; i < 5; i++) {
            const arr = [];
            for (let j = 0; j < 7; j++) {
                if (curDate.getMonth() !== this.props.month) {
                    continue;
                } else if (i === 0 && j < firstDay) {
                    arr.push(<td key={i * 10 + j}></td>);
                    continue;
                }
                let td = <td key={j}>{curDate.getDate()}</td>;
                curDate.setDate(curDate.getDate() + 1);
                arr.push(td);
            }
            table.push(<tr key={100 + i * 100}>{arr}</tr>);
        }
        return (
            <table className="mainTable form">
                <thead>
                <BodyHeader/>
                </thead>
                <tbody onClick={this.handleTableClick}>
                    {table}
                </tbody>
            </table>
        );
    }

    private handleTableClick = (e: MouseEvent<HTMLTableSectionElement>) => {
        if (!(e.target instanceof HTMLTableCellElement)) { // Just to modify only table cells
            return;
        }
        this.props.onDaySelect(parseInt(e.target.innerHTML, 10));
    };
}

export {CalendarBody};
