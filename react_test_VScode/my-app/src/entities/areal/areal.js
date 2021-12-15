import MapaSumavska from "../../media/sumak_svg.SVG";
import MapaCP from "../../media/cernapole_svg.SVG";
import MapaKOU from "../../media/kounicova_svg.SVG";
import MapaBAB from "../../media/babak_svg.SVG";

import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import ArealData from "../../media/classrooms2.js";

import { Link, useParams } from "react-router-dom";

import React, {Component, useState, useEffect } from "react";

import {root} from "../index";

import {ClassroomsListAPI} from "../classroom/classroom";
import { useButtonProps } from "@restart/ui/esm/Button";


export const arealRoot = root + "areals"


export const ArealLargeSUM = () => {
    const arealRoot = root + "areals/5"
        return(
            <div>
            
            <div>
                <map name="sumavska">
                    <area shape="rect" coords="276,613,400,649" href={arealRoot+"/šumák1"} target="_self" alt="Š1"/>
                    <area shape="rect" coords="265,442,329,483" href={arealRoot+"/šumák3"} target="_self" alt="Š3"/>
                    <area shape="rect" coords="193,437,250,487" href={arealRoot+"/šumák4"} target="_self" alt="Š4"/>
                    <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/asiŠ5-zakroucenabudova"} target="_self" alt="zakroucenaBudovaAsiŠ5" />
                    <area shape="rect" coords="97,378,141,415" href={arealRoot+"/šumák5A"} target="_self" alt="Š5A"/>
                    <area shape="rect" coords="97,169,143,253" href={arealRoot+"/šumák5B"} target="_self" alt="Š5B"/>
                    <area shape="rect" coords="97,88,220,143" href={arealRoot+"/šumák6"} target="_self" alt="Š6"/>
                    <area shape="rect" coords="284,88,419,141" href={arealRoot+"/šumák8"} target="_self" alt="Š8"/>
                    <area shape="rect" coords="359,160,419,287" href={arealRoot+"/šumák9"} target="_self" alt="Š9"/>
                    <area shape="rect" coords="359,288,419,404" href={arealRoot+"/šumák9A"} target="_self" alt="Š9A"/>
                </map>
                <img usemap="#sumavska" src={MapaSumavska} alt="mapa Sumavska" />              

            </div>

            </div>
        )

}

export const ArealLargeCP = () => {
    const arealRoot = root + "areals/2"
    return(
        <div>

        <div>
            <map name="cernapole">
                <area shape="rect" coords="276,613,400,649" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="265,442,329,483" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="193,437,250,487" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/..."} target="_self" alt="." />
            </map>
            <img usemap="#cernapole" src={MapaCP} alt="mapa Cerna Pole" />              

        </div>

        </div>
    )

}

export const ArealLargeKOU = () => {
const arealRoot = root + "areals/7"
    return(
        <div>    
    
        <div>
            <map name="kounicova">
                <area shape="rect" coords="276,613,400,649" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="265,442,329,483" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="193,437,250,487" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/..."} target="_self" alt="." />
            </map>
            <img usemap="#kounicova" src={MapaKOU} alt="mapa Kounicova a Soudni" />              
        </div>
    
        </div>
    )
    
}

export const ArealLargeBAB = () => {
const arealRoot = root + "areals/6"
    return(
        <div>        
        
        <div>
            <map name="babak">
                <area shape="rect" coords="276,613,400,649" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="265,442,329,483" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="193,437,250,487" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/..."} target="_self" alt="." />
            </map>
            <img usemap="#babak" src={MapaBAB} alt="mapa Jana Babaka" />              
        
        </div>
        
        </div>
    )
        
}

//---------------------------------Nové, správné provedení pomocí FETCH (GraphQL)-----------------------------

