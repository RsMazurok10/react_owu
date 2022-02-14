import React, {useEffect, useState} from 'react';

import {catService} from "../../services/catService";
import {Outlet} from "react-router-dom";

import css from './Cats.module.css'


const CatsPage = ({btnCat}) => {

    const [cat, setCat] = useState([])

    const changeCat=(btnCat)=>{
        catService.getAll().then(value => setCat(URL.createObjectURL(value)))
    }

    useEffect(() =>{
        catService.getAll().then(value => setCat(URL.createObjectURL(value)))
    }, [])


    useEffect(()=>{
        changeCat(btnCat)
    },[btnCat])


    return (
        <div className={css.cats}>
            <img src={cat} alt="cat"/>
            <button onClick={()=>changeCat(btnCat)}>Update</button>
            <Outlet/>
        </div>
    );
};

export default CatsPage;