import React from 'react';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import './Profile.css';
import plus from '../Images/plus.png';

function Profile() {
  return (
    <div className="profile">
      <div className="profile-text">
        <h4>Create some basic information</h4>
        <span>Add some basic information related to the client</span>
      </div>
      <div className="profile-logo">
        <img className="logo" src={plus} />
        <p>
          Company Logo <br />
          <span>Logo ratio shoud be 1:1 and should be 120px X 120 px</span>
        </p>
      </div>

      <div className="profile-form">
        <Formik>
          {({ handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <input
                    className="form-control"
                    name="id"
                    type="id"
                    placeholder="Company Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-6 form-group mb-3">
                  <input
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Website"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <select
                    id="picker1"
                    className="form-control"
                    name="select"
                    placeholder="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="opt1">Select Business Category</option>
                    <option value="opt2">A</option>
                    <option value="opt3">B</option>
                  </select>
                </div>

                <div className="col-md-6 form-group mb-3">
                  <select
                    id="picker2"
                    className="form-control"
                    name="select"
                    placeholder="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="opt1">
                      Select Facility Management Company
                    </option>
                    <option value="opt2">A</option>
                    <option value="opt3">B</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <input
                    className="form-control"
                    name="id"
                    type="id"
                    placeholder="Company Email Address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-6 form-group mb-3">
                  <input
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Mobile Number"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <select
                    id="picker3"
                    className="form-control"
                    name="select"
                    placeholder="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="opt1">Select State</option>
                    <option value="opt2">A</option>
                    <option value="opt3">B</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mb-3">
                  <select
                    id="picker4"
                    className="form-control"
                    name="select"
                    placeholder="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="opt1">Select City</option>
                    <option value="opt2">A</option>
                    <option value="opt3">B</option>
                  </select>
                </div>

                <div className="col-md-2 form-group mb-3">
                  <input
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Pincode"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <input
                    className="form-control"
                    name="id"
                    type="id"
                    placeholder="GST Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-6 form-group mb-3">
                  <input
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Fax Number"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </form>
          )}
        </Formik>
        <Button className="mx-1" variant="primary">
          Save & Continue
        </Button>

        <Button className="mx-1" variant="secondary">
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Profile;
