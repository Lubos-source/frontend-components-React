
import {root} from "../index";


import React, {Component, useState, useEffect } from "react";

import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

import {LessonSmall} from "../lesson/lesson";

import { Link, useParams } from "react-router-dom";

import ArealData from "../../media/classrooms2.js";
//
import {ArealSmall} from "../areal/areal";

const classroomRoot = root + "classroom"

export const ClassroomList = () => {

    return(
        <div>
            {
                ArealData.areas.map((datas, key)=>{
                    return(
                        <div key={key}>
                            <Card>
                                <Card.Header><b>{datas.name}</b></Card.Header>
                                    {ClassroomCondition(datas.id)}
                            </Card>
                        </div>
                    )
                                                })
            }
        </div>

    )
               
}

export const ClassroomCondition = (areaid) => {
    const [expanded, setExpanded] = useState(false);
    var result = <>Error</>
    if (expanded) {
        result = (
            <>                                       
             <Card.Body>
                 <Card.Text>
                     <Row>{ClassroomMedium(areaid)}</Row>                     
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
                    <Row><span className="btn" onClick={() => setExpanded(true)} style={{ color: 'green' }}><b>⇩⇩⇩⇩⇩⇩⇩</b></span></Row>
                </Card.Text>
            </Card.Body>                                                   
            </>
        )
    }
    return result
}

export const ClassroomMedium = (arealid) => {
    console.log("hodnota ClassroomMedium je : ", arealid, "typu : ", arealid.type)
    return(
        <div>
            {
                ArealData.classrooms.map((datas)=>{
                    if(datas.areaId==arealid){
                        return(
                            
                            <Card.Body>
                                <Card.Text>                                    
                                    <Row>{datas.name}</Row>
                                </Card.Text>
                            </Card.Body>
                            
                        )
                    }
                                                })
            }
        </div>

    )
}


//---------------------------------------------tvorba classrooms pomoci props a fetch (GraphQL) (inProgress):--------------------------------------

export const ClassroomSmall = (props) => {
    
    return(
        <Row>
               třída: <Link to={classroomRoot + `/${props.code}`}> {props.name}{props.children}</Link> 
        </Row>)
}

export const ClassroomMed = (props) => {

    return(
        <div>
                <Card.Body>
                    <Card.Text>                                    
                        <Row><ClassroomSmall name={props.name} code={props.code}/></Row>
                        <Row>code (id): {props.code}</Row>
                        <Row>? třeba "Zjednoduseny rozvrh pro tridu" ?</Row>
                    </Card.Text>
                </Card.Body>
  
        </div>

    )
}

export const PodminkaClassroom = (props) => {
    const [expanded, setExpanded] = useState(false);
    var result = <>Error</>
    if (expanded) {
        result = (
            <>                                       
             <Card.Body>
                 <Card.Text>
                     <Row>{<ClassroomMed name={props.name} code={props.code}/>}</Row>                     
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
                    <Row>{<ClassroomSmall name={props.name} code={props.code}/>}</Row>
                    <Row><span className="btn" onClick={() => setExpanded(true)} style={{ color: 'green' }}><b>⇩⇩⇩⇩⇩⇩⇩</b></span></Row>
                </Card.Text>
            </Card.Body>                                                   
            </>
        )
    }
    return result
}


export const ClassroomTest = (arealid) => {
    const { id } = useParams();
    console.log("id v ClassroomTest je : ", id)

    const [state, setState] = useState(
        {
            'name' : "continent",
            'countries' : [{'name':'n', 'code': 'c'}]
        });

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
            console.log("State je : ", state)
    }, [id] )
    
    const countries = []
    for(var index = 0; index < state.countries.length; index++) {
        const sgItem = state.countries[index]
        countries.push(<PodminkaClassroom name={sgItem.name} code={sgItem.code}/>);
    }

    return(                                                        //předání testing-->vrácení se zpět na seznam arealů
    <div>   <h1>Seznam tříd v areálu <i><ArealSmall name={state.name} code={"testing"}/></i>: </h1>
            {countries}
            <p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(state)}</p>
    </div>)
}