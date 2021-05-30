import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" />
                    </div>
                    <div className="col-md-7 text-light py-5">
                        <div className="text-white text-uppercase">
                            <h5 className="text-primary">APPOINTMENT</h5>
                            <h1 className="mt-4">Make an Appointment</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente vitae rem quibusdam consectetur, architecto voluptatum doloribus suscipit veritatis, porro ipsum cumque magnam magni, aliquid minima!</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;