import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events, handleDelete }) => {
    return (
        <div>
            <h2>Acara Mendatang</h2>
            {events.length > 0 ? (
                events.map(event => (
                    <EventItem key={event.id} event={event} handleDelete={handleDelete} />
                ))
            ) : (
                <p>Belum ada acara terdekat</p>
            )}
        </div>
    );
};

export default EventList;