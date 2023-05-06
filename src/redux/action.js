
 import {push,ref,onValue} from 'firebase/database';
 import {database} from '../component/firebase';
import {SUBMIT_USER_DATA,LOAD_USER_DATA} from './actionTypes';
import shortid from 'shortid';


///////////////////////////////////////////////
export const dataAction = (userData) =>
{
    userData.userid=shortid.generate();
    return async dispatch => {
        try {
          const res = await fetch(`${process.env.REACT_APP_DBAPI}/user_table.json`, {
            method: "POST",
            headers: {
                      "Content-Type": "application/json",
                    },
             body: JSON.stringify(userData),
          });
         
          if(res)
          {
            dispatch ({
                            type:SUBMIT_USER_DATA,
                            payload:userData
                           }) 
          }
          else{
            alert("not inserted");
          }
              
              
      }
     catch(error)
    {
        console.log(error)
    } 
  }
    }
 /////////////////////////user data///////////////////////////////////
    

export const loadUserData=()=>{
 
 return async dispatch => {
      try {
    onValue(ref(database, `user_table`), (snapshot) => {
              if (snapshot.exists()) {
                  dispatch ({
                      type:LOAD_USER_DATA,
                      payload:snapshot.val()
                  })                  
              } else {
                console.log("No data available");
              }
            })

         
            
    }
   catch(error)
  {
      console.log(error)
  } }
}