import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './about.css';



const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Card className="desccard">
                <Card.Text className="desc" style={{vw: "60%"}}>
                Our intent with the creation of Waste Not, Want Not, is to better the dialogue and contributions 
                of sustainability within a large metropolitan city. This website access public open-source data and 
                intends to connect users with locations of available places to compost their food and locate farmer's 
                markets and community gardens within their neighborhoods.
                </Card.Text>
            </Card>
            <Card.Title className="title1" style={{ width: '540px' }} >
                Drop Off Compost
            </Card.Title>
            <CardColumns className='col1'>
                <Card.Img variant="top" style={{ width: '40vw'}} src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1613962300/Waste%20Not/markus-spiske-fDvokTkwEZ8-unsplash_1_ge8mcj.png" />
                    <Card.Text className="text1" style={{ vw: "70%", vh: "70%"}}>
                    With a growing number of people using compostable products and foods, the need 
                    to locate accessible locations to compost is clear. 
                    </Card.Text>
            </CardColumns>

            <Card.Title className="title2" style={{ width: '540px' }}>
                Community Garden
            </Card.Title>
                <CardColumns className='col2'>
                    <Card.Img variant="top" style={{ width: '40vw' }} src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1613963741/Waste%20Not/ny-menghor-lEqCk3muBpo-unsplash_2_njv0n1.png" />
                        <Card.Text className="text1" style={{ vw: "70%", vh: "70%" }}>
                        With over 600 community gardens and other publicly accessible gardens, across the 
                        five boroughs of New Yorkers are no strangers to growing their food. 
                        </Card.Text>
                </CardColumns>

            <Card.Title className="title3" style={{ width: '540px' }}>
                Farmers Market
            </Card.Title>
            <CardColumns className='col3'>
                <Card.Img variant="top" style={{ width: '40vw' }} src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1613962301/Waste%20Not/neonbrand-sEwtU-qy06c-unsplash_2_e4xbx2.png" />
                    <Card.Text className="text1" style={{ vw: "70%", vh: "70%" }}>
                    Farmer Markets located throughout NYC are more than just fantastic places to find great produce and local products, 
                    but they are also important places to learn about the importance of composting. Most farmers tend to do 
                    their best utilizing compost in their soil mixtures. Locate the nearest Farmers Market near you!
                    </Card.Text>
            </CardColumns>

        <CardColumns className="col4">
            <Card className="faqcard" style={{width: '1000px', height: '800px'}}>
                <Card.Text>
                    <Card.Title className="faqtitle" style={{width: '50vw'}}> FAQs About Composting and Recycling</Card.Title>
                </Card.Text>
            </Card>
            <Card.Img variant="top" style={{ width: '100vw'}} src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1613962289/Waste%20Not/neil-mark-thomas-1euFcqLsPWA-unsplash_1_nswj1t.png" />
        </CardColumns>
        </div>
        
    )
}

export default AboutPage;