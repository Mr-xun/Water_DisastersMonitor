import React, { Component } from "react";
import { Button } from "antd";
export default class Orders extends Component {
    constructor() {
        super();
        this.goPage1 = this.goPage1.bind(this);
        this.goPage2 = this.goPage2.bind(this);
        this.goPage3 = this.goPage3.bind(this);
    }
    componentDidMount() {
        console.log(this, 11);
    }
    render() {
        return (
            <div>
                <Button type="primary" size="small" onClick={this.goPage1}>
                    路由传参1
                </Button>
                <Button type="primary" size="small" onClick={this.goPage2}>
                    路由传参2
                </Button>
                <Button type="primary" size="small" onClick={this.goPage3}>
                    路由传参3
                </Button>
            </div>
        );
    }
    goPage1() {
        this.props.history.push("/details/11/");
    }
    goPage2() {
        this.props.history.push({ pathname: "/details", query: { id: 22 } });
    }
    goPage3() {
        this.props.history.push({ pathname: "/details", state: { id: 33 } });
    }
}
