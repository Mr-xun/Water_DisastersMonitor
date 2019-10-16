import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom";
import { getRootPath } from "../../utils";
import HistoryData from "../../Pages/HistoryData";
import Compare from "../../Pages/Compare";
import DataTrend from "../../Pages/DataTrend";
import AlarmVal from "../../Pages/AlarmVal";
import api from "../../api/index.js";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
const NotFound = () => <div>404Page</div>;
export default class ContentWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultKeys: "/history"
        };
    }
    componentWillMount() {
        this.setState({
            defaultKeys: getRootPath()
        });
    }
    componentDidMount() {
        api.getDynamicWaterInfo().then(res => {
            console.log(res);
        });
    }
    render() {
        let { defaultKeys } = this.state;
        return (
            <Layout className="wrapper">
                <Header>Header</Header>
                <Layout>
                    <Router>
                        <Sider>
                            <Menu
                                style={{ height: "100%" }}
                                defaultSelectedKeys={[defaultKeys]}
                                mode="inline"
                            >
                                <Menu.Item key="/home">
                                    <NavLink exact to="/home">
                                        <Icon type="bank" />
                                        概览
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="/history">
                                    <NavLink exact to="/history">
                                        <Icon type="unordered-list" />
                                        历史趋势
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="/compare">
                                    <NavLink exact to="/compare">
                                        <Icon type="column-width" />
                                        对比
                                    </NavLink>
                                </Menu.Item>
                                <Menu.Item key="/alarmVal">
                                    <NavLink exact to="/alarmVal">
                                        <Icon type="bell" />
                                        预警
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Content>
                            <Switch>
                                <Route
                                    exact
                                    path="/compare"
                                    component={Compare}
                                ></Route>
                                <Route
                                    exact
                                    path="/history"
                                    component={HistoryData}
                                ></Route>
                                <Route
                                    exact
                                    path="/trend"
                                    component={DataTrend}
                                ></Route>
                                <Route
                                    exact
                                    path="/alarmVal"
                                    component={AlarmVal}
                                ></Route>
                                <Route component={NotFound} />
                            </Switch>
                        </Content>
                    </Router>
                </Layout>
            </Layout>
        );
    }
}
