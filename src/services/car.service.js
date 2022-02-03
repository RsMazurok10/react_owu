import axiosService from "./axios.service";
import {urls} from "../configs/urls";

const carService={
    create:(car)=>axiosService.post(urls.cars,car).then(value => value.data),
    getAll:()=>axiosService.get(urls.cars).then(value => value.data),
    updateId:(id,car)=>axiosService.patch(`${urls.cars}/${id}`,car).then(value => value.data),
    deleteId:(id)=>axiosService.delete(`${urls.cars}/${id}`)
};

export default carService;
