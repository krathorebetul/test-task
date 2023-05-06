import * as yup from "yup";
let check="";
export const schema = yup.object().shape({
    name: yup.string().max(32).required(),
    dob: yup.string().required(),
    gender: yup.string().required(),
    enterGovtId: check===process.env.REACT_APP_ID_TYPE ?yup.number().required():yup.string().required(),
  });
export const SchemaDetail=({idSel})=>{
    check=idSel
}
  