// import { useFormik } from "formik";
// Importerar hook'en "useState"
import React, { useState } from "react";

// function validateForm(values) {
//   const errors = {};
//   if (!values.fullName) {
//     errors.fullName = "Name is required";
//   } else if (values.firstName.length < 2) {
//     errors.firstName = "Must be 2 characters or more";
//   } else if (!values.firstName.contain(" ")) {
//     errors.firstName = "Both names required";
//   }

//   if (!values.phone) {
//     errors.phone = "Phone number is required";
//   } else if (values.phone.contains() > 20) {
//     errors.phone = "Must be 20 characters or less";
//   }

//   return errors;
// }

// Definierar en funktionell komponent enligt"React.FC"
const BookingForm: React.FC = () => {
  // Använder useState-hooken för att skapa tillståndsvariabeln "showForm"
  // samt funktionen "setShowForm" för att uppdatera tillståndet. showForm sätts först till false.
  const [showForm, setShowForm] = useState(false);

  // När clickEvent anropas sätts setShowForm till true
  const clickEvent = () => {
    setShowForm(true);
  };

  // const formik = useFormik({
  //   // Var/Hur typ'ar jag parametrarna?
  //   initialValues: {
  //     fullName: "",
  //     phone: "",
  //   },
  //   validate: validateForm,
  //   onSubmit: (values) => {
  //     // fetch  method = post -> JSON API
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <>
      <div className="btnContainer">
        <button className="bookingBtn" id="booking-btn" onClick={clickEvent}>
          <span>Book seats</span>
        </button>
      </div>
      {/* Om showform är satt till true, rendera följande */}
      {showForm && (
        <form className="bookingContainer">
          {/* <form className="bookingContainer" onSubmit={formik.handleSubmit}> */}
          <div className="inputField">
            <label htmlFor="fullName">Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              // onChange={formik.handleChange}
              // value={formik.values.fullName}
            ></input>
            {/* {formik.errors.fullName ? (
              <span className="error">{formik.errors.fullName}</span>
            ) : null} */}
          </div>
          <div className="inputField">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              // onChange={formik.handleChange}
              // value={formik.values.phone}
            ></input>
            {/* {formik.errors.phone ? (
              <span className="error">{formik.errors.phone}</span>
            ) : null} */}
          </div>
          <div className="submitButton">
            <button className="submitBtn" type="submit">
              Ok
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default BookingForm;
