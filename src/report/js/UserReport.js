import React, { useEffect, useState } from "react";

import '../css/report.css';
import { useDispatch, useSelector } from "react-redux";
import { loadUserData } from "../../redux/action";

//jQuery libraries
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
const UserReport = () => {
  const [userData, setUserData] = useState();
  const { loadUser } = useSelector((state) => state.cartreducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserData());
    
      $(document).ready(function () {
         setTimeout( ()=> {
          $("#responseReport").DataTable();
        }, process.env.REACT_APP_LOAD);
      });
    
   

  }, [dispatch]);
  return (
    <div className="MainDiv report">
      <div className="jumbotron text-center mt-2">
        <h3>User Report</h3>
      </div>
 
      <div className="p-3">
        <table id="responseReport" className="table table-hover table-bordered">
          <thead className="thead">
            <tr>
              <th>UserID</th>
              <th>Name</th>
              <th>Dob</th>
              <th>Sex</th>
              <th>Mobile</th>
              <th>GovtIssueID/GovtIdNo</th>
              <th>GuardianDetail</th>
              <th>Email</th>
              <th>EmergencyContact</th>
              <th>Address</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Occupation</th>
              <th>Religion</th>
              <th>MarritalStatus</th>
              <th>BloodGroup</th>
              <th>Nationality</th>
         </tr>
          </thead>
          <tbody>
            {
            Object.keys(loadUser).map((id) => {
              return (
                <tr key={id}>
                  <td className="tdata">{loadUser[id].userid}</td>
                  <td className="tdata">{loadUser[id].name}</td>
                  <td className="tdata">{loadUser[id].dob}</td>
                  <td className="tdata">{loadUser[id].gender}</td>
                  <td className="tdata">{loadUser[id].mb_no}</td>
                  <td className="tdata">{loadUser[id].selectedGovtId}/{loadUser[id].enterGovtId}</td>
                  <td className="tdata">{loadUser[id].guard_Name_Pre}/{loadUser[id].guard_Name}</td>
                  <td className="tdata">{loadUser[id].email}</td>
                  <td className="tdata">{loadUser[id].emg_Contact_No}</td>
                  <td className="tdata">{loadUser[id].address}</td>
                  <td className="tdata">{loadUser[id].country}</td>
                  <td className="tdata">{loadUser[id].state_Name}</td>
                  <td className="tdata">{loadUser[id].city_Name}</td>
                  <td className="tdata">{loadUser[id].pincode}</td>
                  <td className="tdata">{loadUser[id].occupation}</td>
                  <td className="tdata">{loadUser[id].religion}</td>
                  <td className="tdata">{loadUser[id].marital_Status}</td>
                  <td className="tdata">{loadUser[id].blood_Group}</td>
                  <td className="tdata">{loadUser[id].nationality}</td>
                </tr>
              );
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserReport;
