import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
const compost_data = require('../food_scrap_drop_off_locations_in_nyc')

// const data = [
//     {
//         "index": 0,
//         "borough": "Bronx",
//         "councildist": "8",
//         "food_scrap_drop_off_site": "Brook Park",
//         "hours_from": "6pm",
//         "hours_to": "10am",
//         "latitude": "40.809600830078125",
//         "location": "494 East 141 St.",
//         "longitude": "-73.918701171875",
//         "ntaname": "Mott Haven-Port Morris",
//         "operation_day": "Saturday",
//         "open_months": "Year Round",
//         "serviced_by": "Brook Park",
//         "borocd": "201",
//         "ct2010": "4000",
//         "point": {
//             "type": "Point",
//             "coordinates": {
//                 lng: -73.9187,
//                 lat: 40.809599
//             }
//         },
//         "zip_code": "10454",
//         ":@computed_region_efsh_h5xi": "10932",
//         ":@computed_region_f5dn_yrer": "49",
//         ":@computed_region_yeji_bk3q": "5",
//         ":@computed_region_92fq_4b7q": "35",
//         ":@computed_region_sbqj_enih": "23",
//         "website": null,
//         "notes": null
//     },
//     {
//         "index": 1,
//         "borough": "Bronx",
//         "councildist": "16",
//         "food_scrap_drop_off_site": "OPENING JULY 10: 170 Farmstand",
//         "hours_from": "05:30 PM",
//         "hours_to": "02:30 PM",
//         "latitude": "40.83998489379883",
//         "location": "Townsend Ave & 170 St, Bronx",
//         "longitude": "-73.91681671142578",
//         "ntaname": "West Concourse",
//         "operation_day": "Wednesdays",
//         "open_months": "Seasonal Market, July-November",
//         "serviced_by": "GrowNYC",
//         "borocd": "204",
//         "ct2010": "223",
//         "point": {
//             "type": "Point",
//             "coordinates": {
//                 lng: -73.91682,
//                 lat: 40.839985
//             }
//         },
//         "zip_code": "10452",
//         ":@computed_region_efsh_h5xi": "10930",
//         ":@computed_region_f5dn_yrer": "50",
//         ":@computed_region_yeji_bk3q": "5",
//         ":@computed_region_92fq_4b7q": "42",
//         ":@computed_region_sbqj_enih": "27",
//         "website": [
//             "https://www.grownyc.org/compost/locations", 
//             "https://newsettlement.org/food/170farmstand/"
//         ],
//         "notes": null
//     },
//     {
//         "index": 2,
//         "borough": "Manhattan",
//         "councildist": "3",
//         "food_scrap_drop_off_site": "Hudson Blvd Park",
//         "hours_from": "06:00 PM",
//         "hours_to": "10:00 AM",
//         "latitude": "40.75555419921875",
//         "location": "5 Hudson Blvd East",
//         "longitude": "-74.00035095214844",
//         "ntaname": "Hudson Yards-Chelsea-Flatiron-Union Square",
//         "operation_day": "Thursdays",
//         "open_months": "Year Round",
//         "serviced_by": "Hudson Yards/ Hell's Kitchen Alliance",
//         "borocd": "104",
//         "ct2010": "99",
//         "point": {
//             "type": "Point",
//             "coordinates": {
//                 lng: -74.000348,
//                 lat: 40.755554
//             }
//         },
//         "zip_code": "10001",
//         ":@computed_region_efsh_h5xi": "11722",
//         ":@computed_region_f5dn_yrer": "12",
//         ":@computed_region_yeji_bk3q": "4",
//         ":@computed_region_92fq_4b7q": "10",
//         ":@computed_region_sbqj_enih": "6",
//         "website": "hyhalliance.org",
//         "notes": null
//     },
//     {
//         "index": 3,
//         "borough": "Staten Island",
//         "councildist": "49",
//         "food_scrap_drop_off_site": "Olivet Heavenly Harvest",
//         "hours_from": "01:00 PM",
//         "hours_to": "10:00 AM",
//         "latitude": "40.63019943237305",
//         "location": "97 Myrtle Avenue, Staten Island, NY",
//         "longitude": "-74.115966796875",
//         "ntaname": "New Brighton-Silver Lake",
//         "operation_day": "Saturdays",
//         "open_months": "Seasonal, March-November",
//         "serviced_by": "Olivet Presbyterian Church",
//         "borocd": "501",
//         "ct2010": "4006",
//         "point": {
//             "type": "Point",
//             "coordinates": {
//                 lng: -74.115963,
//                 lat: 40.630199
//             }
//         },
//         "zip_code": "10310",
//         ":@computed_region_efsh_h5xi": "10697",
//         ":@computed_region_f5dn_yrer": "4",
//         ":@computed_region_yeji_bk3q": "1",
//         ":@computed_region_92fq_4b7q": "13",
//         ":@computed_region_sbqj_enih": "74",
//         "website": "www.olivetcares.org",
//         "notes": null
//     },
//     {
//         "index": 4,
//         "borough": "Brooklyn",
//         "councildist": "43",
//         "food_scrap_drop_off_site": "4th Avenue Presbyterian Church",
//         "hours_from": "12:00 PM",
//         "hours_to": "Dawn",
//         "latitude": "40.63547134399414",
//         "location": "6753 4th Avenue",
//         "longitude": "-74.02279663085938",
//         "ntaname": "Bay Ridge",
//         "operation_day": "Saturdays",
//         "open_months": "Year Round",
//         "serviced_by": "4th Avenue Presbyterian Church",
//         "borocd": "310",
//         "ct2010": "1004",
//         "point": {
//             "type": "Point",
//             "coordinates": {
//                 lng: -74.0228,
//                 lat: 40.635473
//             }
//         },
//         "zip_code": "11220",
//         ":@computed_region_efsh_h5xi": "18180",
//         ":@computed_region_f5dn_yrer": "10",
//         ":@computed_region_yeji_bk3q": "2",
//         ":@computed_region_92fq_4b7q": "44",
//         ":@computed_region_sbqj_enih": "41",
//         "website": "http://www.fourthavenuepresbyterian.org/",
//         "notes": null
//     }
// ];

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

function MyComponent(props) {
    const { google } = props;
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
    console.log(compost_data.data);
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