import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  console.log(file);
  console.log(info);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  return (
    <div className="container-fluid row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10 p-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onBlur={handleBlur}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Email"
              onBlur={handleBlur}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Upload Picture</label>
            <input
              type="file"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Image"
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
