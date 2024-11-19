import React from 'react';

const FlightListing = ({ flights }) => {
    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Flight Listings</h2>
            {flights.length === 0 ? (
                <p>No flights available.</p>
            ) : (
                <div style={styles.list}>
                    {flights.map((flight, index) => (
                        <div key={index} style={styles.card}>
                            <h3 style={styles.flightTitle}>{flight.airline}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                gap: '10px'
                            }}>
                                <p>Flight Number: {flight.flightNumber}</p>
                                <p>Departure: {flight.departure}</p>
                                <p>Arrival: {flight.arrival}</p>
                                <p>Price: {flight.price}</p>
                                <button style={styles.button}>Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        width: '80%',
        margin: '0 auto',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    list: {
        display: 'grid',
        width: '100%',

    },
    card: {
        backgroundColor: '#ede7f6',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
    flightTitle: {
        margin: '0 0 10px 0',
    },
    button: {
        marginTop: '10px',
        padding: '10px 15px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default FlightListing;
