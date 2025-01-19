import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Modal, Button } from 'react-bootstrap';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import SplashScreen from './components/SplashScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [events, setEvents] = useState([]);
    const [form, setForm] = useState({ name: '', description: '', event_date: '', event_time: '' });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        axios.get('https://backend-kenedy.vercel.app/events')
        // axios.get('http://localhost:5000/events')
            .then(res => setEvents(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://backend-kenedy.vercel.app/events', form)
            .then(res => {
                setEvents([...events, res.data]);
                setForm({ name: '', description: '', event_date: '', event_time: '' });
                setModalMessage('Acara berhasil ditambahkan!');
                setShowModal(true);
            })
            .catch(err => console.error(err));
    };

    const handleDelete = (id) => {
        axios.delete(`https://backend-kenedy.vercel.app/events/${id}`)
        // axios.delete(`http://localhost:5000/events/${id}`)
            .then(() => {
                setEvents(events.filter(event => event.id !== id));
                setModalMessage('Acara berhasil dihapus!');
                setShowModal(true);
            })
            .catch(err => console.error(err));
    };

    if (showSplash) {
        return <SplashScreen setShowSplash={setShowSplash} />;
    }

    return (
        <>
            <NavbarComponent />
            <Container className="mt-5">
                <h1>Penjadwal Acara</h1>
                <EventForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
                <EventList events={events} handleDelete={handleDelete} />
            </Container>
            <FooterComponent />
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Informasi</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default App;