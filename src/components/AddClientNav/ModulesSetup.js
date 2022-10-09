import React from 'react';
import { Tab, Nav, Button } from 'react-bootstrap';
import DailyTasks from './DailyTasks';

import './ModuleSetup.css';

function ModulesSetup() {
  return (
    <div className="module-setup">
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="fourth">
          <div className="row">
            <div className="col-lg-2">
              <Nav variant="pills" className="d-flex flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {' '}
                    <input type="checkbox" checked/>
                    Home / Dashboard
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">
                    {' '}
                    <input type="checkbox" checked/>
                    Helpdesk
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    {' '}
                    <input type="checkbox" checked/>
                    Assets
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    {' '}
                    <input type="checkbox" checked/>
                    Daily Tasks
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    {' '}
                    <input type="checkbox" />
                    PPM
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    {' '}
                    <input type="checkbox" checked/>
                    Employees
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                    {' '}
                    <input type="checkbox" checked/>
                    Profile
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eighth">
                    {' '}
                    <input type="checkbox" checked/>
                    Transactions
                    <span className="checkmark"></span>

                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="col-md-10">
              <Tab.Content className="p-0">
                <Tab.Pane eventKey="first"></Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
                <Tab.Pane eventKey="fourth">{<DailyTasks />}</Tab.Pane>
                <Tab.Pane eventKey="fifth"> </Tab.Pane>
                <Tab.Pane eventKey="sixth"></Tab.Pane>
                <Tab.Pane eventKey="seventh"></Tab.Pane>
                <Tab.Pane eventKey="eighth"></Tab.Pane>

              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
      <div className='module-button'>
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

export default ModulesSetup;
