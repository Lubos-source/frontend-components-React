
import {root} from "../index";


import React, {Component, useState, useEffect } from "react";

import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

import {LessonSmall} from "../lesson/lesson";

import { Link, useParams } from "react-router-dom";

import ArealData from "../../media/classrooms2.js";
//

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


export const ClassroomTest = (props) => {
    

    const [state, setState] = useState(
        {
            'continents': //areals
            [{
                'name': props.name, //jmeno arealu
                'code': props.code, //id arealu
                'countries': [ { 'name': 'testingname', 'code':'tetsingtwitter',  //tridy (jmeno, id) //jeste v arealech budou budovy asi ? uvidime podle graphQL zatim testujem na tomhle
                                  'languages': [{'code' : 'c', 'name':'n','native':'na'}]     //predmety (id, jmeno, lekce...)
                                }]
            }]
            
        });

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
                  countries {
                    name
                    code
                    languages {
                      code
                      name
                      native
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
/*
    const countries = []
    for(var ind = 0; ind < state.continents[ind].countries.length; ind++){
        for(var index = 0; index < state.continents[ind].countries.length; index++) {
            const sgItem = state.continents[index].countries[index]
            countries.push(<LessonSmall id={sgItem.code} name={sgItem.name}/>);
            countries.push(<br />);
        }
}*/

    const continents = []
    for(var index = 0; index < state.continents.length; index++) {
        const sgItem = state.continents[index]
        continents.push(<div><h1>continent NAME: {sgItem.name}</h1> <p>continent CODE: {sgItem.code}</p> contries: [name, id, languages:[code, name, nativ]</div>);
        continents.push(<br />);
    }
/*
    const ClassroomSubjects = []
    for(var index = 0; index < state.subjects.length; index++) {
        const ssItem = state.subjects[index];
        ClassroomSubjects.push(<ClassroomSmall id={ssItem.id} name={ssItem.name}/>)
    }
*/
    return (<div>
                <div>{continents}</div>
                
                <p><b>státy: </b> <td>  {/*countries*/} </td></p>
                {console.log("State console log2: ", state)}
                
                <p><b>původní JSON soubor fatchnuty z GraphQL:</b> {JSON.stringify(state)}</p>

            </div>)
}


/*

export const ClassroomTest = (props) => {
    

    const [state, setState] = useState(
        {
            'title': props.title,
            'date': props.date,
            //'guest': [{'name': props.guest.name, 'twiter': props.guest.twiter}],
            'description': props.description,
            'guest': [ { 'name': 'testingname', 'twitter':'tetsingtwitter' }]
            'lessons': [
                {'id': 257, 'name': '23-5AT'}
            ],
            'subjects': [
                {'id': 458, 'name': 'subj1'}
            ]
        });

        useEffect(() => {
            fetch('https://www.learnwithjason.dev/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  query: `
                      query GetLearnWithJasonEpisodes($now: DateTime!) {
                        allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
                          date
                          title
                          guest {
                            name
                            twitter
                          }
                          description
                        }
                      }
                    `,
                  variables: {
                    now: new Date().toISOString(),
                  },
                }),
              })
                .then((res) => res.json())
                .then((result) => setState(result.data.allEpisode[0]));
        }, [] )
        
        //POTOM BUDE: [props.id] - závislost kdy se udělá fetch (vždy když změníme id)!
    
        const guest = []
        for(var index = 0; index < state.guest.length; index++) {
            const sgItem = state.guest[index]
            guest.push(<LessonSmall id={sgItem.twitter} name={sgItem.name}/>);
            guest.push(<br />);
        }
    
        return (<div>
                    <h1>{state.title}</h1>
                    <p><b>date:</b> {state.date}</p>
                    <p><b>description:</b> {state.description}</p>
                    <p><b>původní JSON soubor fatchnuty z GraphQL:</b> {JSON.stringify(state)}</p>
                    {console.log("State console log2: ", state)}
                    <p><b>Test guest:</b> <td> Twitter: {guest}</td></p>
    
                </div>)
    }

*/