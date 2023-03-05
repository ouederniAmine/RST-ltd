import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar/navbar';
import Widget from '../components/widget/widget';
import Invoicetable from '../components/table/table';

import authService from '../services/auth.service';
export default function HomePage(){
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(false);
    //useEffect to check if user is admin
    useEffect(() => {
      console.log(authService.getCurrentUser());
        checkAdmin();
    }, []);

    //api call to check if user is admin
    const checkAdmin = async () => {
        const response = await fetch(`http://localhost:3001/api/checkadmin/${authService.getCurrentUser().userid}`);
        const data = await response.json();
        console.log(data);
        if (data.isAdmin) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }
    const signOutUser = () => {authService.logout()
        navigate("/login");
    }
    return(
        <div className='home'>

        <Sidebar/>
    
        {
        (!admin) ? (<> <div className="homeContainer">
                <Navbar/>

                <div className='widgets'>
                    <Widget type='CurrentBalanace'/>
                    <Widget type='FundsonHold'/>
                    <Widget type='Withdraw'/>
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>Client Infos</div>
                  
                    <h1 className='text-xl'>Client Name: </h1>
                      <br></br>
                      <h1 className='text-xl'>Company's Name: </h1>
                      <br></br>

                    <h1 className='text-xl'>Date of Birth: </h1>                      <br></br>

                    <h1 className='text-xl'>Country of residence: </h1>                      <br></br>

                    <h1 className='text-xl'>Contact number: </h1>
                </div>
                </div></>):
                 (<> <div className="homeContainer">
                <Navbar/>

                <div className='widgets'>
                    <Widget type='CurrentBalanace'/>
                    <Widget type='FundsonHold'/>
                    <Widget type='Withdraw'/>
                </div>
                <div className='listContainer'>
                    <div className='listTitle'>Latest Clients</div>
                    <Invoicetable></Invoicetable>
                </div>
                </div></>)
}
           
        </div>
    )
}