import {axiosService} from "./axiosService";

import {urls} from "../configs/urls";

export const catService={
    getAll:()=>axiosService.get(urls.cat,{responseType:'blob'}).then(value => value.data)
}