
export const  initData = {
  userid:"",
    name:"",
    dob:"",
    gender:"",
    mb_no:"",
    selectedGovtId:"",
    enterGovtId:"",
    guard_Name_Pre:"",
    guard_Name:"",
    email:"",
    emg_Contact_No:"",
    address:"",
    state_Name:"",
    city_Name:"",
    country:"",
    pincode:"",
    occupation:"",
    religion:"",
    marital_Status:"",
    blood_Group:"",
    nationality:""
  };
  export let temp=false;
  export const govId=process.env.REACT_APP_ID_GOV_ID;
  
 
  export const nationalityData=[
    {
      key:0,
      nationality:  "Indian"
    },
    {
      key:1,
      nationality:  "British"
    }, 
    {
      key:2,
      nationality:  "French"
    }
  ];
  export const cityData=[
    {
      key:0,
      city_Name:  "Indore"
    },
    {
      key:1,
      city_Name:  "Bhopal"
    }
  ];
  export const countryData=[
    {
      key:0,
      country_Name:  "India"
    },
    {
      key:1,
      country_Name:  "Us"
    },
    {
      key:1,
      country_Name:  "Uk"
    }
  ];
  export const stateData=[
    {
      key:0,
      state_Name:  "MP"
    },
    {
      key:1,
      state_Name:  "UP"
    }
  ]
