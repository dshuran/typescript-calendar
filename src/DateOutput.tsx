import React from "react";

interface myProps {
    year: number;
    month: number;
    eventDate: number;
}

class DateOutput extends React.PureComponent<myProps> {
    public render() {
        let year: number = this.props.year;
        let month: number = this.props.month + 1;
        let eventDate: number = this.props.eventDate;
        let curDate = eventDate + "." + month + "." + year;
        return (
            <input className="form" type="text" value={curDate} readOnly/>
        );
    }
}

export {DateOutput};
