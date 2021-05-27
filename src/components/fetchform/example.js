import React from 'react';
import { Table } from 'reactstrap';

const Example = (props) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>S.No</th>
          <th> name</th>
          <th> Username</th>
          <th>Email</th>
          <th>Phone </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
          
      </tbody>
    </Table>
  );
}

export default Example;