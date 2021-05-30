import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Doctor from '../Doctor/Doctor';
import doctor from '../../../images/doctor.png';
const DoctorsData = [
    {
        name : 'Dr. Erdwad',
        icon: faPhone,
        doctorImg: doctor,
        phone: '+693-198-934709'
    },
    {
        name : 'Dr. Erdwad',
        icon: faPhone,
        doctorImg: doctor,
        phone: '+693-198-934709'
    },
    {
        name : 'Dr. Erdwad',
        icon: faPhone,
        doctorImg: doctor,
        phone: '+693-198-934709'
    }
]

const Doctors = () => {
    return (
        <section>
            <h5 className="text-center mt-5 pt-5 text-primary">Our Doctors</h5>
            <div className="container">
                <div className="row mt-5 mb-5">
                    {
                        DoctorsData.map(doctor => <Doctor doctor={doctor}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;