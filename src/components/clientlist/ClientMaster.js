import React from 'react';
// import { useNavigate } from 'react-router-dom';
import ViewClient from './ViewClient';
import { Link } from 'react-router-dom';
import './ClientMaster.css';

function ClientMaster() {
  // const navigate = useNavigate;


  return (
    <div className="master">
      <div className="master-1">
        <h4>Company name</h4>
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <input id="searchbar" type="text" placeholder="Search modules"></input>
        <div>
          <h5 id="cm">CLIENT MASTER</h5>
          <button id="view-btn" >View Clients</button>
          <Link to="/addclient">
          <button id="add-btn">Add Client</button>
</Link>
              </div>
      </div>
      <div className="master-2">
        {/* <div className="view-text">
          <h4>View Clients</h4>Client Master
          <span> / View Clients</span>
        </div> */}

        <div className="view-table">
          <ViewClient />
          {/* <AddClient /> */}
        </div>
      </div>
    </div>
  );
}

export default ClientMaster;
