import React, {useState} from 'react';

import axios from 'axios';
import style from './scoresApiStyle.module.scss';

const Scores = ({ users, setCurrentUsers }) => {

    const [scoresState, setScoresState] = useState(users);

    const [scoreState, setScoreState] = useState({
        userName: "",
        userCountry: "",
        userScore: ""
    });

    const handleNameChange = (e) => {
        const value = e.target.value;
        setScoreState({
            ...scoreState,
            [e.target.name]: value
        });
    };

    const handleCountryChange = (e) => {
        const value = e.target.value;
        setScoreState({
            ...scoreState,
            [e.target.name]: value
        });
    };

    const handleScoreChange = (e) => {
        const value = e.target.value;
        setScoreState({
            ...scoreState,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name: scoreState.userName,
            country: scoreState.userCountry,
            score: scoreState.userScore
        };

        axios.post('http://localhost:8080/api/users/add-user', userData).then((response) => {
            console.log(response.status);
            console.log('DATA', response.data);
            setScoresState(response.data);
            setCurrentUsers(response.data);
        });
    };

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:8080/api/users/${userId}/delete-user`).then((response) => {
            console.log('Delete successful');
            console.log('DATA', response.data);
            setScoresState(response.data);
        });
    }

    const handleSelectUpdate = (userId, userName, userCountry, userScore) => {
        const userData = {
            name: userName,
            country: userCountry,
            score: userScore
        }
        axios.put(`http://localhost:8080/api/users/${userId}/select-user`, userData).then((response) => {
            console.log('Update sucessful');
            console.log('DATA', response.data);
            setScoresState(response.data);
        });
    }

    return (
        
        <div className={style.userForm}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userName"
                    value={scoreState.name}
                    onChange={handleNameChange}
                    placeholder='Enter name'
                />
                <input
                    type="text"
                    name="userCountry"
                    value={scoreState.country}
                    onChange={handleCountryChange}
                    placeholder='Enter country'
                />
                <input
                    type="number"
                    name="userScore"
                    value={scoreState.score}
                    onChange={handleScoreChange}
                    placeholder='Enter score'
                />
                <button type="submit">Submit Score</button>
            </form>
            <h3 className={style.h3}>All Users</h3>
            <div className={style.usersContainer}>
                {scoresState.map(user => (
                    <div className={style.userContainer} key={user.id}>
                        <p className={user.selected ? style.selected : null} onClick={() => handleSelectUpdate(user.id, user.name, user.country, user.score)}>{user.name}<button onClick={() => handleDelete(user.id)}>x</button></p>
                    </div>
                ))}
            </div>
        </div>
        
    );

}

export default Scores;