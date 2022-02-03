import React from "react";

import css from './Car.module.css'

const Car = ({car, updateCar, deleteCar}) => {
    const {id, model, price, year} = car;

    return (
        <div className={css.car}>
            <div>ID: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => updateCar(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export default Car;



