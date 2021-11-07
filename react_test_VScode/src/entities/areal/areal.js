import MapaSumavska from "../../media/sumak.png";

import {root} from "../index";

import {ClassroomSmall} from "../classroom/classroom";

const arealRoot = root + "areal"

export const ArealLarge = () => {

        return(
            <div>
            <div>TEST rootingu</div>


            <div>
                <map name="sumavska">
                    <area shape="rect" coords="276,613,400,649" href="šumák1" target="_self" alt="Š1"/>
                    <area shape="rect" coords="265,442,329,483" href="šumák3" target="_self" alt="Š3"/>
                    <area shape="rect" coords="193,437,250,487" href="šumák4" target="_self" alt="Š4"/>
                    <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href="asiŠ5-zakroucenabudova" target="_self" alt="zakroucenaBudovaAsiŠ5" />
                    <area shape="rect" coords="97,378,141,415" href="šumák5A" target="_self" alt="Š5A"/>
                    <area shape="rect" coords="97,169,143,253" href="šumák5B" target="_self" alt="Š5B"/>
                    <area shape="rect" coords="97,88,220,143" href="šumák6" target="_self" alt="Š6"/>
                    <area shape="rect" coords="284,88,419,141" href="šumák8" target="_self" alt="Š8"/>
                    <area shape="rect" coords="359,160,419,287" href="šumák9" target="_self" alt="Š9"/>
                    <area shape="rect" coords="359,288,419,404" href="šumák9A" target="_self" alt="Š9A"/>
                </map>
                <img usemap="#sumavska" src={MapaSumavska} alt="mapa Sumavska" />              

            </div>

            </div>
        )

}