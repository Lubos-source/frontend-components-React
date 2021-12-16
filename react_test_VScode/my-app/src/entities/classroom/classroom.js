
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
        
               <Link to={classroomRoot + `/${props.arealid},${props.buildingid},${props.classroomid}`}> {props.name}{props.children},</Link> 
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
                    <Row><b><ClassroomSmall name={props.name} arealid={props.arealid} buildingid={props.buildingid} classroomid={props.classroomid}/></b></Row>
                        <table style={tableStyle}>
                        <tbody>
                        <tr style={lineStyle}>
                        <td ><Row><b>code (id):</b> </Row></td>
                        <td style={textStyle}> <Row>{props.classroomid}</Row></td>
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
                     <Row>třída: {<ClassroomMed name={props.name} arealid={props.arealid} buildingid={props.buildingid} classroomid={props.classroomid}/>}</Row>                     
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
                    <Row>třída: {<b><ClassroomSmall name={props.name} arealid={props.arealid} buildingid={props.buildingid} classroomid={props.classroomid}/></b>}</Row>
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
    console.log("typ: ",id)
    const arealid=id.split(',')[0]
    const buildingid=id.split(',')[1]
    
    console.log("id v ClassroomLargeAPI je : ", id, " arealid: ",arealid, " buidlingid: ",buildingid)


    const [state, setState] = useState(
        {'id':'id',
        'name':'name',
        'buildings':[{'areal':{'id':'id'},'id':'id','name':'name','rooms':[{'id':'id','name':'name'}]}]
    }
    );
    useEffect(() => {
        fetch('http://localhost:50001/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query {
                areal(id:`+arealid+`){
                    id
                    name
                    buildings{
                        areal{
                            id
                            }
                        id
                        name
                        rooms{
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
    }, [arealid] )
    
    
    console.log("STATE je : ", state)
    return(                                                        
    <div>   
        <ClassroomsLarge json={state} arealid={arealid} buildingid={buildingid}/>
    </div>)
}


export const ClassroomsLarge = (props) => {
    
    console.log("PROPS:  ", props)
    const json=props.json
    const arealName=props.json.name
    const arealid=props.arealid
    const buildingid=props.buildingid
    var buildingname=props.name
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
        const buildings = []
        for(var index = 0; index < json.buildings.length; index++) {
            const rooms = []

            if(buildingid===json.buildings[index].id){
                for(var index2 = 0; index2 < json.buildings[index].rooms.length; index2++) {
                    const sgItem2 = json.buildings[index].rooms[index2]
                    rooms.push(<ClassroomCond name={sgItem2.name} arealid={arealid} buildingid={buildingid} classroomid={sgItem2.id}/>);
                }
                buildingname=json.buildings[index].name
            }            
            
            buildings.push(rooms);
            console.log("Jen buidlings for: ",rooms)
            
        }
    
    return(                                                        
    <div>   <h1>Seznam tříd v budově <i>{buildingname}</i>: </h1>
            {buildings}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}

/*
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
*/
export const ClassroomsList = (props) => {
    console.log("PROPS:  ", props)
    const json=props.json
    const state ={
        'name': props.name,
        'id': props.id,
    };
    //const arealName=props.json.name
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    /*
    const countries = []
    for(var index = 0; index < json.languages.length; index++) {
        const sgItem = json.languages[index]
        countries.push(<ClassroomSmall name={sgItem.name} code={sgItem.code}/>);
    }*/
    //console.log("buldings = ", state)
    return(    
        <Row>
            ♣ <b>{state.name}</b> <i> id - </i> {state.id}
        </Row>
    )
}


export const ClassroomInfoLargeAPI = (props) => {
    const { id } = useParams();
    console.log("id je : ",id)
    const arealid=id.split(',')[0]
    const buildingid=id.split(',')[1]
    const classroomid=id.split(',')[2]
    console.log("id v ClassroomLargeAPI je : ", id)

    const [state, setState] = useState(
        {'id':'id',
        'name':'name',
        'buildings':[{'areal':{'id':'id'},'id':'id','name':'name','rooms':[{'id':'id','name':'name'}]}]
    }
    );
    useEffect(() => {
        fetch('http://localhost:50001/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query {
                areal(id:`+arealid+`){
                    id
                    name
                    buildings{
                        areal{
                            id
                            }
                        id
                        name
                        rooms{
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
    }, [id] )
    
    
    console.log("STATE je : ", state)
    return(                                                        
    <div>   
        <ClassroomsInfoLarge json={state} arealid={arealid} buildingid={buildingid} classroomid={classroomid}/>
    </div>)
}


export const ClassroomsInfoLarge = (props) => {
    
    console.log("PROPS:  ", props)
    const json=props.json
    const arealid=props.arealid
    const buildingid=props.buildingid
    const classroomid=props.classroomid
    var classroomname="empty"
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
        const buildings = []
        for(var index = 0; index < json.buildings.length; index++) {
            const rooms = []

            if(buildingid===json.buildings[index].id){
                for(var index2 = 0; index2 < json.buildings[index].rooms.length; index2++) {
                    const sgItem2 = json.buildings[index].rooms[index2]
                    if(classroomid===sgItem2.id){
                        rooms.push(<div><ClassroomMed name={sgItem2.name} arealid={arealid} buildingid={buildingid} classroomid={sgItem2.id}/><TimetableSmall id={classroomid+"/rozvrh"} name={"rozvrh"}/></div>);
                    classroomname=sgItem2.name
                    }
                }
                buildings.push(rooms);
            }
        }
    
    return(                                                        
    <div>   <h1>Informace o třídě <i>{classroomname}</i>: </h1>
            {buildings}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}