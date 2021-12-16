
import {root} from "../index";

import { Link, useParams } from "react-router-dom";

import  Card  from "react-bootstrap/Card";
import { Row, Table} from "react-bootstrap";
import React, {Component, useState, useEffect } from "react";

import {SubjectSmall} from "../subject/subject";

import {PersonSmall} from "../person/person";

export const lessonRoot = root + "lesson"

export const LessonSmall = (props) => {
    //const ProgID=props.ProgID
    return (
        <Link to={lessonRoot + `/${props.ProgID},${props.lessonid}`}>{props.name}{props.children}</Link>
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
                        <td colSpan="3" align="center"><LessonSmall name={props.name} lessonid={props.lessonid} ProgID={props.ProgID}/></td>
                        <td colSpan="2" align="right">id (id): <b>{props.lessonid}</b> </td>                        
                    </tr>
                    <tr>
                        <td>Semestry: </td>
                        <td colSpan="5"> {props.semesters} </td>
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
        'subjects' : [{'name':"name", 'id':"id", 'semesters':[{'name':'name','id':'id'}]}]}
    );
    useEffect(() => {
        fetch('http://localhost:50001/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query{
                program(id:`+id+`){
                  name
                  subjects{
                    id
                    name
                    semesters{
                      name
                      id
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
            .then((result) => setState(result.data.program));
    }, [id] )
    
    //console.log("State je : ", state)
    console.log("STATE je : ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
        <LessonsListLarge json={state} ProgID={id}/>
    </div>)
}


export const LessonsListLarge = (props) => {
    console.log("PROPS:  ", props)
    const json=props.json
    const arealName=props.json.name
    const ProgID=props.ProgID
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
    const subjects = []
    for(var index = 0; index < json.subjects.length; index++) {
      const semesters = []
      const sgItem = json.subjects[index]
            for(var index2 = 0; index2 < json.subjects[index].semesters.length; index2++) {
                const sgItem2 = json.subjects[index].semesters[index2]
                semesters.push(<i><SubjectSmall name={sgItem2.name} semesterid={sgItem2.id} lessonid={sgItem.id} ProgID={ProgID}/> -||- </i>);
            }
        subjects.push(<LessonMed name={sgItem.name} lessonid={sgItem.id} semesters={semesters} ProgID={ProgID}/>);
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Seznam předmětů ve studijním programu <i>{arealName}</i>: </h1>
            {subjects}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>
    </div>)
}


///************---------------------------------------------------------------------------------------******************/


export const LessonLargeAPI = (props) => {
  const { id } = useParams();
  const studyprog=id.split(',')[0]
  const lesson=id.split(',')[1]
    console.log("id v ClassroomLargeAPI je : ", id)

    const [state, setState] = useState(
      {'name': "StudyProgName",
      'subjects' : [{'name':"name", 'id':"id", 'semesters':[{'name':'name','id':'id','topics':[{'name':'name','id':'id'}]}]}]}
    );
    useEffect(() => {
        fetch('http://localhost:50001/gql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
              query{
                program(id:`+studyprog+`){
                  name
                  subjects{
                    id
                    name
                    semesters{
                      name
                      id
                      topics{
                        name
                        id
                      }
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
            .then((result) => setState(result.data.program));
    }, [id] )
    
    //console.log("State je : ", state)
    console.log("STATE je : ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
        <LessonLarge json={state} ProgID={studyprog} lessonid={lesson}/>
    </div>)
}


export const LessonLarge = (props) => {
    //console.log("id v ClassroomTest je : ", id)
    console.log("PROPS:  ", props)
    const json=props.json
    const programName=props.json.name
    var temaname="empty"
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
        const subjects = []
        const semesters = []
        for(var index = 0; index < json.subjects.length; index++) {
          const topics = []
          const sgItem = json.subjects[index]
          if(props.lessonid===sgItem.id){
            for(var index2 = 0; index2 < json.subjects[index].semesters.length; index2++) {
              const sgItem2 = json.subjects[index].semesters[index2]
              for(var index3 = 0; index3 < json.subjects[index].semesters[index2].topics.length; index3++) {
                const sgItem3 = json.subjects[index].semesters[index2].topics[index3]
                topics.push(<i><LessonSelectedMed name={sgItem3.name} semesterid={sgItem2.id} lessonid={sgItem.id} ProgID={props.ProgID} topicid={sgItem3.id}/></i>);
            }
            topics.push(<b>------------------------------------------------další---semestr---------------------------------------------------</b>)
              semesters.push(<i><SubjectSmall name={sgItem2.name} semesterid={sgItem2.id} lessonid={sgItem.id} ProgID={props.ProgID}/> -||- </i>);
          }
          subjects.push(topics);
          temaname=sgItem.name
          }
                
        }
        
    return(                                                       
    <div>   <h1>Informace o předmětu <i><LessonSmall name={temaname} ProgID={props.ProgID} lessonid={props.lessonid}/></i>: </h1>
            <Table>
                <tr>
                    <td>Garant pro studijní program "{programName}" : </td>
                    <td><h3>*<PersonSmall id={props.id} name={"*garant*"}/>*</h3></td>
                </tr>
                <tr>
                    <td>Semestry: </td>
                    <td><b>{semesters}  -  (filtr podle semestru (<i>*lesson/1,2?filter=semestr===2*</i>))?*</b></td>
                    
                </tr>
                <br/>
            </Table>
            <h3>Seznam lekcí(témat):</h3>
            {subjects}
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
                        <td colSpan="2" align="right">id (id): <b>{props.topicid}</b> </td>                        
                    </tr>
                    <tr>                                    
                        <td align="left">Vyučující: </td>
                        <td colSpan="5" align="left"> {/*props.name*/}  -  
                        <PersonSmall id={props.topicid+"/1"} name={"vyučující1 "}/> -||-
                        <PersonSmall id={props.topicid+"/2"} name={"vyučující2 "}/> -||-
                        <PersonSmall id={props.topicid+"/3"} name={"vyučující3 "}/> </td>                      
                    </tr>
                </Table>
  
        </div>

    )
}