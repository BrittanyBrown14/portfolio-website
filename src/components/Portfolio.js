import android from 'images/android.png';
import React, {useState} from 'react';
import Slider from "react-slick";
import ToggleSwitch from 'utils/ToggleSwitch.js'
import Test from './Card.js'
import 'stylesheets/Portfolio.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
    
    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);
    
        const toggler = () => { setToggleValue(!toggleValue)};
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

    const settings2 = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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

            <label className='portfolio-toggle'>Personal Projects </label>
                <ToggleSwitch id='toggle-switch' checked={toggle} onChange={handleClick}/>
            <label className='portfolio-toggle'>University Projects </label>

            <div className='portfolio--carousel-formatting'>
                {toggle ?
                    <div>
                        <Slider ref={sliderArrows} {...settings}>
                            <Test
                                header='University Project'
                                title='Calculator' 
                                text='I made this calculator as part of an Android development module.
                                    I made this in Android Studio using Java and XML.
                                    The calculator has all the functions that a regular calculator would have. '
                                img={android}
                                url="https://github.com/BrittanyBrown14/Calculator"
                                buttonText='Go to project Github'/>

                            <Test
                                header='University Project'
                                title='Image Viewer'
                                text='This is an viewer that scrolls through images that are preloaded to the app'
                                img={android}
                                url='https://github.com/BrittanyBrown14/Image_Viewer'
                                buttonText='Go to project Github'/>
                                
                            <Test
                                header='University Project'
                                title='Contact Database'
                                text=' This is a simple database where the user inputs contact information and it displayed back to 
                                       them on another page. I used an SQLite database to store the information on the local device. '
                                img={android}
                                url='https://github.com/BrittanyBrown14/Contact_Database'
                                buttonText='Go to project Github'/>

                            <Test
                                header='University Project'
                                title='MExpense'
                                text='This is an expense management application that was made as a final project for this module.
                                    The user is able to add a trip, add expenses for that trip, and view all the details.
                                    There is also a search function. I used a SQLite database to store the information.'
                                img={android}
                                url='https://github.com/BrittanyBrown14/MExpense'
                                buttonText='Go to project Github'/>
                        </Slider>  
                    </div> 
                    :
                    <div className='slider--set'>
                        <Slider ref={sliderArrows} {...settings2}>
                            <Test 
                                header='Personal Project'
                                title='Portfolio Website' 
                                text='This is the first website I have made using React framework.
                                    This website allowed me to test various concepts, features and libraries to show off
                                    my portfolio.'
                                img={android}
                                url="https://github.com/BrittanyBrown14/portfolio-website"
                                buttonText='Go to project Github'/>

                            <Test 
                                header='Personal Project'
                                title='MultiGame' 
                                text='This is a collection of projects that I made when I first started learning C#.
                                    I worked off Microsoft tutorials and then added more features to further my learning.'
                                img={android}
                                url="https://github.com/BrittanyBrown14/MultiGame"
                                buttonText='Go to project Github'/>
                            
                        </Slider>
                    </div>
                }               

            </div>




        </div>
    )
}  

export default Portfolio;
