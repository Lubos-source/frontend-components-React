
import {root} from "../index";


import React, {Component, useState, useEffect } from "react";

import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

import {LessonSmall} from "../lesson/lesson";

import { Link, useParams } from "react-router-dom";

import ArealData from "../../media/classrooms.json";

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

export default class ClassroomSUMLarge extends React.Component{

    state = {
        loading: true,
        class: null,
    
      }
    
      async componentDidMount(){
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({class: data.results[0], loading: false})
        //console.log(data.results[0]);
      }

        render(){
            if (this.state.loading) {
                return(<div align="">loading....</div>)
              }
          
              if (!this.state.class) {
                return(<div>ClassRoom not found!</div>)
              }
            return(
            <div>
                fatch test :
                <div>ClassRoom name: <b>{this.state.class.name.first}</b></div>
            </div>
            )
        }

}

//tvorba classrooms pomoci props (inProgress):
/*
https://youtu.be/3M5iHWetiJA?t=542
export const Classroomprops = (props) => {
        return(
        <div>
            {props.classroom.name}
        </div>
    )
}
*/

export const ClassroomSmall = (arealid) => {
    const { id } = useParams();
    console.log("id v ClassroomSmall je : ", id)
    return(
    <div>
            {ClassroomMedium(id)}
    </div>)
}