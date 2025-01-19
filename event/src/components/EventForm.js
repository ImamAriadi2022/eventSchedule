import React from 'react';
import { Form, Button } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';

const EventForm = ({ form, setForm, handleSubmit }) => {
    const handleTimeChange = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = (time % 3600) / 60;
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        setForm({ ...form, event_time: formattedTime });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEventName">
                <Form.Label>Nama Acara</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Masukkan nama acara"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formEventDescription">
                <Form.Label>Deskripsi</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Masukkan deskripsi"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
            </Form.Group>

            <Form.Group controlId="formEventDate">
                <Form.Label>Tanggal Acara</Form.Label>
                <Form.Control
                    type="date"
                    value={form.event_date}
                    onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formEventTime">
                <Form.Label>Waktu Acara</Form.Label>
                <TimePicker
                    start="00:00"
                    end="23:30"
                    step={30}
                    value={form.event_time}
                    onChange={handleTimeChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Tambah Acara
            </Button>
        </Form>
    );
};

export default EventForm;