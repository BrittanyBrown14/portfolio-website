import 'stylesheets/Card.css'
const cardComponent = ({header, title, text, img, url, buttonText} ) => {
    return(
            <div className='card--main'>
                <h2 className='card--header'>{header}</h2>
               
                <img src={img} alt='' className='card--image'/>
                <h3 className='card--title'>
                    {title}                        
                </h3>
                <p className='card--text'>
                    {text}                        
                </p>
            <div className='test'>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button className='card--button'> {buttonText} </button>
                </a> 
            </div>
      
            </div>
        );
}

export default cardComponent;