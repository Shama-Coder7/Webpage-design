import React from 'react';
import { Formik } from 'formik';
import { Button } from 'react-bootstrap';
import './Payment.css';

function Payment() {
  return (
    <div className="payment">
      <div className="payment-text">
        <h4>Payment Setup</h4>
        <span>Set up payments for the client</span>
      </div>

      <div className="payment-form">
        <Formik>
          {({ handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <input
                    className="form-control"
                    name="id"
                    type="id"
                    placeholder="Billing Address"
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
                    <option value="opt1">Select State</option>
                    <option value="opt2">A</option>
                    <option value="opt3">B</option>
                  </select>
                </div>

                <div className="col-md-4 form-group mb-3">
                  <select
                    id="picker2"
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
                    id="pincode"
                    name="pincode"
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
                <select
                    id="picker2"
                    className="form-control"
                    name="select"
                    placeholder="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="opt1">Select Number of Site Access</option>
                    <option value="opt2">A</option>
                    <option value="opt3">B</option>
                  </select>
                
                </div>

                <div className="col-md-6 form-group mb-3">
                  <input
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Rs. Payable Amount per Site"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div className=" row">
                <div className="col-md-6 form-group mb-3">
                  <input
                    className="form-control"
                    name="id"
                    type="id"
                    placeholder="Discount (%)"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="col-md-6 form-group mb-3">
                  <input
                    id="Name"
                    name="Name"
                    className="form-control"
                    placeholder="Reason"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <div className="row">
                <label>Payment Mode</label>
                <div
                  className="col-md-6 form-group mb-4"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <input type="checkbox" />
                  <span>UPI</span>
                  <span className="checkmark"></span>

                  <input type="checkbox" />
                  <span>Net Banking</span>
                  <span className="checkmark"></span>
                  <input type="checkbox" />
                  <span>Cash</span>
                  <span className="checkmark"></span>
                  <input type="checkbox" />
                  <span>Cheque</span>
                  <span className="checkmark"></span>
                  <input type="checkbox" />
                  <span>Other</span>
                  <span className="checkmark"></span>
                </div>
                <div
                  className="col-md-4 form-group mb-3"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <input type="checkbox" />
                  <span>UPI</span>
                  <span className="checkmark"></span>

                  <input type="checkbox" />
                  <span>Net Banking</span>
                  <span className="checkmark"></span>
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

export default Payment;
