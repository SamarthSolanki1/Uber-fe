import React, { useState, useEffect } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);

    useEffect(() => {
        // Get initial location
        const updatePosition = (position) => {
            const { latitude, longitude } = position.coords;
            console.log('Position updated:', latitude, longitude);
            setCurrentPosition({ lat: latitude, lng: longitude });
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(updatePosition, console.error);
            const watchId = navigator.geolocation.watchPosition(updatePosition, console.error);

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={currentPosition} zoom={15}>
                <gmp-advanced-marker position={`${currentPosition.lat},${currentPosition.lng}`} title="Live Location"></gmp-advanced-marker>
            </GoogleMap>
        </LoadScript>
    );
};

export default LiveTracking;
