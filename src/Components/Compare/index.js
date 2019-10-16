import React, { PureComponent as Component } from "react";
import "./index.scss";
import { Tabs } from "antd";
import { Card } from "antd";
const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
const tabList = [
    {
        key: "tab1",
        tab: "tab1"
    },
    {
        key: "tab2",
        tab: "tab2"
    }
];

const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>
};
export class index extends Component {
    constructor() {
        super();
        this.state = {
            key: "tab1",
            noTitleKey: "app"
        };
    }

    onTabChange = (key, type) => {
        console.log(key, type);
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
