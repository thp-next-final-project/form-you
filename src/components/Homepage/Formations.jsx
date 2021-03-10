import React, { useState, useEffect } from "react";
import FormationCard from './FormationCard';

const Formations = () => {
    const [formations, setFormations] = useState([]);


    const fetchFormations = (searchValue) => {
                
        fetch(`https://form-you-api.herokuapp.com/formations`)
        .then(response => response.json())
        .then(data => {
            setFormations(data);    
        });
      };

      useEffect(()=>{
          fetchFormations()        
      },[]);

      
      return (     
    
    <div>
      
        {formations.map(formation => (        
          <FormationCard
            title={formation.title}
            id={formation.id}
            description={formation.description}      
            key={formation.id}               
          />        
      ))}
    </div>
     
      
      );
      

};

export default Formations;