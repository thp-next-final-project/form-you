import React from "react";
import Formations from './Formations';
import Categories from './Categories';
import Presentation from './Presentation';
import '../../styles/Homepage.css';


function Homepage () {
  return (
    <div>
      <div><Presentation/></div>
      <h2>La liste de nos formations</h2>
      <div className="HomepageGlobal">
        <div className="categoriesMenu">
          <Categories />
        </div>
        <div className="formationsSection">
          <Formations/>
        </div>      
      </div>
    </div>
    
  );
};

export default Homepage;