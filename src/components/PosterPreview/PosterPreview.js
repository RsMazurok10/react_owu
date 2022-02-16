import css from "../../pages/MoviePage/Movie.module.css";
import React from "react";
import {useSelector} from "react-redux";

import Stars from "../Stars/Stars";

const PosterPreview = () => {

    const {white} = useSelector(state => state['themeReducers']);

    const {movie} = useSelector(state => state['moviePageReducer']);

    return (
        <div>
            <div className={white ? css.light_poster : css.dark_poster}>
                <div className={css.poster_wrap}>
                    <div className={white ? css.light_element : css.dark_element}>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="background"/>
                </div>
            </div>
            <div className={white ? css.light_title : css.dark_title}>
                <h2 className={css.title}>{movie.title}</h2>
                <div className={css.rating}>
                    <Stars/>
                    <h4>: {movie.vote_average}</h4>
                    <img src="https://img.icons8.com/dotty/80/000000/person-male.png" className={css.person}/>
                    <h4>{movie.vote_count}</h4>
                </div>
                {movie.tagline && <div className={css.tagline}>"{movie.tagline}"</div>}
            </div>
        </div>
    );
};

export default PosterPreview;