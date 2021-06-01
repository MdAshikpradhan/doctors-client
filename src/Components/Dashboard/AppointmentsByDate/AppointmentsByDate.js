import React from 'react';
import AppointmentsList from '../AppointmentsList/AppointmentsList';

const AppointmentsByDate = ({appointments}) => {
    return (
        <div>
            {appointments.length? <AppointmentsList appointments={appointments}/>
            :
            <div className="text-center text-danger">
                <h4>There is no Appointments!</h4>
            </div>
            }
        </div>
    );
};

export default AppointmentsByDate;