const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let dbConnectionStatus = 'Not connected';

// MySQL connection
const db = mysql.createConnection({
    host: 'teralab.my.id',
    user: 'terj2475_ale',
    password: 'GJ+gQlQj$xGt',
    database: 'terj2475_event_scheduler'
});

db.connect(err => {
    if (err) {
        dbConnectionStatus = 'Failed to connect to MySQL';
        console.error('Failed to connect to MySQL:', err);
    } else {
        dbConnectionStatus = 'Connected to MySQL';
        console.log('Connected to MySQL');
    }
});

app.get('/', (req, res) => {
    res.send(`<p>${dbConnectionStatus}</p>`);
});

// Get all events
app.get('/events', (req, res) => {
    db.query('SELECT * FROM events ORDER BY event_date, event_time', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add new event
app.post('/events', (req, res) => {
    const { name, description, event_date, event_time } = req.body;
    const sql = 'INSERT INTO events (name, description, event_date, event_time) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, description, event_date, event_time], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, name, description, event_date, event_time });
    });
});

// Delete an event
app.delete('/events/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM events WHERE id = ?';
    db.query(sql, [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Event deleted' });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;