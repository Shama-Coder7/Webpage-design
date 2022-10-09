import React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import ModulesSetup from '../AddClientNav/ModulesSetup';
import Payment from '../AddClientNav/Payment';
import Profile from '../AddClientNav/Profile';
import ThemeSetup from '../AddClientNav/ThemeSetup';
import { Link } from "react-router-dom";

import './AddClient.css';

function AddClient() {
  return (
    <div className="add-client">
      <div className="master-1">
        <h4>Company name</h4>
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <input id="searchbar" type="text" placeholder="Search modules"></input>
        <div>
          <h5 id="cm">CLIENT MASTER</h5>
          <Link to="/clientmaster"><button id="view-client">View Clients</button></Link>
          <button id="add-client">Add Client</button>
        </div>
      </div>

      <div className="add-head">
        {' '}
        <div className="add-right-section">
          <h4>Add Client</h4>
          Client Master
          <span> / Add Client</span>
          {/* <span> / Create Profile </span> */}
        </div>
        <div className="add-client-section">
          <div className="add-client-nav">
            <div className="row">
              <div className="col-lg-12">
                <Tab.Container id="left-tabs" defaultActiveKey="first">
                  <div className="row">
                    <Nav
                      variant="pills"
                      className="d-flex"
                      style={{ justifyContent: 'space-evenly' }}
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first"> 01 CREATE PROFILE</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="second"> 02 PAYMENT SETUP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third"> 03 THEME SETUP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth"> 04 MODULES SETUP</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <div className="col-md-10">
                      <Tab.Content className="p-0">
                        <Tab.Pane eventKey="first">{<Profile />}</Tab.Pane>
                        <Tab.Pane eventKey="second">{<Payment />}</Tab.Pane>
                        <Tab.Pane eventKey="third">{<ThemeSetup />}</Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          {' '}
                          {<ModulesSetup />}
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClient;
