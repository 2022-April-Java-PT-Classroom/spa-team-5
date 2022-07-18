import React from "react";
import style from './style.module.scss'

const ActivitiesAPI = () => {
    

    const apiURL = 'http://www.boredapi.com/api/activity?participants=1'
    async function getCollection(){
        const response = await fetch(apiURL);
        const data = await response.json();
        const {activity, type, price, participants, accesibility, link} = data

        document.getElementById('activity').textContent = activity;
        document.getElementById('type').textContent = type;
        document.getElementById('accesibility').textContent = accesibility;
        document.getElementById('participants').textContent = participants;
        document.getElementById('price').textContent = price;
        document.getElementById('link').textContent = link;
      

    }
    getCollection();
    return (
        <div className={style.actAPI}>
            <h1>Challenge of the day</h1>
            <img src="https://th.bing.com/th/id/R.5a01efa37e75b42c4fa4a29426169bcf?rik=uQDIffMiHKZX1Q&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f4%2fNemo-PNG-High-Quality-Image.png&ehk=0VusNzRV7IqgrHGaFiJ9ZQDuc2Lt54OjcFB0kD2oQ8I%3d&risl=&pid=ImgRaw&r=0"/>
            <p>Activity: <span id='activity'></span><br/></p>
            <p>Type: <span id='type'></span></p>
            <p>accesibility: <span id='accesibility'></span></p>
            <p>participants: <span id='participants'></span></p>
            <p>Price: JAC$ <span id='price'></span> </p>
            <p>Link: <span id='link'></span> </p>
            
        </div>
    )
    
}

export default ActivitiesAPI;