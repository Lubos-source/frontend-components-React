
import {root} from "../index";

import {SubjectSmall} from "../subject/subject";
import {LessonSmall} from "../lesson/lesson";
import { Link } from "react-router-dom";

const studyprogRoot = root + "studyprog"

export const ProgList = () => {

    return(
        <div>
        <ul>
            <li>
                <Link to={studyprogRoot+"/subject"}>Predmety</Link>
            </li>
            <li>
                <Link to={studyprogRoot+"/lesson"}>Lekce</Link>
            </li>
            <li>    
                <Link to={studyprogRoot+"/course"}>Kurzy</Link>
            </li>
        </ul>
        </div>
    )
}