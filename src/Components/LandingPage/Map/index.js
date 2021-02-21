import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
const compost_data = require('../food_scrap_drop_off_locations_in_nyc')

const containerStyle = {
    width: '500px',
    height: '500px',
    margin: '50px'
};

const center = {
    // lat: 40.809600830078125,
    // lng: -73.918701171875
    lng: -74.0228,
    lat: 40.635473
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = React.useState(null)
    const [ selected, setSelected ] = React.useState(null);

    const onSelect = item => {
        setSelected(item);
    }

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const compostIcon = {
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1613945753/Compost_Icon_pawmpw.png',
        scaledSize: { width: 20, height: 20 }
    }
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {
                compost_data.data.map((item) => {
                    return (
                        <Marker 
                            key={item.index} 
                            position={{lat: item.latitude, lng: item.longitude}}
                            // name="my marker"   
                            icon={compostIcon} 
                            onClick={() => onSelect(item)}
                        />
                    )
                })
            }
            {
            selected ? (
                <InfoWindow
                    position={{lat: selected.latitude, lng: selected.longitude}}
                    clickable={true}
                    onCloseClick={() => setSelected(null)}
                >
                    <div>
                        <p>Compost Drop-Off Location</p>
                        <p>{selected.ntaname}</p>
                        <p>Hours: {selected.hours_to} - {selected.hours_from}</p>
                    </div>
                    {/* {
                        selected.website ? 
                        (
                            <p>{selected.website}</p>
                        ) : <p>No Website Available</p>
                    } */}
                            {/* selected.website.map((link, index) = {
                                return (
                                    <p>{link}</p>
                                )
                            }) */}
                </InfoWindow>
                ) : <></>
            }
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MyComponent);

// return (
    // <div className="Map" style={{ backgroundColor: "lightblue", width: 500, height: 500, margin: 50 }}>
    //     <h1>M A P</h1>
    // </div>
// );