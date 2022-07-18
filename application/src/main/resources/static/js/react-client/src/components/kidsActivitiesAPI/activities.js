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