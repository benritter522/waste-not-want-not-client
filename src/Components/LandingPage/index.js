import SearchResultsList from './SearchResultsList';
import Map from './Map';

const LandingPage = () => {

    return (
        <div className="LandingPage">
            <div className="MapAndSearchResults" style={{display: 'flex', justifyContent: 'center'}}>
                {/* <SearchResultsList /> */}
                <Map />
            </div>
        </div>
    )
}

export default LandingPage;