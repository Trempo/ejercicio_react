import React, { useState } from 'react';
import Obra from './Obra';
import './Museum.css';

const museumDetail = (prop) => {
  console.log(prop);
  const [obras] = useState(prop.selectedMuseum);
  return (
    <div>
      {obras.map((e, i) => (
        <Obra key={i} obra={e} />
      ))}
    </div>
  );
};
export default museumDetail;
