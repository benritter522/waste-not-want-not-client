import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
const compost_data = require('../food_scrap_drop_off_locations_in_nyc');
const market_data = require('../dohmh_farmers_markets');
const garden_data = require('../nyc_greenthumb_community_gardens');

const containerStyle = {
    width: '90vw',
    height: '60vh',
    alignSelf: 'center',
    marginBottom: '50px'
};

const center = {
    lng: -73.9934,
    lat: 40.7505
};

function MyComponent(props) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY
    });

    const [map, setMap] = React.useState(null)
    const [ selected, setSelected ] = React.useState(null);

    const { compostChecked, gardenChecked, marketChecked } = props;

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
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1614007988/Yellow_Compost_Bucket_zrrthq.png',
        scaledSize: { width: 20, height: 20 }
    }
    const marketIcon = {
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1614007951/Red_Apple_snr6c5.png',
        scaledSize: { width: 20, height: 20 }
    }
    const gardenIcon = {
        url: 'https://res.cloudinary.com/lahargoue/image/upload/v1614007947/Green_House_u7vmbt.png',
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
            { compostChecked ?
                (
                    compost_data.data.map((item) => {
                        return (
                            <Marker 
                                key={item.index} 
                                position={{lat: item.latitude, lng: item.longitude}}
                                icon={compostIcon} 
                                onClick={() => onSelect(item)}
                            />
                        )
                    })
                ) : <></>
            }
            { marketChecked ?
                (
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
                ) : <></>
            }
            { gardenChecked ?
                (
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
                ) : <></>
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
                            <div style={{textAlign: 'left'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{fontWeight: '500', fontSize: 16, color: '#323232'}}>Compost Drop-Off Site</p>
                                    <img style={{height: 20}} src="https://res.cloudinary.com/lahargoue/image/upload/v1614007988/Yellow_Compost_Bucket_zrrthq.png" alt=""/>
                                </div>
                                <p style={{fontWeight: '500', fontSize: 16, color: '#323232'}}>{selected.food_scrap_drop_off_site}</p>
                                <p style={{fontWeight: '400', fontSize: 14}}>Seasonal Availability: {selected.open_months}</p>
                                <p style={{fontWeight: '400', fontSize: 14}}>Open on: {selected.operation_day} | Hours: {selected.hours_to} - {selected.hours_from}</p>
                                <div>
                                    {
                                        selected.website.map((link, index) => {
                                            return (
                                                <a style={{fontWeight: '400'}} key={index} href={link}>Visit Website</a>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : <></>
                    }
                    {
                        selected.marketname ? (
                            <div style={{textAlign: 'left'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{fontWeight: '500', fontSize: 16, color: '#323232'}}>Farmer's Market</p>
                                    <img style={{height: 20}} src="https://res.cloudinary.com/lahargoue/image/upload/v1614007951/Red_Apple_snr6c5.png" alt=""/>
                                </div>
                                <p style={{fontWeight: '500', fontSize: 16, color: '#323232'}}>{selected.marketname}</p>
                                <p style={{fontWeight: '400', fontSize: 14}}>Address: {selected.streetaddress}</p>
                                <p style={{fontWeight: '400', fontSize: 14}}>Seasonal Availability: {selected.seasondates}</p>
                                <p style={{fontWeight: '400', fontSize: 14}}>Open on: {selected.daysoperation} | Hours: {selected.hoursoperations}</p>
                            </div>
                        ) : <></>
                    }
                    {
                        selected.garden_name ? (
                            <div style={{textAlign: 'left'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <p style={{fontWeight: '500', fontSize: 16, color: '#323232'}}>Community Garden</p>
                                    <img style={{height: 20}} src="https://res.cloudinary.com/lahargoue/image/upload/v1614007947/Green_House_u7vmbt.png" alt=""/>
                                </div>
                                <p style={{fontWeight: '500', fontSize: 16, color: '#323232'}}>{selected.garden_name}</p>
                                <p style={{fontWeight: '400', fontSize: 14}}>Address: {selected.address}</p>
                            </div>
                        ) : <></>
                    }
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