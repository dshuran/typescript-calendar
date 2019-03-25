import React from "react";
import {ChangeEvent} from "react";

interface IProps {
    year: number;
    onYearChanged(year: number): void;
}

class YearSelector extends React.PureComponent<IProps> {
    public render() {
        const kMaxBorder = 2018;
        const kMinBorder = 1959;
        let maxYear = kMaxBorder;
        let minYear = kMinBorder;
        if (this.props.year > kMaxBorder) {
            maxYear += Math.ceil((this.props.year - kMaxBorder) / 10) * 10;
        }
        if (this.props.year < kMinBorder) {
            minYear -= Math.ceil((kMinBorder - this.props.year) / 10) * 10;
        }
        let options = [];
        for (let i = 0; maxYear - i >= minYear; i++) {
            options[i] = <option key={i} value={maxYear - i}>{maxYear - i}</option>;
        }
        return (
            <select className="yearSelector" onChange={this.handleChange} value={this.props.year}>
                {options}
            </select>
        );
    }

    private handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.onYearChanged(parseInt(e.currentTarget.value, 10));
    };
}

export {YearSelector};
