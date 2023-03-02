import React from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/sidebar';
import Navbar from '../components/navbar/navbar';
import Widget from '../components/widget/widget';
import authService from '../services/auth.service';
export default function HomePage(){
    const navigate = useNavigate();
    
    const signOutUser = () => {authService.logout()
        navigate("/login");
    }
    return(
        <div className='home'>

        <Sidebar/>
    
        
            <div className="homeContainer">
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
                </div>
        </div>
    )
}