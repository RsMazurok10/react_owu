import {useState, useEffect} from "react";

import Launch from './launch';

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(response => setLaunches(response))
    }, [])

    return (
        <div>
            {launches.map(response=>
            <Launch
                key={response.flight_number}
                name={response.mission_name}
                year={response.launch_year}
                patch={response.links.mission_patch_small}
            />
            )}
        </div>
    )
}

export default Launches;