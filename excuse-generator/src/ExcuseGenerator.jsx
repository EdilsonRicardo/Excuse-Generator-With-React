import React from 'react';
import { useState } from 'react';
import Axios from "Axios";

export const ExcuseGenerator = () => {

    const[object2, setObject2] = useState(null);

    const generateExcuse = (category) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
            //console.log(res.data[0]);
            //Porque o retorno do objecto está a ser dentro dum array, procuramos o que está na posicao 0
            setObject2(res.data[0])
        });
    };

    const handleButtonClick = (category) => {
        
        generateExcuse(category);
    }


  return (
    <>
        <h2>Generate An Excuse For:</h2>
        <button onClick={() => handleButtonClick("party")}>Party</button>
        <button onClick={() => handleButtonClick("family")}>Family</button>
        <button onClick={() => handleButtonClick("office")}>Office</button> 
        <button onClick={() => handleButtonClick("children")}>Children</button> 
        <button onClick={() => handleButtonClick("college")}>College</button> 
        <button onClick={() => handleButtonClick("funny")}>Funny</button> 
        <button onClick={() => handleButtonClick("unbelievable")}>Unbelievable</button> 
        <button onClick={() => handleButtonClick("developers")}>Developers</button> 
        <button onClick={() => handleButtonClick("gaming")}>Gaming</button> 
        
        <div><p>{object2?.excuse}</p></div>
    </>
  )
}
