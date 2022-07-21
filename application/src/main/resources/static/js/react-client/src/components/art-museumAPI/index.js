import React from "react";
import style from './artStyle.module.scss'

const ArtCollectiom = () => {
    

    const ARTapiURL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/8070'
    async function getObject(){
        const request = await fetch(ARTapiURL);
        const data = await request.json();
        const {objectID, objectName, objectURL,accessionYear, primaryImage,department,region,title,objectDate,creditLine,country,medium } = data

        document.getElementById('objectID').textContent = objectID;
        document.getElementById('objectName').textContent = objectName;
        document.getElementById('accessionYear').textContent = accessionYear;
        document.getElementById('department').textContent = department;
        document.getElementById('region').textContent = region;
        document.getElementById('title').textContent = title;
        document.getElementById('creditLine').textContent = creditLine;
        document.getElementById('country').textContent = country;
        document.getElementById('medium').textContent = medium;
        document.getElementById('objectDate').textContent = objectDate;
        document.getElementById('primaryImage').textContent = primaryImage;
        document.getElementById('objectURL').textContent = objectURL;
      

    }
    getObject();
    return (
        <div className={style.art}>
            <h1>Art of the day</h1>
            <img src="https://images.metmuseum.org/CRDImages/ad/original/DT241732.jpg"/>
            <p>ObjectID: <span id='objectID'></span></p>
            <p>ObjectName: <span id='objectName'></span></p>
            <p>AccessionYear: <span id='accessionYear'></span></p>
            <p>Department: <span id='department'></span></p>
            <p>Region:  <span id='region'></span> </p>
            <p>Title:  <span id='title'></span> </p>
            <p>CreditLine:  <span id='creditLine'></span> </p>
            <p>country:  <span id='country'></span> </p>
            <p>Medium:  <span id='medium'></span> </p>
            <p>ObjectDate:  <span id='objectDate'></span> </p>
            <p>PrimaryImage: <span id='primaryImage'></span></p>
            <p>ObjectURL: <span id='objectURL'></span></p>
            
        </div>
    )
    
}

export default ArtCollectiom;