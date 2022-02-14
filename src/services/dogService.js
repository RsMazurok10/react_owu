import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const dogService={
    getAll:()=>axiosService.get(urls.dog,{responseType:'blob'}).then(value => value.data)
}