import SearchResultsList from './SearchResultsList';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
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
                <div style={{ fontSize: 14, fontWeight: '600', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Checkbox 
                            checked={compostChecked} 
                            onChange={handleCompostChange} 
                            color="default"
                            inputProps={{ 'aria-label' : 'secondary checkbox'}}
                        />
                        <p style={{marginTop: 5, marginRight: 5 }}>Compost Drop-Off Locations</p>
                        <img style={{height: 20}} src="https://res.cloudinary.com/lahargouedesign/image/upload/v1614007988/Yellow_Compost_Bucket_zrrthq.png" alt=""/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Checkbox 
                            checked={gardenChecked} 
                            onChange={handleGardenChange} 
                            color="default"
                            inputProps={{ 'aria-label' : 'secondary checkbox'}}
                        />
                        <p style={{marginTop: 5, marginRight: 5 }}>Community Gardens</p>
                        <img style={{height: 20}} src="https://res.cloudinary.com/lahargouedesign/image/upload/v1614007947/Green_House_u7vmbt.png" alt=""/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Checkbox 
                            checked={marketChecked} 
                            onChange={handleMarketChange} 
                            color="default"
                            inputProps={{ 'aria-label' : 'secondary checkbox'}}
                        />
                        <p style={{marginTop: 5, marginRight: 5 }}>Farmers Markets</p>
                        <img style={{height: 20}} src="https://res.cloudinary.com/lahargouedesign/image/upload/v1614007951/Red_Apple_snr6c5.png" alt=""/>
                    </div>
                </div>
                <p style={{ fontSize: 20, marginLeft: 50, marginRight: 50 }}>Zoom into the map to find sustainable locations near you.</p> 
                <p style={{ fontSize: 16, marginLeft: 50, marginRight: 50 }}>Click the icons on the map to see more details.</p>
                <Map compostChecked={compostChecked} gardenChecked={gardenChecked} marketChecked={marketChecked}/>
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
            <CardColumns className="col111">
                <Card style={{justifyContent: "left", height: '80vh'}}>
                    <Card.Title style={{width: '25vw'}}>
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
                <Card style={{justifyContent: "left", height: '80vh'}}>
                    <Card.Title style={{width: '25vw'}}>
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