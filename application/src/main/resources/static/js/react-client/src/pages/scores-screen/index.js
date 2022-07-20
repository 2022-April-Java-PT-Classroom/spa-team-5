import React, { useEffect, useState } from "react";

import Axios from 'axios';
import Scores from '../../components/scores';
import style from './scoresStyle.module.scss';

const ScoresScreen = () => {

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
        <div>
            <div className={style.form__container}>
                <section className={style.userList}>
                    {loadingUsers ? <h3>Loading . . .</h3> :
                        <Scores users={users} setCurrentUsers={setCurrentUsers} />
                    }
                </section>
            </div>
            {loadingCurrentUsers ? <h3>Loading . . .</h3> :
                <>
                    <h2>Here are our Current High Scores</h2>
                     <ul>
                        {currentUsers.map(currentUser => (
                            <div key={currentUser.id}>
                                <p>{currentUser.name}</p>
                                <p>{currentUser.country}</p>
                                <p>{currentUser.score}</p>
                            </div>
                        ))}
                    </ul>
                </>
            }
        </div>
    );
}

export default ScoresScreen;