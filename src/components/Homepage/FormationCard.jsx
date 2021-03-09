import React from "react";
import '../../styles/FormationCard.css';


export default function FormationCard({
  title,
  description
}) {
  return (
    <div className="card">        
        <div className="FormationTitle">
            <p>{title}</p>
            <button className="FormationsTagsBtn">Tag 1</button>
            <button className="FormationsTagsBtn">Tag 2</button>
            <button className="FormationsTagsBtn">Tag 3</button>
        </div>
        <div className="FormationDescription">
            <p>{description}</p>
            <button className="btnFormation">S'inscire à la formation</button>
        </div>

    </div>
  );
}