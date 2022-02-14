import React, {useEffect, useState} from 'react';

import {dogService} from "../../services/dogService";
import {Outlet} from "react-router-dom";

import css from './Dogs.module.css'

const DogsPage = ({btnDog}) => {

    const [dog, setDog] = useState([])

    const changeDog=(btnDog)=>{
        dogService.getAll().then(value => setDog(URL.createObjectURL(value)))
    }


    useEffect(() =>{
        dogService.getAll().then(value => setDog(URL.createObjectURL(value)))
    }, [])

    useEffect(()=>{
        changeDog(btnDog)
    },[btnDog])


    return (
        <div className={css.dogs}>
            <img src={dog} alt="dog"/>
            <button onClick={()=>changeDog(btnDog)}>Update</button>
            <Outlet/>
        </div>
    );
};

export default DogsPage;