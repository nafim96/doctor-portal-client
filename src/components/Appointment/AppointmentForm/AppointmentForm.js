import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const AppointmentForm = ({ modalIsOpen, closeModal, appointSubject, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointSubject;
    data.date = date;
    data.created = new Date();

    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          closeModal();
          alert("Appointment Created Successfully!");
        }
      });
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-info">{appointSubject}</h2>
        <p className="text-danger text-center">
          <small>ON {date.toDateString()}</small>
        </p>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group m-3">
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="form-control"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="Phone Number"
              className="form-control"
            />
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group m-3">
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
              className="form-control"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="form-group row m-3">
            <div className="col-4">
              <select
                className="form-control"
                {...register("gender", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true })}
                className="form-control"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true })}
                className="form-control"
                placeholder="Weight"
                type="number"
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn btn-info">
              Send
            </button>
          </div>
        </form>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <input type="time" {...register("Time", { required: true })} />
          {errors.Time && (
            <span className="text-danger">
              Patient Appoint Time is Required*
            </span>
          )}{" "}
          <br />
          <input
            {...register("userName", { required: true })}
            placeholder="Patient Name"
          />
          {errors.userName && (
            <span className="text-danger">Patient Name is Required*</span>
          )}
          <br />
          <input
            {...register("userPhone", { required: true })}
            placeholder="Patient Phone"
          />
          {errors.userPhone && (
            <span className="text-danger">Patient phone is Required*</span>
          )}
          <br />
          <input
            type="email"
            {...register("userMain", { required: true })}
            placeholder="Patient Email"
          />
          {errors.userMain && (
            <span className="text-danger">Patient Email is Required*</span>
          )}
          <br />
          <input type="date" {...register("useDate", { required: true })} />
          {errors.useDate && (
            <span className="text-danger">
              Patient Appoint date is Required*
            </span>
          )}
          <br />
          <input type="submit" />
          <button onClick={closeModal}>close</button>
        </form> */}
      </Modal>
    </div>
  );
};

export default AppointmentForm;
