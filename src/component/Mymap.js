import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PersonalForm from '../userDetail/PersonalForm';
import UserReport from '../report/js/UserReport';


const Mymap = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PersonalForm/>}/>
                <Route path="/report" element={<UserReport/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Mymap;
