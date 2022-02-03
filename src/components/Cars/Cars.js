import {useState, useEffect} from "react";

import carService from "../../services/car.service";
import Car from "../Car/Car";

const Cars=({object,carsUpdate,carsDelete})=>{
    const [cars,setCars]=useState([]);

    useEffect(()=>{
        carService.getAll().then(value => setCars([...value]))
    },[object])

    const removeCar=(id)=>{
        carService.deleteId(id).then(carsDelete);
    }

    return(
        <div>
            {cars.map(car=><Car key={car.id} car={car} updateCar={carsUpdate} deleteCar={removeCar}/>)}
        </div>
    );
};

export default Cars;