import React, {useState, useEffect} from "react";


const ModalContent = ({formationId}) => {

    const [promotions, setPromotions] = useState([]);



    const fetchPromotions = (searchValue) => {
                
        fetch(`https://form-you-api.herokuapp.com/promotions`) 
        //promotions?formation_id==formationId
        .then(response => response.json())
        .then(data => {
            setPromotions(data);    
        });
      };

      useEffect(()=>{
          fetchPromotions()                
      },[]);

      return (
      
       <div>
            <h2>Choisir une session :</h2>
            {promotions.filter(promotion => (                
                promotion.formation_id === formationId )
            ).map(promotion => (
            
                <button className="btnModalDate">                    
                    {promotion.date} 
                </button>
        
               ))}
            
        </div>
      
      );
      

};

export default ModalContent;