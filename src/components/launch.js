import React from "react";

const Launch = (props) => {
    const {name, year, patch} = props;

    return (
        <div className='launch_div'>
            <div>
                <h5>{name}</h5>
                <h5>{year}</h5>
            </div>
            <img
                src={patch}
                alt={name}/>
        </div>
    )
}

export default Launch;