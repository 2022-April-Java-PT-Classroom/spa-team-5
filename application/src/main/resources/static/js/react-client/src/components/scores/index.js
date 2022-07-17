import React, {useState} from 'react';

import axios from 'axios';
import style from './style.module.scss'

const Scores = ({ users }) => {

    const [scoresState, setScoresState] = useState(users);

    const [scoreState, setScoreState] = useState({
        userName: "",
        userCountry: "",
        userScore: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setScoreState({
            ...scoreState,
            [e.target.value]: value
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
            <form onSumbit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={scoreState.name}
                    onChange={handleChange}
                    placeholder='Enter name/country/score of user'
                    />
                    <button type="submit">Add User</button>
            </form>
            <h3>All Users</h3>
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