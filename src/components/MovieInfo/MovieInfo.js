import css from "../../pages/MoviePage/Movie.module.css";
import {Link, useParams} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const MovieInfo = () => {

    const {white} = useSelector(state => state['themeReducers']);

    const {movie} = useSelector(state => state['moviePageReducer']);


    return (
        <div className={white ? css.light_data : css.dark_data}>
            {movie.genres &&
            <div className={css.genre_block}>
                <h3>Жанри: </h3>
                <div className={css.genre_data}>
                    {movie.genres.map(genre =>
                        <Link key={genre.id} to={`../../genres/${genre.id}`} state={genre}>
                            <div className={css.genre}>
                                {genre.name}
                            </div>
                        </Link>
                    )}
                </div>
            </div>
            }
            <h3 className={css.release__date}>
                Бюджет : {movie.budget} $
            </h3>
            <h3 className={css.release__date}>
                Дата прем'єри: {movie.release_date}
            </h3>
            <div className={css.overview}>
                <h3>Опис: </h3>
                <p>{movie.overview}</p>
            </div>

            {movie.production_companies &&
            <div className={css.companies__block}>
                <div className={css.companies}>
                    {movie.production_companies.map(company =>
                        <div key={company.id} className={css.company}>
                            <h4>Name: {company.name}</h4>
                            <h5>Country: {company.origin_country}</h5>
                            {company.logo_path &&
                            <img src={'https://image.tmdb.org/t/p/w500' + company.logo_path}
                                 alt={company.name}/>
                            }
                        </div>
                    )}
                </div>
            </div>
            }
        </div>
    )
}

export default MovieInfo;