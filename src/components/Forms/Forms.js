import {useState, useEffect} from "react";

import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import carService from "../../services/car.service";
import {carValidator} from "../../validators/car.validator";
import css from './Forms.module.css'

const Forms = ({carsDelete, carForUpdate}) => {
    const {id, model, price, year} = carForUpdate;

    const [errorForm, setErrorForm] = useState({});

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const {
        register, handleSubmit, setValue, formState: {errors}
    } = useForm({resolver: joiResolver(carValidator)});


    //1 спосіб
    const submit = (car) => {
        carService.create(car).then(value => console.log(value)).then(carsDelete).catch(errors => {
            setErrorForm(errors.response.data)
        })
    }


    const update = (car) => {
        carService.updateId(car.id, car).then(carsDelete)
    }


    //const submit = async (car) => {
    //    try {
    //        let newCar;
    //        if (id) {
    //            newCar = await carService.updateId(id, car);
    //        }else{
    //            newCar=await carService.create(car).then(value => console.log(value));
    //        }
    //        carsDelete(newCar);
    //    }
    //    catch(error){
    //        setErrorForm(error.response.data);
    //    }
    //}

    return (
        <div>
            <form onSubmit={carForUpdate ? handleSubmit(submit) : handleSubmit(update)} className={css.inputs}>
                <div>
                    <input type="text" placeholder='model' defaultValue={''} {...register('model')}/>
                    {errors.model && <span>{errors.model.message}</span>}
                </div>
                <div>
                    <input type="text" placeholder='price' defaultValue={''} {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </div>
                <div>
                    <input type="text" placeholder='year' defaultValue={''} {...register('year')}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Forms;

