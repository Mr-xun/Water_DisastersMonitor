import React, { PureComponent as Component } from "react";
import "../Styles/waterTemp.scss";
import { Tabs } from "antd";
import { Card } from "antd";
import HistoryData from "../Components/Compare/History";
const tabList = [
    {
        key: "tab1",
        tab: "tab1"
    },
    {
        key: "tab2",
        tab: "tab2"
    },
    {
        key: "tab3",
        tab: "tab3"
    },
    {
        key: "tab4",
        tab: "tab4"
    }
];
const contentList = {
    tab1: <HistoryData />,
    tab2: <p>content2</p>,
    tab3: <p>content3</p>,
    tab4: <p>content4</p>
};
export class index extends Component {
    constructor() {
        super();
        this.state = {
            key: "tab1"
        };
    }
    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    };
    render() {
        return (
            <div className="main">
                <Card
                    style={{ width: "100%" }}
                    tabList={tabList}
                    activeTabKey={this.state.key}
                    onTabChange={key => {
                        this.onTabChange(key, "key");
                    }}
                >
                    {contentList[this.state.key]}
                </Card>
            </div>
        );
    }
}

export default index;
