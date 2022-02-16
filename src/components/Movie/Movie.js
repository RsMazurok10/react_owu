import React from 'react';

import css from '../../style.module.css'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Movie = ({movie}) => {
    const {white} = useSelector(state => state['themeReducers']);
    return (

        <div key={movie.id} className={white ? css.light_wrap : css.dark_wrap}>
            <Link to={`../../movie/${movie.id}`} state={movie.id}>
                <div className={css.movie_wrap}>
                    <div className={css.picture_wrap}>
                        {movie.poster_path &&
                                <img className={css.picture}
                                     src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="poster"/>
                        }
                    </div>
                    <div className={css.film__title}>{movie.title}</div>
                </div>
            </Link>
        </div>


    );
};

export {Movie};