import 'stylesheets/Skills.css';

function Skills(){

    const ProgressBar = (props) => {
        const { bgcolor, completed } = props;
    
          const fillerStyles = {
            width: `${completed}%`,
            backgroundColor: bgcolor,
          }
        
          return (
            <div className='skills--bar-styling'>
              <div className='containerStyles'>
                <div className='fillerStyles' style={fillerStyles}></div>            
              </div>            
            </div>
          );
        };

        const techTestData = [
          { bgcolor: "#5bc3eb", completed: 70, skill: "C#", years: 2},
          { bgcolor: "#5bc3eb", completed: 40, skill: "Javascript", years: 1},
          { bgcolor: "#5bc3eb", completed: 65, skill: "CSS", years: 2},
          { bgcolor: "#5bc3eb", completed: 75, skill: "HTML", years: 2},
          { bgcolor: "#5bc3eb", completed: 60, skill: "React", years: 1},
        ];       
        
        const softTestData = [
          { bgcolor: "#5bc3eb", completed: 80, skill: "Communication"},
          { bgcolor: "#5bc3eb", completed: 78, skill: "Organization"},
          { bgcolor: "#5bc3eb", completed: 65, skill: "Teamwork" },
          { bgcolor: "#5bc3eb", completed: 82, skill: "Independence" },
        ];

    return(
        <div className='skills--body'>
            <h1>My Skills </h1>
            <div className='skills--containers'>
              <div>
                <h2>Technical skills</h2>               
                  {techTestData.map((item, idx) => (
                      <div className='skills--text-styling'> 
                        <span>
                          <p>{item.skill}</p>
                          <p>Years of Experience: {item.years}</p>                    
                        </span>
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
                      </div>
                  ))}
              </div>

              <div>
                <h2 className='skills--title'>Soft skills</h2>
                    {softTestData.map((item, idx) => (
                        <div className='skills--text-styling'> 
                          <p>{item.skill}</p>
                          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}/>
                        </div>
                    ))}
              </div>            
            </div>
        </div>
    )
}

export default Skills;