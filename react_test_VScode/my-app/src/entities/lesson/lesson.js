
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
        <Card.Body>
                <Table striped bordered hover style={tableStyle}>
                    <thead>
                    <tr>                                    
                        <td align="left">Název předmětu: </td>
                        <td colSpan="3" align="center"><LessonSmall name={props.name} lessonid={props.lessonid} ProgID={props.ProgID}/></td>
                        <td colSpan="2" align="right">id (id): <b>{props.lessonid}</b> </td>                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Semestry: </td>
                        <td colSpan="5"> {props.semester} </td>
                    </tr>
                    </tbody>
                </Table>
  
        </Card.Body>

    )
}

export const LessonsListLargeAPI = (props) => {
    const { id } = useParams();
    console.log("id v ClassroomTest je : ", id)

    const [state, setState] = useState(
        {'name': "StudyProgName",
        'subjects' : [{'name':"name", 'id':"id", 'semester':[{'name':'name','id':'id'}]}]}
    );
    useEffect(() => {
        fetch('http://localhost:50055/gql', {
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
                    semester{
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
      const semester = []
      const sgItem = json.subjects[index]

      try{
          if(json.subjects[index].semester.length>0){
            for(var index2 = 0; index2 < json.subjects[index].semester.length; index2++) {
              const sgItem2 = json.subjects[index].semester[index2]
              semester.push(<i><SubjectSmall name={sgItem2.name} semesterid={sgItem2.id} lessonid={sgItem.id} ProgID={ProgID}/> -||- </i>);
              }
              subjects.push(<LessonMed name={sgItem.name} lessonid={sgItem.id} semester={semester} ProgID={ProgID}/>);
          }else{
            semester.push(<i><SubjectSmall name={"nemá semestry"} semesterid={"id semestru nenalezeno"} lessonid={sgItem.id} ProgID={ProgID}/> -||- </i>);
            subjects.push(<LessonMed name={sgItem.name} lessonid={sgItem.id} semester={semester} ProgID={ProgID}/>);
          }
            
      }catch(e){
        console.error(e); 
        semester.push(<i><SubjectSmall name={"jmeno semestru nenalezeno"} semesterid={"id semestru nenalezeno"} lessonid={sgItem.id} ProgID={ProgID}/> -||- </i>);
        subjects.push(<LessonMed name={sgItem.name} lessonid={sgItem.id} semester={semester} ProgID={ProgID}/>);
      }
            
    }
    //console.log("buldings = ", state)
    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   
      <Card>
      <Card.Header><h1>Seznam předmětů ve studijním programu <i>{arealName}</i>: </h1></Card.Header>
            {subjects}
      </Card>   
            {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}
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
      'subjects' : [{'name':"name", 'id':"id", 'semester':[{'name':'name','id':'id'}],'lessons':[{'topic':'name','id':'id'}]}]}
    );
    useEffect(() => {
        fetch('http://localhost:50055/gql', {
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
                    semester{
                      name
                      id
                    }
                      lessons{
                        topic
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
        <LessonLarge json={state} ProgID={studyprog} lessonid={lesson}/>
    </div>)
}


export const LessonLarge = (props) => {
    //console.log("id v ClassroomTest je : ", id)
    console.log("PROPS:  ", props)
    const json=props.json
    const programName=props.json.name
    var temaname="empty"
    const ProgID=props.ProgID
    
    /*
    const [state, setState] = useState(
        {
            'arealname' : 'props.json.name',
            'countries' : [{'name':'budova', 'code': 'id'}]
        });
    */
    
        const subjects = []
        const semester = []
        for(var index = 0; index < json.subjects.length; index++) {
          const lessons = []
          const sgItem = json.subjects[index]
          if(props.lessonid===sgItem.id){

            try{
                for(var index2 = 0; index2 < json.subjects[index].semester.length; index2++) {
                  const sgItem2 = json.subjects[index].semester[index2]
                  semester.push(<i><SubjectSmall name={sgItem2.name} semesterid={sgItem2.id} lessonid={sgItem.id} ProgID={ProgID}/> -||- </i>);
              }
              
            }catch{
              semester.push(<i><SubjectSmall name={"semestr nenalezen"} semesterid={"id nenalezeno"} lessonid={sgItem.id} ProgID={ProgID}/> -||- </i>);
              
            }
            

              for(var index3 = 0; index3 < json.subjects[index].lessons.length; index3++) {
                const sgItem3 = json.subjects[index].lessons[index3]
                lessons.push(<i><LessonSelectedMed name={sgItem3.topic} semesterid={semester.semesterid} lessonid={sgItem.id} ProgID={props.ProgID} topicid={sgItem3.id}/></i>);
            }
            lessons.push(<div><h3><b> ♣ další semestr:</b></h3></div>)
              semester.push(<i><SubjectSmall name={semester.name} semesterid={semester.semesterid} lessonid={sgItem.id} ProgID={props.ProgID}/> -||- </i>);
              
              temaname=sgItem.name
            }
          subjects.push(lessons);          
          }
                
        
        
    return(                                                       
    <Card>   
      <Card.Header><h1>Informace o předmětu <i><LessonSmall name={temaname} ProgID={props.ProgID} lessonid={props.lessonid}/></i>: </h1></Card.Header>
      <Card>
            <Table>
            <Card.Body>
                
                    <td>Garant pro studijní program "{programName}" : </td>
                    <td><h3>*<PersonSmall id={props.id} name={"*garant*"}/>*</h3></td>
                
            </Card.Body>
            <Card.Body>
                
                    <td>Semestry: </td>
                    <td><b>{semester}  (filtr podle semestru)</b></td>
                    
                
                <br/>
          </Card.Body>    
            </Table>
      </Card>
      <Card>
      <Card.Header><h3>Seznam lekcí(témat):</h3></Card.Header>
            <Card>{subjects}</Card>
      </Card>
            {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}
    </Card>)
}

export const LessonSelectedMed = (props) => {

    return(
        <Card>
          
                <Table striped bordered hover style={tableStyle}>
                    <thead>
                    <tr>                                    
                        <td align="left">Název tématu: </td>
                        <td colSpan="3" align="left"> {props.name} </td>
                        <td colSpan="2" align="right">id (id): <b>{props.topicid}</b> </td>                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>                                    
                        <td align="left">Vyučující: </td>
                        <td colSpan="5" align="left"> {/*props.name*/}  -  
                        <PersonSmall id={props.topicid+"/1"} name={"vyučující1 "}/> -||-
                        <PersonSmall id={props.topicid+"/2"} name={"vyučující2 "}/> -||-
                        <PersonSmall id={props.topicid+"/3"} name={"vyučující3 "}/> </td>                      
                    </tr>
                    </tbody>
                </Table>
  
        </Card>

    )
}