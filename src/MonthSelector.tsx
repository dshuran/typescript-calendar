import React, {Fragment} from "react";
import {ChangeEvent} from "react";

interface IProps {
    month: number;
    onMonthChanged(index: number): void;
}

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август",
    "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

class MonthSelector extends React.PureComponent<IProps> {
    public render() {
        let modifiedMonths = [];
        for (let i = 0; i < 12; i++) {
            modifiedMonths[i] = <option value={i} key={i}>{months[i]}</option>;
        }
        return (
          <Fragment>
              <select className="monthSelector" onChange={this.handleChange} value={this.props.month}>
                  {modifiedMonths}
              </select>
          </Fragment>
        );
    }

    private handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.onMonthChanged(e.target.selectedIndex);
    };
}

export {MonthSelector};
