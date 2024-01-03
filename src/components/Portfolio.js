import android from '../images/android.png';
import React from 'react';
import { Card, Button,} from 'react-bootstrap';
import '../stylesheets/Portfolio.css';
import '../stylesheets/Card.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Portfolio() {
    const responsive = {
        LargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <div className='portfolio--body'>
            <h1>Projects I've Made</h1>
            <p>
                These are some of the projects I have worked on over the past few years. Some of them I made for University assignmemts and others<br/> 
                I created when I was first getting the hang of software development. They can all be found on GitHub. <br/>
            </p>

            <Carousel responsive={responsive} infinite={true} swipeable={false} draggable={false}>
                <Card className='card--main'> 
                    <Card.Header className='card--header'>University project</Card.Header>                   
                    <Card.Body className='card--body'>
                        <Card.Img src={android} className='card--image'/>
                        <Card.Title className='card--title'>Calculator</Card.Title>
                        <Card.Text>
                            I made this calculator as part of an Android development module.
                            I made this in Android Studio using Java and XML.<br/>
                            The calculator has all the functions that a regular calculator would have. 
                        </Card.Text>
                    </Card.Body>
                    <Button href="https://github.com/BrittanyBrown14/Calculator"
                        variant='primary'>Go to project Github</Button>
                </Card>                  

                <Card className='card--main'>
                <Card.Header className='card--header'>University project</Card.Header>                   
                    <Card.Body className='card--body'>
                        <Card.Img src={android} className='card--image'/>
                        <Card.Title className='card--title'>Image Viewer</Card.Title>
                        <Card.Text>
                            This is an viewer that scrolls through images that are preloaded to the app.
                        </Card.Text>
                    </Card.Body>
                    <Button href= "https://github.com/BrittanyBrown14/Image_Viewer"
                        variant='primary'>Go to project Github</Button>
                </Card> 

                <Card className='card--main'>
                <Card.Header className='card--header' >University project</Card.Header>                   
                    <Card.Body className='card--body'>
                        <Card.Img src={android} className='card--image'/>
                        <Card.Title className='card--title'>Contact Database</Card.Title>
                        <Card.Text>
                            This is a simple database where the user inputs contact infomation and it diplayed back to 
                            them on another page.<br/>
                            I used an SQLite database to store the information on the local device. 
                        </Card.Text>
                    </Card.Body>
                    <Button href="https://github.com/BrittanyBrown14/Contact_Database"
                        variant='primary'>Go to project Github</Button>
                </Card> 

                <Card className='card--main'>
                <Card.Header className='card--header'>University project</Card.Header>                   
                    <Card.Body className='card--body'>
                        <Card.Img src={android} className='card--image'/>
                        <Card.Title className='card--title'>MExpense</Card.Title>
                        <Card.Text>
                            This is an expence management application that was made as a final project for this module.<br/>
                            The user is able to add a trip, add expences for that trip, and view all the details.
                            There is also a search function.<br/>
                            I used a SQLite database to store the information.<br/>
                        </Card.Text>
                    </Card.Body>
                    <Button href="https://github.com/BrittanyBrown14/MExpense"
                    variant='primary'>Go to project Github</Button>
                </Card>
            </Carousel>

        </div>
    )
}  

export default Portfolio;

// TODO add other projects
// TODO get buttons to work!!!!11!!!!!!!