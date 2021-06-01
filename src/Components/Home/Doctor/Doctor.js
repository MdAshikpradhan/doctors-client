import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Doctor = ({doctor}) => {
    return ( 
        <div className="col-md-4 text-center">
            <div className="">
                <div>
                    {
                        doctor.image ? <img style={{height: '200px'}} src={`data:image/jng;base64,${doctor.image.img}`} />
                        : 
                        <img style={{height: '200px'}} src={`http://localhost:5000/${doctor.img}`} alt="" />
                    }
                </div>
                <h5 className="mt-4">{doctor.name}</h5>
                <div className="d-flex justify-content-center">
                    <p><FontAwesomeIcon className="text-primary" icon={faPhone} /> +880-188-934789</p>
                    <p className="ms-2">{doctor.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;