import ActivitiesAPI from '../../components/kidsActivitiesAPI/activities.js'
import BooksAPI from "../../components/BooksApi/booksAPI";
import React from "react";
import style from './bookStyle.module.scss'

const BooksScreen = () => {
    return (
        <div className={style.booksStyle}>
            <ActivitiesAPI /><BooksAPI/>
        </div>
    )
}

export default BooksScreen;