import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, Outlet} from 'react-router-dom';


import css from '../../pages/GenrePage/genrePage.module.css';
import {getAllGenres} from "../../store/slice/GenrePage.slice";

const GenreBadge = () => {
    const {light} = useSelector(state => state['themeReducers']);

    const {genres} = useSelector(state => state['genrePageReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    const genresArray = genres.genres;

    return (
        <div className={light ? css.light_genre : css.dark_genre}>
            <h3 className={light ? css.light_name : css.dark_name}>Genre:</h3>
            <div className={css.genre__wrap}>
                {genresArray && genresArray.map(genre =>
                    <NavLink key={genre.id} to={genre.id + ''} state={genre}>
                        <div key={genre.id} className={css.genre}>
                            {genre.name}
                        </div>
                    </NavLink>
                )}
            </div>
            <Outlet/>
        </div>
    );
};

export {GenreBadge};