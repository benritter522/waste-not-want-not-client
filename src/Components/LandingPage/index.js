import SearchResultsList from './SearchResultsList';
import Map from './Map';

const LandingPage = () => {

    return (
        <div className="LandingPage" style={{backgroundColor: '#d5ddc6'}}>
            <div className="MapAndSearchResults" style={{ color: '#29401D', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <br/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p>
                        Compost Drop-Off Locations  
                        <img style={{height: 30}} src="https://res.cloudinary.com/lahargoue/image/upload/v1613945753/Compost_Icon_pawmpw.png" alt=""/>
                    </p>
                    <p>
                        Community Gardens  
                        <img style={{height: 30}} src="https://res.cloudinary.com/lahargoue/image/upload/v1613945741/Community_Garden_Icon_nrp6iw.png" alt=""/>
                    </p>
                    <p>
                        Farmer's Markets  
                        <img style={{height: 30}} src="https://res.cloudinary.com/lahargoue/image/upload/v1613945750/Farmers_Market_Icon_lsuvxi.png" alt=""/>
                    </p>
                </div>
                <p>Visit the locations on the map below to live more sustainability! Click a marker for details. </p>
                <Map />
            </div>
        </div>
    )
}

export default LandingPage;