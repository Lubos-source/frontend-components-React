
import {root} from "../index";

import {Link, useParams } from "react-router-dom";
import {SubjectSmall} from "../subject/subject";
//import {ArealSmall} from "../areal/areal";        //možná ? uvidíme :)
import {ClassroomSmall} from "../classroom/classroom";

const lessonRoot = root + "lesson"

export const LessonSmall = (props) => {

    return (
        <Link to={lessonRoot + `/${props.id}`}>{props.name}</Link>
    )

    
}