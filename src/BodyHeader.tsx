import React, {Component} from "react";

class BodyHeader extends React.PureComponent {
    public render() {
        return (
            <tr>
                <td>Пн</td>
                <td>Вт</td>
                <td>Ср</td>
                <td>Чт</td>
                <td>Пт</td>
                <td>Сб</td>
                <td>Вс</td>
            </tr>
        );
    }
}

export {BodyHeader};
