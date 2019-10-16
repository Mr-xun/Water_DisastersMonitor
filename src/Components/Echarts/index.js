import React, { Component } from 'react';
import './index.scss'
import ReactEcharts from 'echarts-for-react'
// 时间-流量关系曲线的数据
class Echarts extends Component {
  state = {
    option: {}
  }
  componentDidMount(){
      this.handleTest()
  }
  handleTest = () => {
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: [{
            type: 'category',
            data: ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06'],
            axisLine: {
                lineStyle: {
                    color: "#999"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            splitNumber: 4,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#DDD'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#333"
                },
            },
            nameTextStyle: {
                color: "#999"
            },
            splitArea: {
                show: false
            }
        }],
        series: [{
            name: 'Value',
            type: 'line',
            data: [23,60,20,36,23,85],
            lineStyle: {
                normal: {
                    width: 8,
                    color: {
                        type: 'linear',
    
                        colorStops: [{
                            offset: 0,
                            color: '#A9F387' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#48D8BF' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 100,*/
                    borderColor: "#A9F387"
                }
            },
            smooth: true
        }]
    };
    this.setState({
        'option': option
    })
  }
  render() {
    return (
      <div className="Echarts">
        <ReactEcharts
        className='echart-box'
          style={{ height: 400, width: '80%',margin:'o auto'}}
          notMerge={true}
          lazyUpdate={true}
          option={this.state.option} />
      </div>
    );
  }
}

export default Echarts;