import React, { Component } from "react";
import "./App.scss";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import ContentWrap from "./Components/ContentWrap";
const App = () => {
    return (
        <div className="App" style={{ height: "100%" }}>
            <ConfigProvider locale={zhCN}>
                <ContentWrap />
            </ConfigProvider>
        </div>
    );
};
export default App;
