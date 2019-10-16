import React, { PureComponent as Component } from "react";
import "./index.less";
import { Table, Divider, Tag } from "antd";
const columns = [
    {
        title: "Time",
        dataIndex: "createTime",
        key: "createTime",
    },
    {
        title: "WaterTemp",
        dataIndex: "age",
        key: "age"
    },
    {
        title: "PH",
        dataIndex: "phval",
        key: "phval"
    },
    {
        title: "WaterPress",
        dataIndex: "address",
        key: "address"
    },
    {
        title: "Solubleness",
        dataIndex: "solubleness",
        key: "solubleness",
        render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
    },
    {
        title: "操作",
        key: "action",
        render: (text) => (
            <span>
                <a>修改</a>
                <Divider type="vertical" />
                <a>删除</a>
            </span>
        )
    }
];

const data = [
    {
        key: "1",
        createTime: "2019-10-16",
        age: 32,
        address: 96,
        phval:0.95,
        solubleness:['Nice'],
    },
    {
        key: "2",
        createTime: "2019-10-16",
        age: 42,
        address: 33,
        phval:0.95,
        solubleness:['Nice'],
    },
    {
        key: "3",
        createTime: "2019-10-16",
        age: 32,
        address: 44,
        phval:0.95,
        solubleness:['Nice'],
    }
];
export default class HistoryData extends Component {
    constructor() {
        super();
    }
    componentDidMount(){
        console.log(this)
    }
    render() {
        return (
            <div className='history-wrap'>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}
