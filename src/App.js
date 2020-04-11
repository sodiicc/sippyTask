import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Tabs } from "antd";
import Info from "./components/Info";
import Rating from "./components/Rating";
import styled from "styled-components";
import { Pagination } from "antd";
import DescriptionTable from "./components/DescriptionTable";

export const ClickedContext = React.createContext(false);

const App = () => {
  const { TabPane } = Tabs;
  let task = 2;

  function callback(key) {
    console.log(key);
  }

  return (
    <StyledTable className="App">
      {task === 1 ? (
        <div>
          <h1>Accounts Page</h1>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Info" key="1">
              <Info />
            </TabPane>
            <TabPane tab="Basic Parameters" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Raing & Billing" key="3">
              <Rating />
            </TabPane>
            <TabPane tab="Advanced Parameters" key="4">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Voicemail & IVR" key="5">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Anonymous Calling" key="6">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      ) : null}
      {task === 2 ? (
        <div>
          <h1>Destinations</h1>
          <Pagination showQuickJumper  defaultCurrent={121} total={2906} />
          <DescriptionTable />
        </div>
      ) : null}
      {task === 3 ? (
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Info" key="1">
            <Info />
          </TabPane>
          <TabPane tab="Basic Parameters" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Raing & Billing" key="3">
            <Rating />
          </TabPane>
          <TabPane tab="Advanced Parameters" key="4">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Voicemail & IVR" key="5">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="Anonymous Calling" key="6">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      ) : null}
    </StyledTable>
  );
};

const StyledTable = styled.div`
  .ant-tabs-nav {
    font-size: 16px;
  }
`;

export default App;
