import React from "react";
import Modal from "./modal/index";
import useModal from '../../../../hooks/useModal';


export default function FormationCard({
  title,
  description,
  formation_id
}) {
  const {isShowing, toggle} = useModal();


console.log(formation_id)
  
  
  return (
    <div>   
    <div className="card">        
        <div className="FormationTitle">
            <p>{title}</p>
        </div>
        <div className="FormationDescription">
            <p>{description}</p>
            <button className="btnFormation" onClick={toggle}>S'inscire à la formation</button>
            <Modal
              isShowing={isShowing}
              hide={toggle}
              formationId={formation_id}
            />
        </div>
        

    </div>
    </div>
  );
};