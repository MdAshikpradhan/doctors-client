import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctor = ({doctor}) => {
    return ( 
        <div className="col-md-4 text-center">
            <div className="">
                <div>
                    <img className="w-75" src={doctor.doctorImg} alt="" />
                </div>
                <h5 className="mt-4">{doctor.name}</h5>
                <div className="d-flex justify-content-center">
                    <FontAwesomeIcon className="text-primary" icon={doctor.icon}/>
                    <p className="ms-2">{doctor.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;