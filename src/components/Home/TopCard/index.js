import React, { PureComponent as Component } from "react";
import { Card, Col, Row, Icon } from "antd";
import "./index.scss";
import { chooseDate } from "../../../utils";
import api from "../../../api/index.js";
let currentDate = chooseDate(0);
export default class TopCard extends Component {
    constructor() {
        super();
        this.state = {
            top_value: {}
        };
    }
    intervalGetValue() {
        api.getDynamicWaterInfo().then(res => {
            let { code, data } = res.data;
            if (code === 0) {
                this.setState({
                    top_value: data
                });
            } else {
                this.setState({
                    top_value: {}
                });
            }
        });
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    componentDidMount() {
        this.intervalGetValue();
        this.interval = setInterval(() => this.intervalGetValue(), 2000);
    }
    render() {
        let { ph, pressure, temperature, electrolytic } = this.state.top_value;
        let TempVal = () => (
            <span>{temperature ? temperature + "℃" : "--"}</span>
        );
        let PreVal = () => <span>{pressure ? pressure + "Mpa" : "--"}</span>;
        let PhVal = () => <span>{ph || "--"}</span>;
        let EleVal = () => <span>{electrolytic ? "强" : "弱"}</span>;
        return (
            <div className="top-content">
                <div className="top-card">
                    <Row
                        gutter={16}
                        type="flex"
                        justify="space-around"
                        align="middle"
                    >
                        <Col span={6}>
                            <Card bordered={false}>
                                <div className="card-box gradient-1">
                                    <h3 className="card-title">当前水温</h3>
                                    <div className="main-cont">
                                        <h2 className="cur-val">
                                            <TempVal />
                                        </h2>
                                        <p className="cur-time">
                                            {currentDate}
                                        </p>
                                    </div>
                                    <span className="icon-box">
                                        <Icon type="monitor" />
                                    </span>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card bordered={false}>
                                <div className="card-box gradient-2">
                                    <h3 className="card-title">当前水压</h3>
                                    <div className="main-cont">
                                        <h2 className="cur-val">
                                            <PreVal />
                                        </h2>
                                        <p className="cur-time">
                                            {currentDate}
                                        </p>
                                    </div>
                                    <span className="icon-box">
                                        <Icon type="dashboard" />
                                    </span>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card bordered={false}>
                                <div className="card-box gradient-3">
                                    <h3 className="card-title">当前PH</h3>
                                    <div className="main-cont">
                                        <h2 className="cur-val">
                                            <PhVal />
                                        </h2>
                                        <p className="cur-time">
                                            {currentDate}
                                        </p>
                                    </div>
                                    <span className="icon-box">
                                        <Icon type="pushpin" />
                                    </span>
                                </div>
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card bordered={false}>
                                <div className="card-box gradient-4">
                                    <h3 className="card-title">当前电解性</h3>
                                    <div className="main-cont">
                                        <h2 className="cur-val">
                                            <EleVal />
                                        </h2>
                                        <p className="cur-time">
                                            {currentDate}
                                        </p>
                                    </div>
                                    <span className="icon-box">
                                        <Icon type="experiment" />
                                    </span>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
