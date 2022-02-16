import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {getMovie} from '../../store/slice/MoviePage.slice';
import css from './Movie.module.css';

import MovieInfo from "../../components/MovieInfo/MovieInfo";
import PosterPreview from "../../components/PosterPreview/PosterPreview";


const MoviePage = () => {
    const {white} = useSelector(state => state['themeReducers']);

    const {movieId} = useParams();

    const {movie, status} = useSelector(state => state['moviePageReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovie(movieId));
    }, []);


    return (
        <div>
            {status === 'pending'}
                <div className={css.movie_wrap}>
                    <PosterPreview/>
                    <MovieInfo/>
                </div>
            }
        </div>
    );
};

export {MoviePage};