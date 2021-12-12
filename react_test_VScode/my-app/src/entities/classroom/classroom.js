
import {root} from "../index";


import React, {Component, useState, useEffect } from "react";

import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

import {LessonSmall} from "../lesson/lesson";

import { Link, useParams } from "react-router-dom";

import ArealData from "../../media/classrooms2.js";
//
import {ArealSmall} from "../areal/areal";

import {TimetableSmall} from "../timetable/timetable";

export const classroomRoot = root + "classroom"

//---------------------------------------------tvorba classrooms pomoci props a fetch (GraphQL) (inProgress):--------------------------------------

export const ClassroomSmall = (props) => {
    
    return(
        
               <Link to={classroomRoot + `/${props.code}`}> {props.name}{props.children},</Link> 
        )
}

const tableStyle = {
    color: '#333333',
    width: '100%',
    border: '1px solid black',
    'border-collapse': 'collapse',
    
    //'background-color': '#CCCCCC',
    };

const lineStyle = {
    color: '#333333',
    'background-color': '#CCCCCC',
     //width: '100%',
     'text-align': 'left',
     
    };
const lineStyle2 = {
    color: '#333333',
    'background-color': '#F6F6F6',
    //width: '100%',
    'text-align': 'left',
    };
const textStyle = {
    color: '#333333',
    //width: '100%',
    'text-align': 'left',
    'padding': '5px',

    };

export const ClassroomMed = (props) => {

    return(
        <div>   
                <Card.Body>
                    <Card.Text>                                    
                    <Row><ClassroomSmall name={props.name} code={props.code}/></Row>
                        <table style={tableStyle}>
                        <tbody>
                        <tr style={lineStyle}>
                        <td ><Row><b>code (id):</b> </Row></td>
                        <td style={textStyle}> <Row><ClassroomSmall name={props.code} code={props.code}/></Row></td>
                        </tr>
                        <tr style={lineStyle2}>
                        <td><Row><b>Účel použití:</b> </Row></td>
                        <td style={textStyle}> učebna </td>
                        </tr>
                        <tr style={lineStyle}>
                        <td><Row><b>Patří katedře:</b> </Row></td>
                        <td style={textStyle}> FVT-K206 </td>
                        </tr>
                        <tr style={lineStyle2}>
                        <td><Row><b>Uživatel:</b> </Row></td>
                        <td style={textStyle}><Row>(kancelář-učitel) (učebna-studenti) (skaldy,schodiště,zbytek... asi prázdný)</Row></td>
                        </tr>                        
                        </tbody>
                        </table>
                    </Card.Text>
                </Card.Body>
  
        </div>

    )
}

export const ClassroomCond = (props) => {
    const [expanded, setExpanded] = useState(false);
    var result = <>Error</>
    if (expanded) {
        result = (
            <>                                       
             <Card.Body>
                 <Card.Text>
                     <Row>třída: {<ClassroomMed name={props.name} code={props.code}/>}</Row>                     
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
                    <Row>třída: {<ClassroomSmall name={props.name} code={props.code}/>}</Row>
                    <Row><span className="btn" onClick={() => setExpanded(true)} style={{ color: 'green' }}><b>⇩⇩⇩⇩⇩⇩⇩</b></span></Row>
                </Card.Text>
            </Card.Body>                                                   
            </>
        )
    }
    return result
}


export const ClassroomsLargeAPI = (props) => {
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
        <ClassroomsLarge json={state} code={id}/>
    </div>)
}


export const ClassroomsLarge = (props) => {
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
    for(var index = 0; index < json.languages.length; index++) {
        const sgItem = json.languages[index]
        countries.push(<ClassroomCond name={sgItem.name} code={sgItem.code}/>);
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Seznam tříd v budově <i>{arealName}</i>: </h1>
            {countries}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}


export const ClassroomsListAPI = (props) => {
    const id  = props.id;
    console.log("classromm list id :::: ", id)

    const [state, setState] = useState(
        {'name': "loading",
        'languages' : [{'name':"loading", 'code':"loading"}]}
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
    }, [id] );
    
    console.log("STATE je : ", state, "ajdi:",id)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
        {<ClassroomsList json={state} code={id}/>}
    </div>)
}

export const ClassroomsList = (props) => {
    console.log("PROPS:  ", props)
    const json=props.json
    //const arealName=props.json.name
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
    const countries = []
    for(var index = 0; index < json.languages.length; index++) {
        const sgItem = json.languages[index]
        countries.push(<ClassroomSmall name={sgItem.name} code={sgItem.code}/>);
    }
    //console.log("buldings = ", state)
    return(    
        <Row>
            Třídy: {countries}
        </Row>
    )
}


export const ClassroomInfoLargeAPI = (props) => {
    const  id  = props.id;
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
        <ClassroomsInfoLarge json={state} code={id}/>
    </div>)
}


export const ClassroomsInfoLarge = (props) => {
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
    for(var index = 0; index < json.languages.length; index++) {
        const sgItem = json.languages[index]
        countries.push(<div><ClassroomMed name={sgItem.name} code={sgItem.code}/><TimetableSmall code={props.code+"/rozvrh"} name={"rozvrh"}/></div>);
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Informace o třídě <i>............</i>: </h1>
            {countries}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}