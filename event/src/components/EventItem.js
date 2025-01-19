import React from 'react';
import { Button, Card } from 'react-bootstrap';

const EventItem = ({ event, handleDelete }) => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Card.Text>{event.event_date} pada {event.event_time}</Card.Text>
                <Button variant="danger" onClick={() => handleDelete(event.id)}>Hapus</Button>
            </Card.Body>
        </Card>
    );
};

export default EventItem;