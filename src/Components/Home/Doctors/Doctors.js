import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])

    return (
        <section>
            <h5 className="text-center mt-5 pt-5 text-primary">Our Doctors</h5>
            <div className="container">
                <div className="row mt-5 mb-5">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;