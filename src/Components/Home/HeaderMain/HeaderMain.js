import React from 'react';
import Chair from '../../../images/Chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile Starts Here</h1>
                <p className='text-dark'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum commodi quis nihil totam similique fuga!</p>
                <button className="bg-primary text-light">Get Appointment</button>
            </div>
            <div className="col-md-6">   
                <img src={Chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;