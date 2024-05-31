import { useState } from "react";

const User = (props) =>{
    const name = props.name;
    const count = useState(0);
    return (
        <div className="user-container">
            <h2>Name: {name}</h2>
            <h3>Count: {count}</h3>
            <h3>Location: Melbourne, Pakenham</h3>
        </div>
    )
}

export default User;