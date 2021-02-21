import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './about.css';



const AboutPage = () => {
    return (
        <div className="AboutPage">
                {/* <Card className="desc" style={{width: '1080px', height: '300'}}> */}
                    <Card.Text className="desc" style={{width: '1080px', height: '300'}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam
                    </Card.Text>
                {/* </Card> */}

                {/* <Card className="cardtitle1" style={{ width: '540px' }}> */}
                    <Card.Title className="title1" style={{ width: '540px' }} >
                        Drop Off Compost
                    </Card.Title>
                {/* </Card> */}
                <CardColumns className='col1'>
                {/* <Card> */}
                    <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
                {/* </Card> */}
                {/* <Card className="tcard1" style={{ width: '540px', height: '504' }}> */}
                    <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati
                    </Card.Text>
                {/* </Card> */}
                </CardColumns>

                {/* <Card className="cardtitle2" style={{ width: '540px' }}> */}
                    <Card.Title className="title2" style={{ width: '540px' }}>
                        Community Garden
                    </Card.Title>
                {/* </Card> */}
                <CardColumns className='col2'>
                {/* <Card> */}
                    <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
                {/* </Card> */}
                {/* <Card style={{ width: '540px', height: '504' }}> */}
                    <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati
                    </Card.Text>
                {/* </Card> */}
                </CardColumns>

                {/* <Card className="cardtitle3" style={{ width: '540px' }}> */}
                    <Card.Title className="title3" style={{ width: '540px' }}>
                        Farmers Market
                    </Card.Title>
                {/* </Card> */}
                <CardColumns className='col3'>
                {/* <Card> */}
                    <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
                {/* </Card> */}
                {/* <Card style={{ width: '540px', height: '504' }}> */}
                    <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                        explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                        qui est obcaecati
                    </Card.Text>
                {/* </Card> */}
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