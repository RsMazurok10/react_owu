import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const carService={
    getAll:()=>axiosService.get(urls.car,{responseType:'blob'}).then(value => value.data)
}