import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
    const navigate = useNavigate();
    
    const handleBreakfast = () =>{
        navigate('/home/breakfast');
    }

    const handleLunch = () =>{
        navigate('/home/lunch');
    }   

    const handleDinner = () =>{
        navigate('/home/dinner');
    }

    return (
        <>
            <div className='search-container'>
                <div className='button-input-container'>
                    <input type="text" placeholder='' className='d-block mx-auto home-input' />
                    <button className='home-search-button rounded-pill'>search</button>
                </div>
            </div>
            <div>
                <button className='btn-style' onClick={handleBreakfast}>Breakfast</button>
                <button className='btn-style' onClick={handleLunch}>Lunch</button>
                <button className='btn-style' onClick={handleDinner}>Dinner</button>
            </div>
            <Outlet></Outlet>
            </>
    );
};

export default Home;