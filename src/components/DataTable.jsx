import React from 'react';
import { Table } from 'reactstrap';

const DataTable = (props) => {
  const { data, headers } = props;

  return (
    <>
      <Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, columnIndex) => (
                <td key={columnIndex}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DataTable;