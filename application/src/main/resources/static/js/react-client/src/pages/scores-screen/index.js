import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Axios from 'axios';
import Scores from '../../components/scores';
import style from './scoresStyle.module.scss';

const ScoresScreen = () => {

    let {score} = useParams();
    if (score){
        score = parseInt(score);
    }else {
        score = ""
    }

    const [loadingUsers, setLoadingUsers] = useState(true),
        [users, setUsers] = useState(null),
        [loadingCurrentUsers, setLoadingCurrentUsers] = useState(true),
        [currentUsers, setCurrentUsers] = useState(null);
        
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/api/users');
            setCurrentUsers(result.data);
        }
        if (currentUsers) {
            setLoadingCurrentUsers(false);
        }
        
        const timer = setTimeout(() => {
            !currentUsers && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
        
    }, [currentUsers]);
        
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios('http://localhost:8080/api/users');
            setUsers(result.data);
        }
        if (users) {
            setLoadingUsers(false);
        }
        
        const timer = setTimeout(() => {
            !users && fetchData();
        }, 1000);
        return () => clearTimeout(timer);
        
    }, [users]);
    
    
    return (
        <body className={style.body}>
            <div className={style.form__container}>
                <section className={style.userList}>
                    {loadingUsers ? <h3>Loading . . .</h3> :
                        <Scores users={users} setCurrentUsers={setCurrentUsers} currentScore={score}/>
                    }
                </section>
            </div>
            {loadingCurrentUsers ? <h3>Loading . . .</h3> :
                <>
                    <h3 className={style.h3}>Here are our Current High Scores</h3>
                     <ul>
                        {currentUsers.map(currentUser => (
                            <div key={currentUser.id}>
                                <p className={style.p}>
                                    <span>{currentUser.name} </span>
                                    <span>({currentUser.country}): </span>
                                    <span>{currentUser.score} points</span>
                                </p>    
                            </div>
                        ))}
                    </ul>
                </>
            }
        </body>
    );
}

export default ScoresScreen;