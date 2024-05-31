import { useRouteError } from "react-router-dom";
import {ERROR_MSG} from '../Utils/constant';
const Error = ()=>{
    const err = useRouteError();
    return (
        <div className="error">
            <h1>{ERROR_MSG}</h1>
            <p>{err.status}</p>
        </div>
    )
}
export default Error;