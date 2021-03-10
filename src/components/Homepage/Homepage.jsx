import React from "react";
import Formations from './Formations';
import Categories from './Categories';
import Presentation from './Presentation';
import {useSelector } from 'react-redux';

import '../../styles/Homepage.css';


function Homepage () {
  const user = useSelector((state) => state);

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
      { (user.isLogged &&
        <p>super je suis log !</p>) ||
        <p>s'agirait d'grandir et dce connecter</p> 
      }
    </div>
    
  );
};

export default Homepage;