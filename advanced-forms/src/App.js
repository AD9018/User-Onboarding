import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Users from "./Users";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  console.log(allUsers);
  return (
    <div>
      <Form allUsers={allUsers} setAllUsers={setAllUsers} />
      <Users allUsers={allUsers} />
    </div>
  );
}

export default App;