export const ArealLargeAPI = (props) => {
    const [state, setState] = useState(
        {'areal':[{'name':'name', 'id':'id'}]}
    );
    useEffect(() => {
        fetch('http://localhost:50001/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              # Write your query or mutation here
              query {
                areal(id:4214) {
                    buildings {
                        id
                        name
                        rooms {
                            id
                            name
                        }
                    }
                }
              }              
                `,
              variables: {
                now: new Date().toISOString(),
              },
            }),
          })
            .then((res) => res.json())
            .then((result) => setState(result.data.areal));
            
    }, [] );
    
    //POTOM BUDE: [props.id] - závislost kdy se udělá fetch (vždy když změníme id)!
    //console.log("po fetchi:", state)
    return(
        <div>
            <ArealLarge json={state}/>
        </div>
    )
}


export const ArealLarge = (props) => {
    const json=props.json

/*
    const [state, setState] = useState(
        {
            'continents': //areals
            [{
                'name': "name", //jmeno arealu
                'code': "code", //id arealu
            }]
            
        });
*/

    //setState(props)
    console.log("----obsah props:--- ", json)

    
    const continents = []
    for(var index = 0; index < json.continents.length; index++) {
        const sgItem = json.continents[index]
        continents.push(<ArealMedium name={sgItem.name} code={sgItem.code}/>);
    }

    return (<div>
                               
                <p><b>Seznam areálů: </b> <td>  {continents} </td></p>                
                <p><b>původní JSON soubor fatchnuty z GraphQL:</b> {JSON.stringify(json)}</p>

            </div>)
}



export const ArealMedium = (props) => {

    //VYŘEŠENO zmizení [0]teho prvku ----> ale je to správně ? ---> NENÍ TO NEJLEPŠÍ, NĚKDE SE OBJEVÍ CHYBA !!!
    const state ={
        'name': props.name,
        'code': props.code
    };
    console.log("ArealMedium state: ", state)
    //useEffect(()=>{})
    return (
        <Card>
            <Card.Header>Název AREÁLU: <b>{state.name}</b></Card.Header> 
            <Card.Text>
                <Row>continent CODE: {state.code}</Row>
                <ArealSmall name={" budovy: " + state.name} code={state.code}/>
            </Card.Text>
        {/*<Link to={arealRoot + `/${props.code}`}>{props.name}{props.children}</Link>*/}
        </Card>
    )

}

export const ArealSmall = (props) => {
    
    return(
    
            <Link to={arealRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )
}



export const buildingRoot=arealRoot+"/building"

export const BuildingSmall = (props) => {
    
    return(
        <Row>
               budova: <Link to={buildingRoot + `/${props.code}`}> {props.name}{props.children}</Link> 
        </Row>)
}

export const BuildingMedium = (props) => {

    //console.log("props code v building je: ", props.code)
    return(
        <div>
                <Card.Body>
                    <Card.Text>                                    
                        <Row>code (id): {props.code}</Row>
                        <Row>{<ClassroomsListAPI id={props.code}/>}</Row>
                    </Card.Text>
                </Card.Body>
  
        </div>

    )
}

export const BuildingsCondition = (props) => {
    const [expanded, setExpanded] = useState(false);
    var result = <>Error</>
    if (expanded) {
        result = (
            <>                                       
             <Card.Body>
                 <Card.Text>
                     <Row>{<BuildingSmall name={props.name} code={props.code}/>}</Row>
                     <Row>{<BuildingMedium name={props.name} code={props.code}/>}</Row>                     
                 </Card.Text>
             </Card.Body>              
         <Row><span className="btn" onClick={() => setExpanded(false)} style={{ color: 'red' }}><b>⇪⇪⇪⇪⇪⇪⇪⇪⇪</b></span></Row>
                                
            </>
        )
    } else {
        result = (
            <>                
            <Card.Body>
                <Card.Text>
                    <Row>{<BuildingSmall name={props.name} code={props.code}/>}</Row>
                    <Row><span className="btn" onClick={() => setExpanded(true)} style={{ color: 'green' }}><b>⇩⇩⇩⇩⇩⇩⇩</b></span></Row>
                </Card.Text>
            </Card.Body>                                                   
            </>
        )
    }
    return result
}


export const BuildingsLargeAPI = (props) => {
    const { id } = useParams();
    console.log("id v ClassroomTest je : ", id)

    const [state, setState] = useState(
        {'name': "loading",
        'countries' : [{'name':"loading", 'code':"loading"}]}
    );
    useEffect(() => {
        fetch('https://countries.trevorblades.com/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query {
                continent(code : "`+id+`"){
                name
                countries
                {
                  name
                  code
                }
              }
              }              
                `,
              variables: {
                now: new Date().toISOString(),
              },
            }),
          })
            .then((res) => res.json())
            .then((result) => setState(result.data.continent));
    }, [id] );
    
    //console.log("State je : ", state)
    console.log("STATE je : ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
        <BuildingsLarge json={state}/>
    </div>)
}


export const BuildingsLarge = (props) => {
    //console.log("id v ClassroomTest je : ", id)
    console.log("PROPS:  ", props)
    const json=props.json
    const arealName=props.json.name
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
    const countries = []
    for(var index = 0; index < json.countries.length; index++) {
        const sgItem = json.countries[index]
        countries.push(<BuildingsCondition name={sgItem.name} code={sgItem.code}/>);
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Seznam budov v areálu <i><ArealSmall name={arealName} code={""}/></i>: </h1>
            {countries}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}