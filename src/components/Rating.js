import React from "react";
import { Table, Button } from "antd";
import styled from "styled-components";

const Rating = () => {
  const columns = [
    {
      title: "",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "",
      dataIndex: "age",
      key: "age",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Service Plan",
      age: (
        <select>
          <option>{"111(USD)"}</option>
          <option>{"150(USD)"}</option>
        </select>
      ),
    },
    {
      key: "2",
      name: "Credit Limit",
      age: <input value='0.0001' />,
    },
    {
      key: "3",
      name: "Lifetime, days",
      age: (
        <select>
          <option>{"Unlimited"}</option>
        </select>
      ),
    },
    {
      key: "4",
      name: "Commission Agent",
      age: (
        <select>
          <option>{"None"}</option>
        </select>
      ),
    },
    {
      key: "5",
      name: "Commission Size, %",
      age: <input value='0.0001' disabled />,
    },
    {
      key: "6",
      name: "Invoicing Enabled",
      age: <input class='checkbox' type='checkbox' />,
    },
    {
      key: "7",
      name: "Invoice Template",
      age: <select>
      <option>{"Default Account Invoice"}</option>
    </select>
    },
  ];

  return (
    <StyledTable>
      <Table columns={columns} dataSource={data} />
      <Button type="primary">Save</Button>
    </StyledTable>
  );
};

const StyledTable = styled.div`
  table {
    width: 400px;
    margin: 0 auto;
    font-size: 16px;
    select {
      width: 165px;
      padding: 1px 0;
      height:27px;
    }
    input {
      width: 165px;
      height:27px;
      padding-left: 5px;
    }
    thead {
      display: none;
    }
  }
  tr:nth-child(2) > td:nth-child(1) {
    font-weight: 700;
  }
  td:nth-child(2) {
    text-align: right;
  }
  .ant-pagination {
    display: none;
  }
  .ant-btn {
    /* float: left;
    margin-left: 100px; */
    margin-top: 20px;
  }
  .checkbox {
    width: 22px;
    height: 22px
  }
`;

export default Rating;
