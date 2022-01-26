import css from './user_info.module.css'

const UserInfo=({user,getUserId})=>{
    const {id,name,username,email}=user;

    return(
        <div className={css.user_info}>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <button onClick={()=>getUserId(id)} className={css.info}>Get Posts</button>
        </div>
    )
}

export default UserInfo;