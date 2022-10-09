import React from 'react';
import { Button } from 'react-bootstrap';
import dailytasks from '../Images/dailytasks.png';
import './DailyTasks.css';

function DailyTasks() {
  return (
    <div className="daily-tasks">
      <div className="card">
        <div className="dt-nav">
          <div className="dt-top">
            <div>
              <img src={dailytasks} />
            </div>
            <div className="tasks-text">
              <h4>Daily Tasks</h4>
              <span>Select the sub modules that the client can use.</span>
            </div>
          </div>

          <div>
            <Button className="mx-1" variant="primary">
              Visible to Client
            </Button>
          </div>
        </div>

        <div className="d-body">
          <input type="checkbox" />
          Show All Sub Modules
          <span className="checkmark"></span>
          <br />
          <input type="checkbox" />
          <span>Summary</span>
          <span className="checkmark"></span>
          <br />
          <input type="checkbox" />
          <span>View Tasks</span>
          <span className="checkmark"></span>
          <br />
          <input type="checkbox" />
          <span>Create New Task</span>
          <span className="checkmark"></span>
          <br />
          <input type="checkbox" />
          <span>Logbook</span>
          <span className="checkmark"></span>
          <br />
          <input type="checkbox" />
          <span>Logsheet</span>
          <span className="checkmark"></span>
          <div className="sub-checkbox">
            <input type="checkbox" />
            <span>Daily</span>
            <span className="checkmark"></span>
            <br />
            <input type="checkbox" />
            <span>Actively Wise</span>
            <span className="checkmark"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyTasks;
