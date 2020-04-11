import React from 'react';
import { Table, Tag } from 'antd';
import styled from 'styled-components'

const Info = () => {
  const columns = [
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      render: text => <strong style={{fontWeight: 700}}>{text}</strong>,
    },
    {
      title: '',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '',
      dataIndex: 'address',
      key: 'address',
      render: text => <strong style={{fontWeight: 700}}>{text}</strong>,
    },
    {
      title: '',
      key: 'tags',
      dataIndex: 'tags',
      // render: tags => (
      //   <span>
      //     {tags.map(tag => {
      //       let color = tag.length > 5 ? 'geekblue' : 'green';
      //       if (tag === 'loser') {
      //         color = 'volcano';
      //       }
      //       return (
      //         <Tag color={color} key={tag}>
      //           {tag.toUpperCase()}
      //         </Tag>
      //       );
      //     })}
      //   </span>
      // ),
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'Balance',
      age: 0.0001,
      address: 'Created By',
      tags: 'Web User Remote Assistance',
    },
    {
      key: '2',
      name: 'Base Currency',
      age: 'US Dollar',
      address: 'Updated On',
      tags: 'Not Defined',
    },
    {
      key: '3',
      name: 'Expiration Date',
      age: 'Never',
      address: 'Updated By',
      tags: 'Not Defined',
    },
    {
      key: '4',
      name: 'First Use Date',
      age: 'Never',
      address: 'Last Login Date',
      tags: 'Never',
    },
    {
      key: '5',
      name: 'Created On',
      age: new Date().toLocaleString(),
      address: 'Last Pass. Change',
      tags: 'Never',
    },
  ];

  return  <StyledTable><Table columns={columns} dataSource={data} /></StyledTable>
  
}

const StyledTable = styled.div`
table {
  width: 800px ;
  margin: 0 auto;
  font-size: 16px;
  thead {
      display: none;
    }
}
    td:nth-child(2) {
      border-right:1px solid black;
    } 
tr:nth-child(1)>td:nth-child(2) {
  color: red;
}
.ant-pagination {
    display: none;
  }
`

export default Info