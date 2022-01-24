import React from "react";

const User = (props) => {
    const {id, name, username, email} = props;

    return (
        <div className='user_div'>
            <h4>{id}. {name}, {username}: {email}</h4>
        </div>
    );
};

export default User;