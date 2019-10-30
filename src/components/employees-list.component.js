
import React, { useMemo } from 'react';
import styled from 'styled-components';
import ReactTable from "react-table";
import "react-table/react-table.css";

const EmployeesList = () => {
  const columns = useMemo(() => [
    { Header: 'ID', accessor: '_id'},
    { Header: 'Name', accessor: 'name'},
    { Header: 'Profession', accessor: 'profession' },
    { Header: 'Code', accessor: 'code' },
    { Header: 'Color', accessor: 'color' },
    { Header: 'Branch', accessor: 'branch' },
    { Header: 'City', accessor: 'city' },
    {
      Header: 'Assigned', 
      accessor: 'assigned',
      Cell: ({ row }) => (
        <div>
          <input type="checkbox" checked={row.assigned} disabled/>
        </div>
      )
    }
  ], []);

  return (
    <div style={{ padding: 10 }}>
      <ReactTable
        columns={columns}
        data={[
          {_id: '1', name: 'name', profession: 'pro', code: 'F100', color: '#FFFFFF', branch: 'branch', city: 'Toronto', assigned: false }
        ]}
        loading={false}
        defaultPageSize={10}
        showPageSizeOptions={true}
        minRows={0}
      />
    </div>
  )
}

export default EmployeesList;