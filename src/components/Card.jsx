import React, { useState } from "react";
import { Modal } from "./Modal";
import boxicons from 'boxicons'; 

export const Card = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="card">
        <div className="info">
          <h1>{props.name}</h1>
            <box-icon
              name="info-circle"
              type="regular"
              color="white"
              size="sm"
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            ></box-icon>
        </div>
        <div className="img">
          <img src={props.img} alt={props.description} />
        </div>
        <div className="links">
          <a href={props.page}>Página</a>
          <a href={props.github}>Repositorio</a>
        </div>
      </div>
      {show && <Modal text={props.description} />}
    </div>
  );
};
