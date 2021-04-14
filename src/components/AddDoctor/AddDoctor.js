import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Navbar from "../Shared/Navbar/Navbar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  console.log("get state", info, file);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    fetch("http://localhost:5000/addADoctor", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("get img", result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="container-fluid bg-danger">
        <Navbar></Navbar>
      </div>
      <div className="container-fluid row">
        <div className="col-md-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 p-4">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="name">Full Name</label>
              <input
                onBlur={handleBlur}
                name="name"
                type="text"
                class="form-control"
                placeholder="Enter Name"
                id="name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                onBlur={handleBlur}
                name="email"
                type="text"
                class="form-control"
                placeholder="Email"
                id="email"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="image">Upload Picture</label>
              <input
                onChange={handleFileChange}
                type="file"
                class="form-control"
                id="image"
                placeholder="Image"
              />
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
