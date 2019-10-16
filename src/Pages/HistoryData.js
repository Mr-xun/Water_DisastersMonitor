import React, { PureComponent as Component } from "react";
import { Card, Form, DatePicker, Button } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
import "../Styles/historyData.scss";
import Echarts from "../Components/Echarts";
import HistoryData from "../Components/HistoryData";
const { RangePicker } = DatePicker;
moment.locale("zh-cn");

function onChange(date, dateString) {
    console.log(date, dateString);
}
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
                    <div className="search-content">
                        <RangePicker onChange={onChange} className='timeComp'/>
                        <Button type="primary">查询</Button>
                    </div>
                    <Echarts />
                    <HistoryData />
                </Card>
            </div>
        );
    }
}

export default index;
