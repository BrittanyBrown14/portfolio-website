import android from 'images/android.png';
import React, {useState} from 'react';
import { Card, Button,} from 'react-bootstrap';
import Slider from "react-slick";
import ToggleSwitch from 'utils/ToggleSwitch.js'
import 'stylesheets/Portfolio.css';
import 'stylesheets/Card.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
    
    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);
    
        const toggler = () => { setToggleValue(!toggleValue) };
        return [toggleValue, toggler]
      };

    const [toggle, setToggle] = useToggle();

    const handleClick = () => {
        setToggle(!toggle);
      };

    const sliderArrows = React.useRef(null);

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        className: 'slides'
    };

    return(
        <div className='portfolio--body'>
            <h1>Projects I've Made</h1>
            <p>
                These are some of the projects I have worked on over the past few years. Some of them I made for University assignments and others<br/> 
                I created when I was first getting the hang of software development. They can all be found on GitHub. <br/>
            </p>

            <label className='portfolio-toggle'> University Projects </label>
                <ToggleSwitch id='toggle-switch' checked={toggle} onChange={handleClick}/>
            <label className='portfolio-toggle'> Personal Projects </label>


            <div className='portfolio--carousel-formatting'>
                {toggle ?
                    <div>
                        <Slider ref={sliderArrows} {...settings}>
                            <div>
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
                            </div>
                            <div>
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
                            </div>
                            <div>
                                <Card className='card--main'>
                                <Card.Header className='card--header' >University project</Card.Header>                   
                                    <Card.Body className='card--body'>
                                        <Card.Img src={android} className='card--image'/>
                                        <Card.Title className='card--title'>Contact Database</Card.Title>
                                        <Card.Text>
                                            This is a simple database where the user inputs contact information and it displayed back to 
                                            them on another page.<br/>
                                            I used an SQLite database to store the information on the local device. 
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="https://github.com/BrittanyBrown14/Contact_Database"
                                        variant='primary'>Go to project Github</Button>
                                </Card>
                            </div>
                            <div>
                                <Card className='card--main'>
                                <Card.Header className='card--header'>University project</Card.Header>                   
                                    <Card.Body className='card--body'>
                                        <Card.Img src={android} className='card--image'/>
                                        <Card.Title className='card--title'>MExpense</Card.Title>
                                        <Card.Text>
                                            This is an expense management application that was made as a final project for this module.<br/>
                                            The user is able to add a trip, add expenses for that trip, and view all the details.
                                            There is also a search function.                                I used a SQLite database to store the information.<br/>
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="https://github.com/BrittanyBrown14/MExpense"
                                    variant='primary'>Go to project Github</Button>
                                </Card>
                            </div>
                        </Slider>  
                    </div> 
                    :
                    <div>
                        <Slider ref={sliderArrows} {...settings}>
                        <div>
                                <Card className='card--main'> 
                                    <Card.Header className='card--header'>Personal project</Card.Header>                   
                                    <Card.Body className='card--body'>
                                        <Card.Img src={android} className='card--image'/>
                                        <Card.Title className='card--title'>...</Card.Title>
                                        <Card.Text>
                                            I made this calculator as part of an Android development module.
                                            I made this in Android Studio using Java and XML.<br/>
                                            The calculator has all the functions that a regular calculator would have. 
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="https://github.com/BrittanyBrown14/Calculator"
                                        variant='primary'>Go to project Github</Button>
                                </Card>     
                            </div>
                            <div>
                                <Card className='card--main'>
                                <Card.Header className='card--header'>Personal project</Card.Header>                   
                                    <Card.Body className='card--body'>
                                        <Card.Img src={android} className='card--image'/>
                                        <Card.Title className='card--title'>...</Card.Title>
                                        <Card.Text>
                                            This is an viewer that scrolls through images that are preloaded to the app.
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href= "https://github.com/BrittanyBrown14/Image_Viewer"
                                        variant='primary'>Go to project Github</Button>
                                </Card> 
                            </div>
                            <div>
                                <Card className='card--main'>
                                <Card.Header className='card--header'>Personal project</Card.Header>                   
                                    <Card.Body className='card--body'>
                                        <Card.Img src={android} className='card--image'/>
                                        <Card.Title className='card--title'>Contact Database</Card.Title>
                                        <Card.Text>
                                            This is a simple database where the user inputs contact information and it displayed back to 
                                            them on another page.<br/>
                                            I used an SQLite database to store the information on the local device. 
                                        </Card.Text>
                                    </Card.Body>
                                    <Button href="https://github.com/BrittanyBrown14/Contact_Database"
                                        variant='primary'>Go to project Github</Button>
                                </Card>
                            </div>
                        </Slider>
                    </div>
                }               

            </div>

        </div>
    )
}  

export default Portfolio;

//TODO add other non-projects