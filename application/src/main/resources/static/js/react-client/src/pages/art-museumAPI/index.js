import React from "react";
import style from './style.module.scss'

const ArtCollectiom = () => {
    

    const ARTapiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/8238'
    async function getObject(){
        const response = await fetch(ARTapiURL);
        const data = await response.json();
        const {objectID, objectName, accessionYear, primaryImage,department,region } = data

        document.getElementById('objectID').textContent = objectID;
        document.getElementById('objectName').textContent = objectName;
        document.getElementById('accessionYear').textContent = accessionYear;
        document.getElementById('department').textContent = department;
        document.getElementById('region').textContent = region;
        document.getElementById('primaryImage').textContent = primaryImage;
      

    }
    getObject();
    return (
        <div className={style.art}>
            <h1>Art of the day</h1>
            <img src="https://images.metmuseum.org/CRDImages/ad/web-large/52534.jpg"/>
            <p>ObjectID: <span id='objectID'></span></p>
            <p>ObjectName: <span id='objectName'></span></p>
            <p>AccessionYear: <span id='accessionYear'></span></p>
            <p>Department: <span id='department'></span></p>
            <p>Region:  <span id='region'></span> </p>
           <p>PrimaryImage: <span id='primaryImage'></span></p>
            
        </div>
    )
    
}

export default ArtCollectiom;