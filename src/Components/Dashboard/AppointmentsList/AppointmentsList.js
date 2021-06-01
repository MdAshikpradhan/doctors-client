import React from 'react';

const AppointmentsList = ({appointments}) => {
    return (
        <div>
            <table className="text-center">
                <tbody>
                    <thead>
                        <tr>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Phone</th>
                            <th className="text-secondary" scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                appointments.map((appointment, index) => 
                                <tr>
                                    <td className="p-2">{appointment.name}</td>
                                    <td className="p-2">{appointment.phone}</td>
                                    <td className="p-2">{appointment.email}</td>
                                </tr>
                                )
                            }
                    </tbody>
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsList;