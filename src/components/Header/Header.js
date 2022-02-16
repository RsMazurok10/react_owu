import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Header.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {switchTheme} from '../../store';

const Header = () => {
    const {white} = useSelector(state => state['themeReducers']);

    const dispatch = useDispatch();

    const switchTheme1 = () => {
        dispatch(switchTheme());
    };


    return (
        <div className={white ? css.light_header : css.dark_header}>
            <div className={white ? css.light_nav : css.dark_nav}>
                <NavLink to={'/'}>Films</NavLink>
                <NavLink to={'/genres'}>Genre</NavLink>
            </div>
            <div>
                <button onClick={() => switchTheme1()}
                        className={white ? css.light_switch : css.dark_switch}>
                    {white ? 'Dark Theme' : 'Light Theme'}
                </button>
            </div>
        </div>
    );
};

export {Header};