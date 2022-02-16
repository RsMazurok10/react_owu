import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getMoviesPage} from "../../store/slice/MoviesPage.slice";

import css from '../../style.module.css'
import {Movie} from '../../components/Movie/Movie';


const MoviesList = () => {

    const {light} = useSelector(state => state['themeReducers']);

    const [currentPageNumber, setCurrentPageNumber] = useState([1]);

    const {page, status} = useSelector(state => state['moviesPageReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesPage(currentPageNumber));
    }, [currentPageNumber]);

    const nextPage = () => {
        if (currentPageNumber < page.total_pages) {
            setCurrentPageNumber(+currentPageNumber + 1);
        }
    };

    const previousPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber(+currentPageNumber - 1);
        }
    };

    const arrayMovie = page.results;

    return (
        <div>
            <h3 className={light?css.title_list:css.title_list_dark}>Список фільмів: </h3>
            <div className={light ? css.light : css.dark}>
                {arrayMovie && arrayMovie.map(movie =>
                    <Movie key={movie.id} movie={movie}/>
                )}
            </div>
            <div className={light ? css.light_buttons : css.dark_buttons}>
                <button onClick={() => previousPage()}> Попередня сторінка</button>
                <button onClick={() => nextPage()}> Наступна сторінка</button>
            </div>
        </div>
    );
};

export {MoviesList};