import React, { useState, useEffect } from 'react';

const LoadingModal = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 12000);
        return () => clearTimeout(timer);
    }, []);

    return (
        show && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <p>Please note that this application is hosted on a free platform. The server may go into a sleep state during inactivity, causing a delay of up to 50 seconds for the first request.</p>
                <button onClick={handleClose}>Close</button>
                </div>
            </div>
        )
    );
};

export default LoadingModal;
