import {root} from "../index";

//import {SubjectSmall} from "../subject/subject";
//import {LessonSmall} from "../lesson/lesson";
import { Link } from "react-router-dom";

import  Card  from "react-bootstrap/Card";
import { Row, Table} from "react-bootstrap";


import {useParams } from "react-router-dom";

import React, {Component, useState, useEffect } from "react";
//import {LessonSmall} from "../lesson/lesson";

import {PersonSmall} from "../person/person";
import {DepartmenSmall} from "../department/department";

export const progRoot = root + "studyprog"

export const ProgLargeAPI = (props) => {
    const [state, setState] = useState(
        {
            'programy':[{'id':'id',
            'name':'name',
            'subjects':[{'id':'id','name':'name','semesters':[{'id':'id','name':'name'}]}]
        }]}
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
              query{
                program(id:1){
                  id
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

    /*
    const programy = []
    for(var index = 0; index < json.program.length; index++) {
        const sgItem = json.program[index]
        programy.push(<ProgMedium name={sgItem.name} id={sgItem.id}/>);
    }
*/
try{ 
    if(json.program.length>1){
        const programy = []
        for(var index = 0; index < json.program.length; index++) {
            const sgItem = json.program[index]
            programy.push(<ProgMedium name={sgItem.name} id={sgItem.id}/>);
        }
        return (<div>
            <Table striped bordered hover>
                <thead>
                    <h3>Seznam studijních programů:</h3>
                </thead>
              {programy}                  
            </Table>
            
            {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}

        </div>)
    
        }
        else{
            return(<div>
                <Table striped bordered hover>
                    <thead>
                        <h3>Studijní program:</h3>
                    </thead>
                        
                  <Card><ProgMedium name={json.program.name} id={json.program.id}/></Card>             
                </Table>
                
                {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}

            </div>)
        }

} catch(e) { 
    console.error(e); 
    return(<div>
        <Table striped bordered hover>
            <thead>
                <h3>Studijní program:</h3>
            </thead>
              
          <Card><ProgMedium name={json.programy.name} id={json.programy.id}/></Card>             
        </Table>
        
        {/*<p><b>fetchnuty JSON soubor z GraphQL:</b> {JSON.stringify(json)}</p>*/}

    </div>)
    
}


//console.log("obsah program: ",programy)
    
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
        'id': props.id
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
                        <td><b><DepartmenSmall id={state.id} name={"*FAKULTA*"}/></b></td>
                        <td colSpan="2" align="left">Garant: <b><PersonSmall id={props.id} name={"ppl. Ing. Luděk Jedlička, Ph.D"}/></b></td>
                    </tr>
                    <tr>
                        <td>id: </td>
                        <td><b>{state.id}</b></td>
                        <td colSpan="2" align="left"> <b><ProgSmall name="předměty" id={state.id}/></b></td>
                    </tr>
            </tbody>
            </Table>
        
    )

}

export const ProgSmall = (props) => {
    
    return(
    
            <Link to={progRoot + `/${props.id}`}>{props.name}{props.children}</Link>
    )
}