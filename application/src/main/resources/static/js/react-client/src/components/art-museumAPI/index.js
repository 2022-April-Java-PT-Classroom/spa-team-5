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
        <body className={style.body}>
        <div className={style.art}>
            <h1 className={style.h1}>Art of the day</h1>
            <img className={style.img} src="https://images.metmuseum.org/CRDImages/ad/original/DT241732.jpg"/>
            <section className={style.p}>
            <p className={style.p}>ObjectID: <span id='objectID'></span></p>
            <p className={style.p}>ObjectName: <span id='objectName'></span></p>
            <p className={style.p}>AccessionYear: <span id='accessionYear'></span></p>
            <p className={style.p}>Department: <span id='department'></span></p>
            <p className={style.p}>Region:  <span id='region'></span> </p>
            <p className={style.p}>Title:  <span id='title'></span> </p>
            <p className={style.p}>CreditLine:  <span id='creditLine'></span> </p>
            <p className={style.p}>Country:  <span id='country'></span> </p>
            <p className={style.p}>Medium:  <span id='medium'></span> </p>
            <p className={style.p}>ObjectDate:  <span id='objectDate'></span> </p>
            <p className={style.p}>PrimaryImage: <span id='primaryImage'></span></p>
            <p className={style.p}>ObjectURL: <span id='objectURL'></span></p>
            </section>
        </div>
        </body>
    )
    
}

export default ArtCollectiom;