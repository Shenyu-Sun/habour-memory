import { useState } from "react"; 

function Collapsible (props) {

 const [isCollapsed, setIsCollapsed] = useState(true);

 const IndexOpen = () => {
     return (
         <div>
             <div>
                 {props.children}
             </div>
         </div>
     ) }

     return (
         <div>
                <div onClick= {() => setIsCollapsed (!isCollapsed)}>
                <button className="button1">
                {props.label}
                    </button>
                </div>
                <div className='line'></div>
               
                <div>
               {isCollapsed ? "" : <IndexOpen />}
                </div>
         </div>

         )
     };
    
     export default Collapsible;