import React, { useState, useEffect } from "react";


const Categories = () => {
    const [categories, setCategories] = useState([]);



    const fetchCategories = (searchValue) => {
                
        fetch(`https://form-you-api.herokuapp.com/categories`)
        .then(response => response.json())
        .then(data => {
            setCategories(data);    
        });
      };

      useEffect(()=>{
          fetchCategories()                
      },[]);

      return (
      
       <div>
            <ul>
            {categories.map(categorie => (
            
                <li>                    
                    {categorie.title} 
                </li>
            
            ))}
            </ul>
        </div>
      
      );
      

};

export default Categories;