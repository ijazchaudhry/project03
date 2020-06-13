import React from 'react';
function Dinner(props){
    return(
        <div>
        <h1>hello world i am ijaz sarwar</h1>
        
        <div>
            
            <h2>today we are serving {props.dishName}</h2>
            <h2>today we are serving {props.sweetDish}</h2>
        </div>
        </div>
        
    )
}
export default Dinner;