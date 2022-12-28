import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputName, setInputName] = useState("");

  const [inputEmail, setInputEmail] = useState("");

  const [inputPhone, setInputPhone] = useState("");

  const [inputAddress, setInputAddress] = useState("");

  const [userDetails, setUserDetails] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let userData = {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
      address: inputAddress,
    };

    if (inputName && inputEmail && inputPhone && inputAddress) {
      setUserDetails([...userDetails, userData]);
    } else {
      alert("Add user details");
    }
    setInputName("");
    setInputEmail("");
    setInputPhone("");
    setInputAddress("");
  };

  const deleteUser = (id) => {
    const updateUserData = userDetails.filter((newlist, num) => {
      return id !== num;
    });
    setUserDetails(updateUserData);
  };

  const editUser = (id) => {
    const updateUserData = userDetails.filter((newlist, num) => {
      return id !== num;
    });

    const editedUser = userDetails.find((id) => id === id);
    setUserDetails(updateUserData);
    setInputName(editedUser.name);
    setInputEmail(editedUser.email);
    setInputPhone(editedUser.phone);
    setInputAddress(editedUser.address);
  };
  return (
    <div className="container">
      <div className="input-section">
        <h1 className="title-input">Add User</h1>
        <form>
          <label>Enter Name:</label>
          <br />
          <input
            type="text"
            placeholder=""
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <br />
          <label>Enter Email:</label>
          <br />
          <input
            type="email"
            placeholder=""
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <br />
          <label>Enter Phone:</label>
          <br />
          <input
            type="number"
            placeholder=""
            value={inputPhone}
            onChange={(e) => setInputPhone(e.target.value)}
          />
          <br />
          <label>Enter Address:</label>
          <br />
          <input
            type="text"
            placeholder=""
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />
          <br />
          <button type="submit" className="submit" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
      <div className="user-section">
        <table className="table-section">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((data, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td>
                    <button className="edit" onClick={() => editUser(id)}>
                      Edit
                    </button>
                    <button className="delete" onClick={() => deleteUser(id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
