import React, { memo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  cityData, countryData, govId, initData, nationalityData, stateData } from "../component/DataInit";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { dataAction } from "../redux/action";
import { useEffect } from "react";
import { schema } from "../schema/SchemaDetail";
import { SchemaDetail } from "../schema/SchemaDetail";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
let sizeVal1 = process.env.REACT_APP_ID_TYPE_PLN;

const PersonalForm = () => {
  //////////state declaration///////////////////

  const [pfData, setPfData] = useState(initData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const navigate=useNavigate();
  /////////////initialization of state component////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPfData({ ...pfData, [name]: value });
  };

  useEffect(() => {
    if (pfData.selectedGovtId) {
      setPfData({ ...pfData, [govId]: "" });
      if (pfData.selectedGovtId === process.env.REACT_APP_ID_TYPE) {
        sizeVal1 = process.env.REACT_APP_ID_TYPE_ALN;
      } else {
        sizeVal1 = process.env.REACT_APP_ID_TYPE_PLN;
      }
    }
  }, [pfData.selectedGovtId]);

  const onSubmit = (data) => {
    dispatch(dataAction(pfData));
    navigate("/report");
    reset();
  };

  const mobileNoLoad = (name, value) => {
    setPfData({ ...pfData, [name]: value });
  };
  const { enterGovtId } = pfData;
  return (
    <div className="p-3">
      <div
        style={{ border: "2px double grey", backgroundColor: "#E5E4E2" }}
        className="shadow-md p-3 mb-5 rounded"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="text-decoration-underline">Personal Details</h6>
          <div className="row">
            <div className="col-sm-5 d-flex justify-content-between">
              <label>
                Name<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <input
                {...register("name")}
                style={{
                  height: "28px",
                  width: "430px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                onChange={handleChange}
                placeholder="Enter Name"
              />
              <p className="text-danger">{errors.name?.message}</p>
            </div>
            <div className="col-sm-4 mt-2 d-flex justify-content-between">
              <label>
                Date of Birth or Age
                <span style={{ color: "#ff0000" }}>*</span>
              </label>
              <input
                style={{
                  height: "28px",
                  width: "300px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="date"
                {...register("dob")}
                onChange={handleChange}
                placeholder="Enter DOB"
              />
              <div>
                <p className="text-danger">{errors.dob?.message}</p>
              </div>
            </div>
            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>
                Sex<span style={{ color: "#ff0000" }}>*</span>
              </label>
              <select
                {...register("gender")}
                style={{
                  height: "28px",
                  width: "250px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                onChange={handleChange}
              >
                <option value="">Select Sex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <div>
                <p className="text-danger">{errors.gender?.message}</p>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="container col-sm-5 mt-2 row">
              <div className=" container col-sm-3 mt-2 d-flex w-100">
                <label style={{ marginRight: "10px" }}>Mobile</label>

                <PhoneInput
                  country={"in"}
                  style={{ overflow: "hidden" }}
                  onChange={(mb_no) => mobileNoLoad("mb_no", mb_no)}
                />
              </div>
              <div className="container col-sm-2 mt-2 w-100">
                <p className="text-danger">{errors.mb_no?.message}</p>
              </div>
            </div>
            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>Govt Issued Id</label>
              <select
                style={{
                  height: "28px",
                  width: "170px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="selectedGovtId"
                onChange={handleChange}
              >
                <option>ID Type</option>
                <option>AadharCard</option>
                <option>PanCard</option>
              </select>
              <SchemaDetail idSel={pfData.selectedGovtId} />
            </div>
            <div className="col-sm-4 mt-2 d-flex">
              <input
                {...register("enterGovtId")}
                style={{
                  height: "28px",
                  width: "430px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                value={enterGovtId || ""}
                maxLength={sizeVal1}
                onChange={handleChange}
                placeholder="Enter Govt ID"
              />
            </div>
          </div>

          <div className="row mt-2">
            <h6 className="text-decoration-underline">Contact Details</h6>
            <div className="col-sm-5 d-flex justify-content-between">
              <label>Guardian Name</label>
              <select
                style={{
                  height: "28px",
                  width: "150px",
                  borderRadius: "5px",
                  border: "1px solid grey",
                }}
                name="guard_Name_Pre"
                onChange={handleChange}
              >
                <option>Enter Label</option>
                <option>Mr.</option>
                <option>Miss.</option>
              </select>
              <input
                className="w-75"
                style={{
                  height: "28px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                name="guard_Name"
                onChange={handleChange}
                placeholder="Enter Guardian Name"
              />
            </div>

            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>Email</label>
              <input
                style={{
                  height: "28px",
                  width: "250px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter Email"
              />
            </div>

            <div className="col-sm-4 mt-2 d-flex justify-content-evenly">
              <label>Emergency Contact Number</label>
              <input
                style={{
                  height: "28px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                name="emg_Contact_No"
                onChange={handleChange}
                placeholder="Enter Emergency Number"
              />
            </div>
          </div>

          <div className="row mt-2">
            <h6 className="text-decoration-underline">Address Details</h6>
            <div className="col-sm-5 d-flex justify-content-between">
              <label>Address</label>
              <input
                style={{
                  height: "28px",
                  width: "430px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                name="address"
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </div>

            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>State</label>
              <select
                style={{
                  height: "28px",
                  width: "250px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="state_Name"
                onChange={handleChange}
              >
                <option>Enter State</option>
                {
                Object.keys(stateData).map(([key])=>(           
                    <option key={key}>{stateData[key].state_Name}</option>       
                ))
               }
              </select>
            </div>

            <div className="col-sm-4 mt-2 d-flex justify-content-between">
              <label>City</label>
              <select
                style={{
                  height: "28px",
                  width: "350px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="city_Name"
                onChange={handleChange}
              >
                <option>Enter City/Town/Village</option>
                {
                Object.keys(cityData).map(([key])=>(           
                    <option key={key}>{cityData[key].city_Name}</option>       
                ))
               }
              </select>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-sm-5  d-flex justify-content-between">
              <label>Country</label>
              <select
                style={{
                  height: "28px",
                  width: "350px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  marginRight: "80px",
                }}
                name="country"
                onChange={handleChange}
              >
                <option>Select Country</option>
                {
                Object.keys(countryData).map(([key])=>(           
                    <option key={key}>{countryData[key].country_Name}</option>       
                ))
               }
              </select>
            </div>

            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>Pincode</label>
              <input
                style={{
                  height: "28px",
                  width: "220px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                name="pincode"
                onChange={handleChange}
                placeholder="Enter Pincode"
              />
            </div>
          </div>

          <div className="row mt-2">
            <h6 className="text-decoration-underline">Other Details</h6>
            <div className="col-sm-3 d-flex justify-content-between">
              <label>Occupation</label>
              <input
                style={{
                  height: "28px",
                  width: "210px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                type="text"
                className="form-control"
                name="occupation"
                onChange={handleChange}
                placeholder="Enter Occupation"
              />
            </div>

            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>Religion</label>
              <select
                style={{
                  height: "28px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="religion"
                onChange={handleChange}
              >
                <option>Enter Religion</option>
                <option>Hindu</option>
                <option>Sikh</option>
              </select>
            </div>

            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>Marital Status</label>
              <select
                style={{
                  height: "28px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="marital_Status"
                onChange={handleChange}
              >
                <option>Marital Status</option>
                <option>married</option>
                <option>unmarried</option>
              </select>
            </div>

            <div className="col-sm-3 mt-2 d-flex justify-content-between">
              <label>Blood Group</label>
              <select
                style={{
                  height: "28px",
                  width: "200px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="blood_Group"
                onChange={handleChange}
              >
                <option>Group</option>
                <option>A+</option>
                <option>B+</option>
              </select>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-sm-3 d-flex justify-content-between">
              <label>Nationality</label>
              <select
                style={{
                  height: "28px",
                  width: "210px",
                  border: "1px solid grey",
                  borderRadius: "5px",
                }}
                name="nationality"
                onChange={handleChange}
              >
                <option>Select Nationality</option>
               {
                Object.keys(nationalityData).map(([key])=>(           
                    <option key={key}>{nationalityData[key].nationality}</option>       
                ))
               }
              </select>
            </div>
          </div>

          <div className="text-end">
            <div className="p-2">
              <button className="btn btn-outline-danger m-4">
                Cancel
                <br />
                <small>(ESC)</small>
              </button>
              <button className="btn btn-success m-4" type="submit">
                Submit
                <br />
                <small>(# S)</small>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default memo(PersonalForm);
