import React, { Component } from "react";
import { Card, Spin } from "antd";
import "./index.scss";
import api from "../../../api/index.js";
import ReactEcharts from "echarts-for-react";
// 时间-流量关系曲线的数据
export default class Echarts extends Component {
    constructor() {
        super();
        this.state = {
            option: {},
            haveData: true
        };
    }
    getHisEchartData() {
        let { start_time, end_time } = this.props;
        let params = {
            start_time,
            end_time
        };
        this.setState({
            loading: true
        });
        api.getWaterAlarmRecordEchart(params).then(res => {
            let { data, code } = res.data;
            if (code === 0) {
                let { x_time, temperatures, pressures, phs } = data;
                const option = {
                    title: {
                        top: "20",
                        left: "50%",
                        textAlign: "center",
                        textStyle: {
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#999"
                        },
                        text: "预警记录"
                    },
                    grid: {
                        left: "30",
                        right: "0",
                        top: "64",
                        bottom: "64"
                    },
                    tooltip: {
                        trigger: "axis"
                    },
                    legend: {
                        show: true,
                        bottom: 10
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: x_time,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eee"
                                }
                            },
                            axisLabel: {
                                show: true,
                                color: "#333"
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            splitNumber: 5,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: "#eee"
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: "水温",
                            type: "line",
                            symbol: "circle",
                            areaStyle: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(255,64,64,0.4)" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(255,64,64,0.1)" // 100% 处的颜色
                                        }
                                    ]
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgba(255,64,64)"
                                }
                            },
                            data: temperatures
                        },
                        {
                            name: "水压",
                            type: "line",
                            symbol: "circle",
                            areaStyle: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgb(255,171,250,0.4)" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(255,171,250,0.1)" // 100% 处的颜色
                                        }
                                    ]
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgb(255,171,250)"
                                }
                            },
                            data: pressures
                        },
                        {
                            name: "PH值",
                            type: "line",
                            symbol: "circle",
                            areaStyle: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgb(24,144,255,0.4)" // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(24,144,255,0.1)" // 100% 处的颜色
                                        }
                                    ]
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "rgb(24,144,255)"
                                }
                            },
                            data: phs
                        }
                    ]
                };
                this.setState({
                    option: option,
                    haveData: true,
                    loading: false
                });
            } else {
                this.setState({
                    haveData: false
                });
            }
            this.setState({
                loading: false
            });
        });
    }
    render() {
        let { haveData, option, loading } = this.state;
        let Comp = () => (
            <ReactEcharts
                className="echart-box"
                style={{ height: 400, width: "80%", margin: "o auto" }}
                notMerge={true}
                lazyUpdate={true}
                option={option}
            />
        );
        if (!haveData) {
            Comp = () => (
                <div className="no-data">
                    <Card
                        className="no-card"
                        bordered={true}
                        style={{ margin: "0 auto", width: "80%" }}
                    >
                        <img
                            src={require("../../../assets/imgs/404.png")}
                            alt=""
                        />
                        <h4 className="tip-title">当前条件暂无数据</h4>
                    </Card>
                </div>
            );
        }
        return (
            <div className="Echarts">
                <Spin spinning={loading}>
                    <Comp />
                </Spin>
            </div>
        );
    }
}
