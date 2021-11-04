
import {root} from "../index";

import {LessonSmall} from "../lesson/lesson";
//import {ArealSmall} from "../areal/areal";        //možná ? uvidíme :)
import {ClassroomSmall} from "../classroom/classroom";

const subjectsRoot = root + "subjects"

export const SubjectSmall = (props) => {
    return(
        <Link to={subjectsRoot}> {props.name} </Link>

    )
}