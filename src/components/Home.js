import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import vlogo from './Images/v-logo.jpg';
// import SIgn_img from './SIgn_img'
import { Navigate, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [error, setError] = useState({
    status: false,
    msg: '',
    type: '',
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(document.getElementById('e.currentTarget'));
    const actualData = {
      name: data.get('name'),
      password: data.get('password'),
    };
    if (actualData.name && actualData.password) {
      console.log(actualData);

      document.getElementById('login-form').reset();
      setError({ status: true, msg: 'Login Success', type: 'success' });
      navigate('/clientmaster');
    } else {
      setError({ status: true, msg: 'All Fields are Required', type: 'error' });
    }
  };

  const handlebutton = () => {
    navigate('/clientmaster')
  }


const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const [allEntry, setAllEntry] = useState([]);


// const handleSubmit2 = (e) => {
//   e.preventDefault();

//   const newEntry = { name: username, password: password};
//   setAllEntry([...allEntry, newEntry]);
//   console.log(allEntry);

  
// }





  
  return (
    <>



      <div className="home">
        <div className="section-1">
          <div className="left_data mt-3 p-3" style={{ width: '100%' }}>
            <div className="vlogo">
              <img src={vlogo} />
            </div>

            <h3 className="text-center col-lg-6">Welcome</h3>
            <p>Enter your Username and Password</p>
            <div className="login-form">
              <Form onSubmit={handlebutton}>
                <Form.Group
                  className="mb-3 col-lg-10"
                  controlId="formBasicname"
                >
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Username"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-lg-10"
                  controlId="formBasicPassword"
                >
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button
                  variant="default"
                  className="col-lg-10"
                  // onClick={handlebutton}
                  style={{ background: 'blue', color: 'white' }}
                  type="submit"
                >
                  Login
                </Button>
                <p style={{ marginLeft: '220px' }}>Forgot Password?</p>
              </Form>
            </div>

            <div className="footer">
              <div className="d-flex">
                <p>Terms of Use</p>
                <span style={{ marginLeft: '20px' }}>Privacy Policy</span>
              </div>

              <p>© Punctualiti 2022. All rights reserved</p>
            </div>

            {/* <p className='mt-3'>Already Have an Account <span>SignIn</span> </p> */}
          </div>
          {/* <SIgn_img /> */}
        </div>

        <div className="section-2">
          <div className="rect-bar"></div>
          <p className="rect-bar-title">360° Solution for Asset Management</p>
          <p className="rect-bar-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
