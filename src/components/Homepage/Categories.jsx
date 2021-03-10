import React, { useState, useEffect } from "react";
import CategoriesMenu from './CategoriesMenu';
import '../../styles/CategoriesMenu.css';


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
                    <CategoriesMenu
                    title={categorie.title}
                    id={categorie.id} 
                    key={categorie.id}         
                    />
                </li>
            
            ))}
            </ul>
        </div>
      
      );
      

};

export default Categories;