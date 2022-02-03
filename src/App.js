import {useState} from "react";

import Forms from "./components/Forms/Forms";
import Cars from "./components/Cars/Cars";
import css from './App.module.css'

function App() {

    const [car, setCar] = useState(null);
    const [updateCar, setUpdateCar] = useState({});


    return (
        <div className={css.wrap}>
            <Forms carsDelete={setCar} carForUpdate={updateCar}/>
            <Cars object={car} carsDelete={setCar} carsUpdate={setUpdateCar}/>
        </div>
    );
};

export default App;
