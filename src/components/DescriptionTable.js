import React from 'react';
import { Table, Tag } from 'antd';
import styled from 'styled-components'
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons'

const DescriptionTable = () => {
  const columns = [
    {
      title: 'Prefix',
      dataIndex: 'prefix',
      key: 'prefix'
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Area Name',
      dataIndex: 'areaName',
      key: 'areaName'
    },
    {
      title: 'Min.Length',
      dataIndex: 'minLength',
      key: 'minLength'
    },
    {
      title: 'Max.Length',
      dataIndex: 'maxLength',
      key: 'maxLength'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action'
    },
  ];

  const action = <span><EditTwoTone style={{ fontSize: '20px',cursor: 'pointer' }} /><DeleteTwoTone twoToneColor="red" style={{ marginLeft: '10px', fontSize: '20px', cursor: 'pointer' }} /></span>
  
  const data = [
    {
      key: '1',
      prefix: '1201',
      country: 'UNATED STATES',
      description: 'New Jersey',
      areaName: 'NJ',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '2',
      prefix: '1202',
      country: 'UNATED STATES',
      description: 'District of Columbia',
      areaName: 'DC',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '3',
      prefix: '1203',
      country: 'UNATED STATES',
      description: 'Connecticut',
      areaName: 'CT',
      minLength: '11',
      maxLength: '11',
      action,
    },
    {
      key: '4',
      prefix: '1204',
      country: 'CANADA',
      description: 'Manitoba',
      areaName: '',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '5',
      prefix: '1205',
      country: 'UNATED STATES',
      description: 'Alabama',
      areaName: 'AL',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '6',
      prefix: '1206',
      country: 'UNATED STATES',
      description: 'Washington',
      areaName: 'WA',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '7',
      prefix: '1207',
      country: 'UNATED STATES',
      description: 'Maine',
      areaName: 'ME',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '8',
      prefix: '1208',
      country: 'UNATED STATES',
      description: 'Idaho',
      areaName: 'ID',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '9',
      prefix: '1209',
      country: 'UNATED STATES',
      description: 'California',
      areaName: 'CA',
      minLength: '11',
      maxLength: '11',
      action
    },
    {
      key: '10',
      prefix: '1210',
      country: 'UNATED STATES',
      description: 'Texas',
      areaName: 'TX',
      minLength: '11',
      maxLength: '11',
      action
    },
  ];

  return  <StyledTable><Table columns={columns} dataSource={data} /></StyledTable>
  
}

const StyledTable = styled.div`
table {
  width: auto ;
  margin: 10px auto;
  font-size: 16px;
  td {
    padding: 6px 16px;
  }
  tr:nth-child(2n) {
    background-color: #eee;
  }
}
.ant-pagination {
    display: none;
  }
`

export default DescriptionTable