import { Link } from "react-router-dom";
import {root} from "../index";


export const timetableRoot = root + "timetable"

export const TimetableSmall = (props) => {

    return (
        <Link to={timetableRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )

    
}