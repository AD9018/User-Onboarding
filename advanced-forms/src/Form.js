import React, { useState } from "react";
import axios from "axios";

export default function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tos, setTos] = useState("");
  const [password, setPassword] = useState("");

  const userObj = {
    firstName: firstName,
    lastName: lastName,
    emailHandle: email,
    password: password,
    tos: tos,
  };

  const submitForm = (e) => {
    e.preventDefault();
    
    axios
    .post("https://reqres.in/api/users", userObj)
    .then((res) => {
        props.setAllUsers([...props.allUsers, res.data]);

    })
    .catch((err) => {
      console.log(err)
    })
   
  };

  return (
    <form>
      <input
        name="firstName"
        type="text"
        placeholder="first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        name="lastName"
        type="text"
        placeholder="last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        name="Email"
        type="email"
        placeholder="e-mail here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>
        Terms of Service
        <input
          name="Terms of Service"
          type="checkbox"
          placeholder="Terms of Service"
          value={tos}
          onChange={(e) => setTos(e.target.value)}
        />
      </label>
      <input
        name="Password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={(e) => submitForm(e)}>Submit</button>
    </form>
  );
}
