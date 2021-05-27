import React, { useState, useContext } from "react";
import { UsersfromContext } from "./UsersfromContext";
const Usersdata = () => {
  const [user, setUser] = useContext(UsersfromContext);
  return (
    <div>
      <p> Data Coming from one point </p>

      <table>
        <tr>
          <th>S.No</th>
          <th>Name </th>
          <th>lastName</th>
          <th>Email</th>
        </tr>
        {user.map((list) => (
          <tr>
            <td>{list.id} </td>
            <td>{list.firstName} </td>
            <td>{list.lastName} </td>
            <td>{list.email} </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Usersdata;
