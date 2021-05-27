import { useState, useEffect } from "react";
// Creating Custom and return userlist
const Usersdata = () => {
  const [userslist, setuserslist] = useState([]);
  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:8000/users", { headers })
      .then((response) => response.json())
      .then((data) => setuserslist(data));
  });

  return userslist;
};

export default Usersdata;
