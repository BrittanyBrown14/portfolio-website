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
          { bgcolor: "#a85c24", completed: 70, skill: "C#", years: 2},
          { bgcolor: "#a85c24", completed: 40, skill: "Javascript", years: 1},
          { bgcolor: "#a85c24", completed: 65, skill: "CSS", years: 1},
          { bgcolor: "#a85c24", completed: 75, skill: "HTML", years: 1},
          { bgcolor: "#a85c24", completed: 60, skill: "React", years: 1},
        ];       
        
        const softTestData = [
          { bgcolor: "#313c4e", completed: 80, skill: "Communication"},
          { bgcolor: "#313c4e", completed: 78, skill: "Organization"},
          { bgcolor: "#313c4e", completed: 65, skill: "Teamwork" },
          { bgcolor: "#313c4e", completed: 82, skill: "Independence" },
        ];

    return(
        <div className='skills--body'>
            <h1>My Skills </h1>
            <div className='skills--containers'>
              <div>
                <h2>Technical skills</h2>
                <div className='skills--bars'>
                  <div>                
                      {techTestData.map((item) => (
                          <p 
                            className='skills--text-styling-xp'> {item.skill} <br/>
                            Years of Experience: {item.years}
                          </p>
                      ))}
                  </div>
                  <div>
                      {techTestData.map((item, idx) => (
                          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill} />
                      ))}
                  </div>
                </div>
              </div>

              <div>
                <h2>Soft skills</h2>
                <div className='skills--bars'>
                  <div>                
                      {softTestData.map((item) => (
                          <p className='skills--text-styling'> {item.skill}</p>
                      ))}
                  </div>
                  <div>
                      {softTestData.map((item, idx) => (
                          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} skill={item.skill} />
                      ))}
                  </div>
                </div>
              </div>            
            </div>
        </div>
    )
}

export default Skills;

//TODO find a way to make the layout suit opera browser
//TODO add a red to green colour gradient to show confidence
//TODO make the YoE: bigger and eaier to read