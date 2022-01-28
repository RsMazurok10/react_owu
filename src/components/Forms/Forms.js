import {useState} from "react";
import css from './Form.module.css'


const Forms=({getFilter})=>{
    const[forms,setForms]=useState({name:'',username:'',email:''});

    const formData=(e)=>{
        const eData={...forms,[e.target.name]:e.target.value}
        setForms({...forms,...eData})
        getFilter(eData)
    }

    return(
        <div>
            <form className={css.form}>
                <label><input type="text" value={forms.name} placeholder='name' onChange={formData} name={'name'}/></label>
                <label><input type="text" value={forms.username} placeholder='username' onChange={formData} name={'username'}/></label>
                <label><input type="text" value={forms.email} placeholder='email' onChange={formData} name={'email'}/></label>
            </form>
        </div>
    )
}

export default Forms;
