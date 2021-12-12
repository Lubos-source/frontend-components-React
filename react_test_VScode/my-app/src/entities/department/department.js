import { Link } from "react-router-dom";
import {root} from "../index";


export const departmenRoot = root + "departmen"

export const DepartmenSmall = (props) => {

    return (
        <Link to={departmenRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )

    
}