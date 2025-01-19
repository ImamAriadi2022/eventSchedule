import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './SplashScreen.css'; // Import the CSS file

const SplashScreen = ({ setShowSplash }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setShowSplash(false);
            }, 1000); // Match the duration of the fade-out animation
        }, 3000); // Display splash screen for 3 seconds

        return () => clearTimeout(timer);
    }, [setShowSplash]);

    return (
        <div className={`splash-screen d-flex justify-content-center align-items-center ${fadeOut ? 'fade-out' : ''}`}>
            <Container className="text-center">
                <h1>Selamat Datang di Website Management Acara</h1>
                <p>Developed by Kennedy Ale</p>
            </Container>
        </div>
    );
};

export default SplashScreen;