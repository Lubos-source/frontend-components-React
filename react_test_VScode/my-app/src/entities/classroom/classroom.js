
import {root} from "../index";


import React, {Component, useState, useEffect } from "react";

import  Card  from "react-bootstrap/Card";
import { Row, Button, Table } from "react-bootstrap";

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
        
               <Link to={classroomRoot + `/${props.arealid},${props.buildingid},${props.classroomid}`}> {props.name}{props.children} </Link> 
        )
}

const tableStyle = {
    color: '#333333',
    width: '70%',
    border: '1px solid black',
    'border-collapse': 'collapse',
        
    //'background-color': '#CCCCCC',
    };


export const ClassroomMed = (props) => {

    return(
        <div>   
                
                    <Table striped bordered hover style={tableStyle}>                                    
                    
                        
                        <tbody>
                        <tr >
                        <td ><b>code (id):</b> </td>
                        <td > {props.classroomid}</td>
                        </tr>
                        <tr >
                        <td><b>Účel použití:</b> </td>
                        <td > učebna, kancelář, schodiště, chodba, ... </td>
                        </tr>
                        <tr >
                        <td><b>Patří katedře:</b> </td>
                        <td > FVT-K206 </td>
                        </tr>
                        <tr >
                        <td><b>Uživatel:</b> </td>
                        <td >(kancelář - učitel) (učebna - studijní skupiny) (sklady,schodiště,zbytek - asi prázdný)</td>
                        </tr>                        
                        </tbody>
                        
                    </Table>
                
  
        </div>

    )
}

export const ClassroomCond = (props) => {
    const [expanded, setExpanded] = useState(false);
    var result = <>Error</>
    if (expanded) {
        result = (
                                                 
             <Card>
                 <Card.Header>
                     třída: <b><ClassroomSmall name={props.name} arealid={props.arealid} buildingid={props.buildingid} classroomid={props.classroomid}/></b>               
                 </Card.Header>
                 <Card.Body>
                 {<ClassroomMed name={props.name} arealid={props.arealid} buildingid={props.buildingid} classroomid={props.classroomid}/>}
                 </Card.Body>
                          
                 <Button variant="secondary" size="md" onClick={() => setExpanded(false)} style={{ color: 'red' }}>hide information</Button>
         </Card>                   
            
        )
    } else {
        result = (
            <Card>                
            
                <Card.Header>
                    třída: {<b><ClassroomSmall name={props.name} arealid={props.arealid} buildingid={props.buildingid} classroomid={props.classroomid}/></b>}
                    </Card.Header>
                    <Card.Body>
                                    
                    </Card.Body>
                <Button variant="secondary" size="md" onClick={() => setExpanded(true)} style={{ color: 'blue' }}>show information</Button>                                                   
            </Card>
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
        'buildings':[{'area':{'id':'id'},'id':'id','name':'name','rooms':[{'id':'id','name':'name'}]}]
    }
    );
    useEffect(() => {
        fetch('http://localhost:50055/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query {
                area(id:`+arealid+`){
                    id
                    name
                    buildings{
                        area{
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
            .then((result) => setState(result.data.area));
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
    <Card>   
        <Card.Header><h1>Seznam tříd v budově <i>{buildingname}</i>: </h1></Card.Header>
        <Card.Body> 
            {buildings}
        </Card.Body> 
            {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}
    </Card>)
}


export const ClassroomsList = (props) => {
    console.log("PROPS:  ", props)
    const json=props.json
    const state ={
        'name': props.name,
        'id': props.id,
        'buildingid':props.buildingid,
        'arealid':props.arealid
    };
  
    return(    
        <Card >
            <Card.Body>
            <Card.Text> ♣ <b><ClassroomSmall arealid={state.arealid} buildingid={state.buildingid} classroomid={state.id} name={state.name} /></b>
            </Card.Text>
            </Card.Body>
            
        </Card>
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
        'buildings':[{'area':{'id':'id'},'id':'id','name':'name','rooms':[{'id':'id','name':'name'}]}]
    }
    );
    useEffect(() => {
        fetch('http://localhost:50055/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query {
                area(id:`+arealid+`){
                    id
                    name
                    buildings{
                        area{
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
            .then((result) => setState(result.data.area));
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
                        rooms.push(<div><ClassroomMed name={sgItem2.name} arealid={arealid} buildingid={buildingid} classroomid={sgItem2.id}/><TimetableSmall id={classroomid+"/rozvrh"} name={`rozvrh pro ${sgItem2.name}`}/></div>);
                    classroomname=sgItem2.name
                    }
                }
                buildings.push(rooms);
            }
        }
    
    return(                                                        
    <Card>   
        <Card.Header><h2>Informace o třídě <i>{classroomname}</i>: </h2></Card.Header>
        <Card.Body>
            {buildings}
        </Card.Body>
            
            {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}
    </Card>)
}