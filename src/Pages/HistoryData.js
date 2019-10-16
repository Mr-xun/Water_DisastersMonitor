import React, { PureComponent as Component } from "react";
import { Tabs } from "antd";
import { Card } from "antd";
import HistoryData from "../Components/HistoryData";
export class index extends Component {
    constructor() {
        super();
        this.state = {
            key: "tab1"
        };
    }
    render() {
        return (
            <div className="main">
                <Card>
                    <HistoryData />
                </Card>
            </div>
        );
    }
}

export default index;
