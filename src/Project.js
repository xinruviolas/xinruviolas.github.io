import {Button, Card, CardDeck, Badge} from 'react-bootstrap';
import dummy from "./images/dummyproject.jpg"
import "./css/Project.css"

function Project(props) {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={dummy} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
                <Card.Body>
                    <Card.Title className = {"cardTitle"}>Teaching Buddies</Card.Title>
                    <Card.Text className={"cardText"}>
                        <Badge pill variant="software"> software </Badge> &nbsp;
                        <Badge pill variant="engineering">engineering</Badge> &nbsp;
                        <Badge pill variant="product">product</Badge> &nbsp;
                        <Badge pill variant="design"> design </Badge> &nbsp;
                        <Badge pill variant="dei">dei</Badge> &nbsp;
                        <Badge pill variant="music">music</Badge> &nbsp;
                        <br/>
                        Founder & Executive Director of literacy nonprofit, led development for our web platform.
                    </Card.Text>
                    <a href="https://www.teachingbuddies.org/" target="_blank" className="stretched-link"/>
                </Card.Body>
            </Card>
            <br/>
            <Card>
                <Card.Img variant="top" src={dummy} style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20}} />
                <Card.Body>
                    <Card.Title className = {"cardTitle"}>Teaching Buddies</Card.Title>
                    <Card.Text className={"cardText"}>
                        <Badge pill variant="software"> software </Badge> &nbsp;
                        <Badge pill variant="engineering">engineering</Badge> &nbsp;
                        <Badge pill variant="product">product</Badge> &nbsp;
                        <Badge pill variant="design"> design </Badge> &nbsp;
                        <Badge pill variant="dei">dei</Badge> &nbsp;
                        <Badge pill variant="music">music</Badge> &nbsp;
                        <br/>
                        Founder & Executive Director of literacy nonprofit, led development for our web platform.
                    </Card.Text>
                    <a href="https://www.teachingbuddies.org/" target="_blank" className="stretched-link"/>
                </Card.Body>
            </Card>

        </CardDeck>
    );
}

export default Project;