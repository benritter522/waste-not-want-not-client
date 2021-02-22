// import SearchResultsList from './SearchResultsList';
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Map from './Map';

const LandingPage = () => {
    const [compostChecked, setCompostChecked] = React.useState(true);
    const [gardenChecked, setGardenChecked] = React.useState(true);
    const [marketChecked, setMarketChecked] = React.useState(true);

    const handleCompostChange = (event) => {
        setCompostChecked(event.target.checked)
    }
    const handleGardenChange = (event) => {
        setGardenChecked(event.target.checked)
    }
    const handleMarketChange = (event) => {
        setMarketChecked(event.target.checked)
    }

    return (
        <div className="LandingPage" style={{backgroundColor: '#d5ddc6'}}>
            <div className="MapAndSearchResults" style={{ color: '#29401D', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <br/>
                <div style={{ fontSize: 14, fontWeight: '600', display: 'flex', flexDirection: 'column' }}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Checkbox 
                            checked={compostChecked} 
                            onChange={handleCompostChange} 
                            color="default"
                            inputProps={{ 'aria-label' : 'secondary checkbox'}}
                        />
                        <p style={{marginTop: 5, marginRight: 5 }}>Compost Drop-Off Locations</p>
                        <img style={{height: 30}} src="https://res.cloudinary.com/lahargoue/image/upload/v1614007988/Yellow_Compost_Bucket_zrrthq.png" alt=""/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Checkbox 
                            checked={gardenChecked} 
                            onChange={handleGardenChange} 
                            color="default"
                            inputProps={{ 'aria-label' : 'secondary checkbox'}}
                        />
                        <p style={{marginTop: 5, marginRight: 5 }}>Community Gardens</p>
                        <img style={{height: 30}} src="https://res.cloudinary.com/lahargoue/image/upload/v1614007947/Green_House_u7vmbt.png" alt=""/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Checkbox 
                            checked={marketChecked} 
                            onChange={handleMarketChange} 
                            color="default"
                            inputProps={{ 'aria-label' : 'secondary checkbox'}}
                        />
                        <p style={{marginTop: 5, marginRight: 5 }}>Farmer's Markets</p>
                        <img style={{height: 30}} src="https://res.cloudinary.com/lahargoue/image/upload/v1614007951/Red_Apple_snr6c5.png" alt=""/>
                    </div>
                </div>
                <p style={{ fontSize: 30, marginLeft: 50, marginRight: 50 }}>Zoom into the map to quickly find your nearest Compost Drop-off location, Community Garden, and Farmer’s Market to you. Click the icons to see more details.</p>
                <Map compostChecked={compostChecked} gardenChecked={gardenChecked} marketChecked={marketChecked}/>
            </div>
        </div>
    )
}

export default LandingPage;