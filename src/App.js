import React from 'react';

import './App.css';
import Dinner from "./dinner";

function App() {
  return (
    <div className="App" >
      
      
      <Dinner dishName="chicken karhai" sweetDish="kheer" />
      <hr/>
      <Dinner dishName="chicken baryani" sweetDish="jalabi" />
      <img src="b.jpg" alt="Chiken Biryani"/>
      
      <hr/>
      <Dinner dishName="chicken nehari" sweetDish="gajar ka halwa" />
   
    </div>
  );
}

export default App;
