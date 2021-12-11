import {root} from "../index";

//import {SubjectSmall} from "../subject/subject";
//import {LessonSmall} from "../lesson/lesson";
import { Link } from "react-router-dom";

import  Card  from "react-bootstrap/Card";
import { Row, Table} from "react-bootstrap";


import {useParams } from "react-router-dom";

import React, {Component, useState, useEffect } from "react";
import {LessonSmall} from "../lesson/lesson";

export const progRoot = root + "studyprog"

export const ProgLargeAPI = (props) => {
    const [state, setState] = useState(
        {'continents':[]}
    );
    useEffect(() => {
        fetch('https://countries.trevorblades.com/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              # Write your query or mutation here
              query {
                continents {
                  code
                  name
                }
              }              
                `,
              variables: {
                now: new Date().toISOString(),
              },
            }),
          })
            .then((res) => res.json())
            .then((result) => setState(result.data));
            
    }, [] )
    
    //POTOM BUDE: [props.id] - závislost kdy se udělá fetch (vždy když změníme id)!
    //console.log("po fetchi:", state)
    return(
        <div>
            <ProgLarge json={state}/>
        </div>
    )
}

export const ProgLarge = (props) => {
    const json=props.json


    //setState(props)
    console.log("----obsah props:--- ", json)

    
    const programy = []
    for(var index = 0; index < json.continents.length; index++) {
        const sgItem = json.continents[index]
        programy.push(<ProgMedium name={sgItem.name} code={sgItem.code}/>);
    }
console.log("obsah continents: ",programy)
    return (<div>
                <Table striped bordered hover>
                  {programy}                    
                </Table>
                
                <p><b>původní JSON soubor fatchnuty z GraphQL:</b> {JSON.stringify(json)}</p>

            </div>)
}

const tdStyle = {
    'colspan': "2",
    'align': "right",
    
    
    //'background-color': '#CCCCCC',
    };

const tableStyle = {
    color: '#333333',
    width: '110%',
    border: '1px solid black',
    'border-collapse': 'collapse',
        
    //'background-color': '#CCCCCC',
    };


export const ProgMedium = (props) => {

    //VYŘEŠENO zmizení [0]teho prvku ----> ale je to správně ? ---> NENÍ TO NEJLEPŠÍ, NĚKDE SE OBJEVÍ CHYBA !!!
    const state ={
        'name': props.name,
        'code': props.code
    };
    console.log("ProgMedium state: ", state)
    //useEffect(()=>{})
    return (
            <Table striped bordered hover style={tableStyle}>
            <tbody>
                    <tr>
                        <td>Název: </td>
                        <td><b>{state.name}</b></td>
                        <td>Typ programu: <b>P</b></td>
                        <td>Forma studia: <b>prenzenční</b></td>
                    </tr>
                    <tr>
                        <td>Fakulta: </td>
                        <td><b>*FAKULTA*</b></td>
                        <td colSpan="2" align="right">Garant: <b>ppl. Ing. Luděk Jedlička, Ph.D **link</b></td>
                    </tr>
                    <tr>
                        <td>id: </td>
                        <td><b>{state.code}</b></td>
                        <td colSpan="2" align="right"> <b><ProgSmall name="předměty" code={state.code}/></b></td>
                    </tr>
            </tbody>
            </Table>
        
    )

}

export const ProgSmall = (props) => {
    
    return(
    
            <Link to={progRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )
}

/*
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
            */