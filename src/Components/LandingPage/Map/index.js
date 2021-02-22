import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
const compost_data = require('../food_scrap_drop_off_locations_in_nyc');
const market_data = require('../dohmh_farmers_markets');
const garden_data = require('../nyc_greenthumb_community_gardens');

const containerStyle = {
    width: '90vw',
    height: '70vh',
    margin: '50px'
};

const center = {
    // lat: 40.809600830078125,
    // lng: -73.918701171875
    lng: -73.9934,
    lat: 40.7505
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
        // const bounds = new window.google.maps.LatLngBounds();
        // map.fitBounds(bounds);
        setMap(map)
    }, [])
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const compostIcon = {
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1613945753/Compost_Icon_pawmpw.png',
        scaledSize: { width: 20, height: 20 }
    }
    const marketIcon = {
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1613945750/Farmers_Market_Icon_lsuvxi.png',
        scaledSize: { width: 20, height: 20 }
    }
    const gardenIcon = {
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1613945741/Community_Garden_Icon_nrp6iw.png',
        scaledSize: { width: 20, height: 20 }
    }
    console.log('map', map);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lng: -73.9934, lat: 40.7505 }}
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
                market_data.data.map((item) => {
                    return (
                        <Marker 
                            key={item.index} 
                            position={{lat: item.latitude, lng: item.longitude}}
                            icon={marketIcon} 
                            onClick={() => onSelect(item)}
                        />
                    )
                })
            }
            {
                garden_data.data.map((item) => {
                    return (
                        <Marker 
                            key={item.index} 
                            position={{lat: item.latitude, lng: item.longitude}}
                            icon={gardenIcon} 
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
                    {
                        selected.food_scrap_drop_off_site ? (
                            <div>
                                <p>Compost Drop-Off Site</p>
                                <p>{selected.food_scrap_drop_off_site}</p>
                                <p>Seasonal Availability: {selected.open_months}</p>
                                <p>Open on: {selected.operation_day} | Hours: {selected.hours_to} - {selected.hours_from}</p>
                                <div>
                                    {
                                        selected.website.map((link, index) => {
                                            return (
                                                <a key={index} href={link}>{link}</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : <></>
                    }
                    {
                        selected.marketname ? (
                            <div>
                                <p>Farmer's Market</p>
                                <p>{selected.marketname}</p>
                                <p>Address: {selected.streetaddress}</p>
                                <p>Seasonal Availability: {selected.seasondates}</p>
                                <p>Open on: {selected.daysoperation} | Hours: {selected.hoursoperations}</p>
                            </div>
                        ) : <></>
                    }
                    {
                        selected.garden_name ? (
                            <div>
                                <p>Community Garden</p>
                                <p>{selected.garden_name}</p>
                                <p>Address: {selected.address}</p>
                                {/* <p>Seasonal Availability: {selected.seasondates}</p> */}
                                {/* <p>Open on: {selected.daysoperation} | Hours: {selected.hoursoperations}</p> */}
                            </div>
                        ) : <></>
                    }
                    



                    {/* {
                        selected.website ? 
                        (
                            <p>{selected.website}</p>
                        ) : <p>No Website Available</p>
                    } */}
                    
                </div>
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