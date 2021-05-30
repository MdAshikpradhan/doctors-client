import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '123w',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '123w3',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:50 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        _id: '123w4r',
        id: 3,
        subject: 'Teeth Protection',
        visitingHour: '5:00 AM - 7:00 AM',
        totalSpace: 10
    },
    {
        _id: '123w6',
        id: 4,
        subject: 'Teeth Cleaning',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: '123wfd',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: '123wfd3',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '12:00 PM - 12:45 PM',
        totalSpace: 10
    },
]

const BookAppointment = ({date}) => {
    return (
        <section className="container text-center">
            <h2 className="text-brand text-center">Available Appointments on {date.toDateString()}</h2>
            <div className="row mt-5">
                {
                    bookingData.map(booking => <BookingCard date={date} booking={booking} key={booking.id}/>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;