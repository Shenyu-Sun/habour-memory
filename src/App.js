import logo from './logo.svg';
import './App.css';
import Collapsible from './Colloapsible';

function App() {
  return (
    
    <div className="App">
      

      <header>
        <h1 className="h1" >
          Harbour Memory - Work In Progress
        </h1>
        <div className='line'></div>
      </header>
      
      <div className='container1'>
      
        <div className='block1'>
           <h2 className="h2">
           "CAN A CITY IN CONSTANT CHANGE BE THE CARRIER OF COLLECTIVE MEMORY?"
          </h2>
          <h3 className='h3'>
          Documentation for project I made in course: System of Representation
          <br/>
          Design and code by Shenyu
          </h3>
        </div>

    
      </div>

      <div className='container1'>

    
   
        <div className='block2'>
           <h3 className="h3">
           WHAT - WHEN - WHERE - WHY
          </h3>
            <p className='content1'>
            Helsinki South Harbour area is part of the Helsinki National Landscape and is the last part of the old harbour area to be developed. 
            The place is centrally located and is part of the maritime façade of the historic centre of Helsinki. The area is not only important historically and culturally, but also for the people living in Helsinki. 
            </p>
            <p className='content1'>
            Due to the growth of the city and economic demands, there are proposals to build huge structures on this historic site, these will threaten the landscape value of the city and the dilution of the sense of social belonging. This not only destroys the collective memory but also erodes the physical environment.
            </p>
        </div>
        <div className='block2'>
        <img className='img2' src='./Images/Site.png'></img>
        </div>
        

        
        
      </div>

      <div className='container1'>



            <div className='block1'>
               <h3 className="h3">HOW</h3>
               <p className='content1'>
               Simulation as a tool.
               <br/>
               Promote the city or palce as a the carrier of collective memory
               Outcome: A prototype or a demo shows the simulation
               </p>
               <img className='img1' src='./Images/HOW_Diagram.png'></img>
            </div>

            

      </div>


      <div className='container_list'>

        <div className='line'></div>
          
        <Collapsible label='↗ Reference Thesis List'> 
           <p className='courier_black'>
           1. Intergenerational Aesthetics
           </p>
           
        </Collapsible>
        <Collapsible label='↗ Inspiration'> 
        <p className='courier_black'>
           still collecting
           </p>
           </Collapsible>
        <Collapsible label='↗ About the Course'>
        <p className='courier_black'>
        During its 2022 edition the Systems of Representation course will focus on the notion of
Simulation. A simulation is the imitation of something, real or not. The activity of creating
simulations entails the creation, modeling and, or reproduction of key characteristics and
behaviors of a physical object or abstract system, often with the objective to achieve a better
understanding of the thing itself.
           </p>
           </Collapsible>
      </div>

      <footer>
          <ul className='footer'>
             <ls className='courier_white'>Shenyu Sun</ls>
             <ls className='courier_white'>shenyu.sun@aalto.fi</ls>
          </ul>
      </footer>

    </div>
  );
}

export default App;

