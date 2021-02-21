import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './about.css';



const AboutPage = () => {
    return (
        <div className="AboutPage">

        <CardColumns className='col1'>
        <Card className="imgcard1">
            <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
        </Card>
        <Card className="textcard1" style={{ width: '540px', height: '504' }}>
            <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                qui est obcaecati doloribus?
            </Card.Text>
        </Card>
        </CardColumns>

        <CardColumns className='col2'>
        <Card className="imgcard2">
            <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
        </Card>
        <Card className="textcard2" style={{ width: '540px', height: '504' }}>
            <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                qui est obcaecati doloribus?
            </Card.Text>
        </Card>
        </CardColumns>

        <CardColumns className='col3'>
        <Card className="imgcard3">
            <Card.Img variant="top" style={{ width: '540px', height: '504' }} src="https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/CompostProposal_FULL.jpg?itok=QrQHCWZf" />
        </Card>
        <Card classname="textcard3" style={{ width: '540px', height: '504' }}>
            <Card.Text className="text1" style={{ width: '540px', height: '504' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                qui est obcaecati doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Temporibus enim cumque nisi veniam aperiam quod, doloremque fugit, 
                explicabo deserunt, voluptate facere rerum quos quibusdam quisquam rem 
                qui est obcaecati doloribus?
            </Card.Text>
        </Card>
        </CardColumns>

        </div>
        
    )
}

export default AboutPage;