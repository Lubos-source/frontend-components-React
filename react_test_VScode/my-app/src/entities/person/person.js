import { Link } from "react-router-dom";
import {root} from "../index";


export const personRoot = root + "person"

export const PersonSmall = (props) => {

    return (
        <Link to={personRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )

    
}