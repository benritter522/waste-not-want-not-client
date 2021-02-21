import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './about.css';



const AboutPage = () => {
    return (
        <div className="AboutPage">
            <Card.Text className="desc" style={{vw: "60%"}}>
            Our intent with the creation of Waste Not, Want Not, is to better the dialogue and contributions 
            of sustainability within a large metropolitan city. This website access public open-source data and 
            intends to connect users with locations of available places to compost their food and locate farmer's 
            markets and community gardens within their neighborhoods.
            </Card.Text>

            <Card.Title className="title1" style={{ width: '540px' }} >
                Drop Off Compost
            </Card.Title>
            <CardColumns className='col1'>
                <Card.Img variant="top" style={{ vw: "60%"}} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
                    <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                    With a growing number of people using compostable products and foods, the need 
                    to locate accessible locations to compost is clear. 
                    </Card.Text>
            </CardColumns>

            <Card.Title className="title2" style={{ width: '540px' }}>
                Community Garden
            </Card.Title>
                <CardColumns className='col2'>
                    <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
                        <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                        With over 600 community gardens and other publicly accessible gardens, across the 
                        five boroughs of New Yorkers are no strangers to growing their food. 
                        </Card.Text>
                </CardColumns>

            <Card.Title className="title3" style={{ width: '540px' }}>
                Farmers Market
            </Card.Title>
            <CardColumns className='col3'>
                <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
                    <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                    Farmer Markets located throughout NYC are more than just fantastic places to find great produce and local products, 
                    but they are also important places to learn about the importance of composting. Most farmers tend to do 
                    their best utilizing compost in their soil mixtures. Locate the nearest Farmers Market near you!
                    </Card.Text>
            </CardColumns>

        <CardColumns className="col4">
            <Card.Title className="faqtitle" style={{width: '850px', height: '300'}}>
                FAQs about Composting & Recycling
            </Card.Title>
        </CardColumns>
        </div>
        
    )
}

export default AboutPage;