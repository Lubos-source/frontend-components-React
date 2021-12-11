
import {root} from "../index";

import { Link, useParams } from "react-router-dom";

import  Card  from "react-bootstrap/Card";
import { Row, Table} from "react-bootstrap";
import React, {Component, useState, useEffect } from "react";

import {SubjectSmall} from "../subject/subject";
//import {ArealSmall} from "../areal/areal";        //možná ? uvidíme :)
import {Classroom} from "../classroom/classroom";

export const lessonRoot = root + "lesson"

export const LessonSmall = (props) => {

    return (
        <Link to={lessonRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )

    
}

const tableStyle = {
    color: '#333333',
    width: '70%',
    border: '1px solid black',
    'border-collapse': 'collapse',
        
    //'background-color': '#CCCCCC',
    };

export const LessonMed = (props) => {

    return(
        <div>
                <Table striped bordered hover style={tableStyle}>
                    <tr>                                    
                        <td align="left">Název předmětu: </td>
                        <td colSpan="3" align="center"><LessonSmall name={props.name} code={props.code}/></td>
                        <td colSpan="2" align="right">code (id): <b>{props.code}</b> </td>                        
                    </tr>
                    <tr>
                        <td>Semestry: </td>
                        <td colSpan="5"> {props.semestry} </td>
                    </tr>
                </Table>
  
        </div>

    )
}

export const LessonsListLargeAPI = (props) => {
    const { id } = useParams();
    console.log("id v ClassroomTest je : ", id)

    const [state, setState] = useState(
        {'name': "StudyProgName",
        'countries' : [{'name':"name", 'code':"code"}]}
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
    }, [id] )
    
    //console.log("State je : ", state)
    console.log("STATE je : ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
        <LessonsListLarge json={state}/>
    </div>)
}


export const LessonsListLarge = (props) => {
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
    
    const predmety = []
    for(var index = 0; index < json.countries.length; index++) {
        const sgItem = json.countries[index]
        predmety.push(<LessonMed name={sgItem.name} code={sgItem.code} semestry={sgItem.code+"-1/3-"+sgItem.name}/>);
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Seznam předmětů ve studijním programu <i>{arealName}</i>: </h1>
            {predmety}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}


///************---------------------------------------------------------------------------------------******************/


export const LessonLargeAPI = (props) => {
    const { id } = useParams();
    console.log("id v ClassroomLargeAPI je : ", id)

    const [state, setState] = useState(
        {'name': "ALEnotaaak",
        'languages' : [{'name':"name", 'code':"code"}]}
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
                country(code: "`+id+`"){
                    name
                    languages {
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
            .then((result) => setState(result.data.country));
    }, [id] )
    
    //console.log("State je : ", state)
    console.log("STATE je : ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
        <LessonLarge json={state} code={id}/>
    </div>)
}


export const LessonLarge = (props) => {
    //console.log("id v ClassroomTest je : ", id)
    console.log("PROPS:  ", props)
    const json=props.json
    const predmetName=props.json.name
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
    const infopredmet = []
    for(var index = 0; index < json.languages.length; index++) {
        const sgItem = json.languages[index]
        infopredmet.push(<LessonSelectedMed name={sgItem.name} code={sgItem.code}/>);
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Informace o předmětu <i>{predmetName}</i>: </h1>
            <Table>
                <tr>
                    <td>Garant: </td>
                    <td><h3>*fetchnuty garant pro {predmetName}  -  link*</h3></td>
                </tr>
                <tr>
                    <td>Semestry: </td>
                    <td><b>*fetchnuty semestry kdy se {predmetName} učí  -  linky na jednotlivé semestry(filtr podle semestru)?*</b></td>
                    
                </tr>
                <br/>
            </Table>
            <h3>Seznam lekcí(témat):</h3>
            {infopredmet}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}

export const LessonSelectedMed = (props) => {

    return(
        <div>
                <Table striped bordered hover style={tableStyle}>
                    <tr>                                    
                        <td align="left">Název tématu: </td>
                        <td colSpan="3" align="left"> {props.name} </td>
                        <td colSpan="2" align="right">code (id): <b>{props.code}</b> </td>                        
                    </tr>
                    <tr>                                    
                        <td align="left">Vyučující: </td>
                        <td colSpan="5" align="left"> zde budou učitel(é) pro téma {props.name}  -  linky </td>                      
                    </tr>
                </Table>
  
        </div>

    )
}