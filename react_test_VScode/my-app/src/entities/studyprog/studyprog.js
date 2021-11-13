
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

export const ProgSubject = () => {
    const arealRoot = root + "studyprog/subject"
        return(
            <div>
            <h1>Předměty:</h1>
            <ul>
                <li>
                Aerodynamika a konstrukce letadel
                </li>
                <li>
                Aerodynamika a konstrukce letadel II
                </li>
                <li>
                Aerodynamika a konstrukce letadel III
                </li>
                <li>
                    ....
                </li>
            </ul>
            </div>
        )
    }

    export const ProgLesson = () => {
        const arealRoot = root + "studyprog/lesson"
            return(
                <div>
                <h1>Lekce:</h1>
                <ul>
                    <li>
                    Aerobik
                    </li>
                    <li>
                    Bakalářský seminář
                    </li>
                    <li>
                    Diplomový seminář 
                    </li>
                    <li>
                        ....
                    </li>
                </ul>
                </div>
            )
        }

        export const ProgCourse = () => {
            const arealRoot = root + "studyprog/course"
                return(
                    <div>
                    <h1>Kurzy:</h1>
                    <ul>
                        <li>
                        ATSEP –  kvalifikační kurz: Surveillance Data Transmision
                        </li>
                        <li>
                        ATSEP –  obnovovací/konverzní kurz: ATM/CNS Data Processing Domain
                        </li>
                        <li>
                        Kurz generálního štábu MO
                        </li>
                        <li>
                            ....
                        </li>
                    </ul>
                    </div>
                )
            }