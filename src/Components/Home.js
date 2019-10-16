import React, { PureComponent as Component } from "react";
import { Statistic, Row, Col, Button } from "antd";
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            count: 1
        };
        this.addTodo = this.addTodo.bind(this);
    }
    render() {
        console.log("render");
        let { list, count } = this.state;
        return (
            <div>
                <h1>首页</h1>
                <Statistic title="数量" value={count} />
                <input type="text" ref="ipt" />
                <button onClick={this.addTodo}>增加</button>
                <ul>
                    {list.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            </div>
        );
    }
    addTodo() {
        let newList = [...this.state.list];
        newList.push(this.refs.ipt.value);
        this.setState({
            list: newList
        });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        this.setState(state => {
            return { count: state.count + 1 };
        });
        this.setState(state => {
            return { count: state.count + 1 };
        });
        this.setState(state => {
            return { count: state.count + 1 };
        });
    }
}
