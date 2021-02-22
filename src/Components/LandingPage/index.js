import SearchResultsList from './SearchResultsList';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
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
                <Card.Title className="title12" style={{ width: '40vw'}}>
                    Our Mission
                </Card.Title>
            <CardColumns className="col5" style={{ width: '40vw'}}>
                <Card className="card1" style={{ width: '90vw'}}>
                <Card.Text className="text5" style={{width: '90vw'}}>
                    We want to change the word starting with food. Statistics about composting and food waste. Another statistic about food waste.
                </Card.Text>
                <Card.Text className="text5" style={{width: '90vw'}}>
                    Let's make an impact. Find sustainable locations with us.
                </Card.Text>
                </Card>
            </CardColumns>
                <Card.Img src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1613962297/Waste%20Not/somi-jaiswal-6DsMsaoFmqY-unsplash_1_rzorso.png"/>
                <Card.Title className="title1" style={{ width: '40vw'}}>
                    Impact and Benefits
                </Card.Title>
            <CardColumns className="col5" style={{ width: '90vw' }}>
                <Card className="card1" style={{ width: '90vw' }}>
                <Card.Text className="text5" style={{ width: '80vw'}}>
                    According to the NYC Residential Waste PRofile in 2017, a 2017 NYC Waste Characterization Study,
                    DSSNY The City of New York Department of Sanitation
                </Card.Text>
                    <ul class="list-group" style={{width: '700px'}}>
                        <li class="list-group-item">34% of NYC residential waste is compostable</li>
                        <li class="list-group-item">34% of NYC residential waste is recyclable</li>
                    </ul>
                <Card.Text className="text5">
                    This means 67% of all NYC waste can be diverted from landfills. This would greatly reduce greenhouse gas emissions.
                </Card.Text>
                <Card.Img style={{width: '30vw'}} src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1614013005/Waste%20Not/paige-cody-z8gKIE4Kz0Y-unsplash_3_roejn6.png" />
                </Card>
            </CardColumns>

            <Card.Title className="title12" style={{ width: '40vw'}}>
                What can I compost?
            </Card.Title>
            <CardColumns>
                <Card style={{justifyContent: "left"}}>
                    <Card.Title>
                        Compostable
                    </Card.Title>
                    <Card.Text>
                    <ul class="list-group" style={{width: '700px'}}>
                        <li class="list-group-item">Fruits & Vegetables</li>
                        <li class="list-group-item">Eggshells</li>
                        <li class="list-group-item">Coffee and Tea</li>
                        <li class="list-group-item">Bread, Grains, Pastas</li>
                        <li class="list-group-item">Nuts</li>
                        <li class="list-group-item">Food-soiled Paper Towels</li>
                        <li class="list-group-item">Dried flowers, Plants & Yard waste</li>
                    </ul>
                    </Card.Text>
                </Card>
                <Card style={{justifyContent: "left"}}>
                    <Card.Title>
                        Not Compostable
                    </Card.Title>
                    <Card.Text>
                    <ul class="list-group" style={{width: '700px'}}>
                        <li class="list-group-item">Meat, Fist, and Dairy</li>
                        <li class="list-group-item">Pet Waste and Kitty Litter</li>
                        <li class="list-group-item">Pressure-treated Plywood, Lumber, or Sawdust</li>
                        <li class="list-group-item">Clean Paper, Glossy Paper, or Cardboard</li>
                        <li class="list-group-item">Metal, Glass or Plastic</li>
                        <li class="list-group-item">Medical Waste, Diapers, and Personal Hygiene Products</li>
                        <li class="list-group-item">BPI-certified compostable plastic products</li>
                    </ul>
                    </Card.Text>
                </Card>
            </CardColumns>

            <div class="card-body">
                    <img src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1613970521/Waste%20Not/Company_Info_1_bsvzbl.png" alt=""/>
                    <p class="card-text">2021 Waste Not, Want Not. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default LandingPage;