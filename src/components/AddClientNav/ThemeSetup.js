import React from 'react';

import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import './ThemeSetup.css';

function ThemeSetup() {
  return (
    <div className="theme-setup">
      <div className="theme-text">
        <h4>Theme Setup</h4>
        <span>
          Add information about the client to give them a personalized
          experience.
        </span>
      </div>

      <div className="theme-form">
        <Formik>
          {({ handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <label>Primary Color</label>
                <div className="col-md-12 form-group mb-3">
                  <input
                    className="form-control"
                    name="id"
                    type="id"
                    placeholder=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value="#153AC7"
                  />
                </div>
              </div>
              <div className="theme-body">
                <p>Add Hex Value</p>
                <h6>Login Theme</h6>
                <span>Select the look and feel of the login page.</span>
              </div>
              <div className="usecolor">
                <input type="radio" name="radio" value="0" />
                <span>Use Color</span>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="theme-button">
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

export default ThemeSetup;
