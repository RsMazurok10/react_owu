import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getMovieGenre} from '../../store/slice/MovieGenre.slice';
import {Movie} from '../../components/Movie/Movie';
import css from '../../style.module.css';


const MovieGenre = () => {
    const {light} = useSelector(state => state['themeReducers']);

    const {routeId} = useParams();

    const {page, status} = useSelector(state => state['movieGenreReducer']);

    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieGenre({
            genreId: routeId,
            pageNumber: 1
        }));
        setCurrentPageNumber(1);
    }, [routeId]);

    useEffect(() => {
        dispatch(getMovieGenre({
            genreId: routeId,
            pageNumber: currentPageNumber
        }));
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


    const movieArray = page.results;

    return (
        <div>
            <div className={light ? css.light : css.dark}>
                {movieArray && movieArray.map(movie =>
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

export {MovieGenre};