import React from 'react';
import ReactPaginate from 'react-paginate';
import { Dropdown } from 'react-bootstrap';
import { MdMoreVert } from 'react-icons/md';
import infosys from '../Images/infosys.webp';
import accenture from '../Images/accenture.avif';
import capgemini from '../Images/capgemini.jpg';
import larsen from '../Images/larsen.jpg';
import lodha from '../Images/lodha.png';
import mphasis from '../Images/mphasis.png';
import redigton from '../Images/redigton.png';
import tcs from '../Images/tcs.jpg';
import wipro from '../Images/wipro.png';
import hcl from '../Images/hcl.png';

import './ViewClient.css';

function ViewClient() {
  return (
    <div className="view-client">
      <div className="view-text">
        <h4>View Clients</h4>Client Master
        <span> / View Clients</span>
      </div>
      <div className="view-bar">
        <div className="searchbar">
          <input id="search" type="text" placeholder="Search "></input>{' '}
        </div>

        <div className="buttons">
          <button
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ border: 'none', borderRadius: '2px' }}
          >
            Columns
          </button>
          <button className="export">Export</button>
        </div>
      </div>

      <div className="view-client-table">
        <div className="table-responsive">
          <table className="table  text-center">
            <thead>
              <tr>
                <th scope="col"> Company Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone No</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Faciliator</th>
                <th scope="col">Sites</th>
                <th scope="col">Tenants</th>
                <th scope="col">Tenants Group</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={infosys}
                    alt=""
                  />{' '}
                  Infosys
                </td>{' '}
                <td>management@infosys.com</td>
                <td>+91 9563214587</td>
                <td>Vijayent Roy</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={wipro}
                    alt=""
                  />{' '}
                  Wipro
                </td>{' '}
                <td>management@Wipro.com</td>
                <td>+91 9834687423</td>
                <td>Kalpit Soni</td>
                <td>--</td>
                <td>8</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={accenture}
                    alt=""
                  />{' '}
                  Accenture
                </td>{' '}
                <td>management@accenture.com</td>
                <td>+91 8732654789</td>
                <td>Drishti Sane</td>
                <td>--</td>
                <td>4</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={capgemini}
                    alt=""
                  />{' '}
                  capgemini
                </td>{' '}
                <td>management@capgemini.com</td>
                <td>+91 9563214587</td>
                <td>Vijayent Roy</td>
                <td>--</td>
                <td>6</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={lodha}
                    alt=""
                  />{' '}
                  Lodha
                </td>{' '}
                <td>management@Lodha.com</td>
                <td>+91 9642357894</td>
                <td>Kanika Khare</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={tcs}
                    alt=""
                  />{' '}
                  TCS
                </td>{' '}
                <td>management@tcs.com</td>
                <td>+91 9563214587</td>
                <td>Prabhat Rao</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={hcl}
                    alt=""
                  />{' '}
                  HCL
                </td>{' '}
                <td>management@hcl.com</td>
                <td>+91 9563214587</td>
                <td>Venkat Pant</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={redigton}
                    alt=""
                  />{' '}
                  Redigton
                </td>{' '}
                <td>management@redigton.com</td>
                <td>+91 9563214587</td>
                <td>Samir Yadav</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={mphasis}
                    alt=""
                  />{' '}
                  Mphasis
                </td>{' '}
                <td>management@mphasis.com</td>
                <td>+91 9874621547</td>
                <td>Shweta Chawla</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>

              <tr>
                <td>
                  {' '}
                  <img
                    className="rounded-circle m-0 "
                    style={{ height: '30px' }}
                    src={larsen}
                    alt=""
                  />{' '}
                  Larsen & Toubro
                </td>{' '}
                <td>management@larsentoubro.com</td>
                <td>+91 9547154964</td>
                <td>Abhishek Kumar</td>
                <td>--</td>
                <td>12</td>
                <td>--</td>
                <td>--</td>
                <td className="pl-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      as="span"
                      className="cursor-pointer toggle-hidden"
                    >
                      <MdMoreVert size={18}></MdMoreVert>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;View Details
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Edit
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Block Access
                      </Dropdown.Item>{' '}
                      <Dropdown.Item eventKey="1">
                        <span>
                          <i className="i-Check" />
                        </span>
                        &nbsp;Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="col-lg-4 col-md-4 col-sm-12 mb-4"
          style={{ backgroundColor: 'white', width: '100%', height: '50px' }}
        >
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={5}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>{' '}
      </div>
    </div>
  );
}

export default ViewClient;
