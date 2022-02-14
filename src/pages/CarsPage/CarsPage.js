import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import {Outlet} from "react-router-dom";

import css from './Cars.module.css'



const CarsPage = ({btnCar}) => {

    const [сar, setCar] = useState([])

    const changeCar=(btnCar)=>{
        carService.getAll().then(value => setCar(URL.createObjectURL(value)))
    }

    useEffect(() =>{
        carService.getAll().then(value => setCar(URL.createObjectURL(value)))
    }, [])

    useEffect(()=>{
        changeCar(btnCar)
    },[btnCar])

    return (
        <div className={css.cars}>
            <img src={сar} alt="car"/>
            <button onClick={()=>changeCar(btnCar)}>Update</button>
            <Outlet/>
        </div>
    );
};

export default CarsPage;