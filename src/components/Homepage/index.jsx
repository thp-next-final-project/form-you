import React from "react";
import Formations from './formations/index';
import Categories from './categories/index';
import Presentation from './presentation/index';
import {useSelector } from 'react-redux';


function Homepage () {
  const user = useSelector((state) => state);

  return (
    <div className="HomepageGlobal">
      <div><Presentation/></div>
      <h2><center>La liste de nos formations</center></h2>
      <div className="HomepageTabContent">
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