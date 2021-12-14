import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

import React, {useState, useEffect } from "react";

import {root} from "../index";


export const FetchtestAPI = (props) => {
    const [state, setState] = useState(
        {'id':'id',
        'name':'name'}
    );
    useEffect(() => {
        fetch('http://localhost:50001/gql', {
            //mode: 'no-cors',
            method: 'POST',
            //"Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Credentials": true,
            headers: {
                'Content-Type': `application/json`,
                'Accept'      : `application/json`
            },
            body: JSON.stringify({
              query: `
              query {
                areal(id:1)
                    {
                    id
                    name
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
            
    }, [] );
    
    //POTOM BUDE: [props.id] - závislost kdy se udělá fetch (vždy když změníme id)!
    console.log("po fetchi:", state)
    return(
        <div>
            <Fetchtest json={state}/>
        </div>
    )
}


export const Fetchtest = (props) => {
    const json=props.json

/*
    const [state, setState] = useState(
        {
            'continents': //areals
            [{
                'name': "name", //jmeno arealu
                'code': "code", //id arealu
            }]
            
        });
*/

    //setState(props)
    console.log("----obsah props:--- ", json)

    /*
    const continents = []
    for(var index = 0; index < json.continents.length; index++) {
        const sgItem = json.continents[index]
        continents.push(<FetchtestMedium name={sgItem.name} id={sgItem.code}/>);
    }
*/
    return (<div>
                               
                <p><b>Seznam areálů: </b> <td>  {/*continents*/} </td></p>
                <div>Areal: {json.name} ma id: {json.id}</div>                
                <p><b>původní JSON soubor fatchnuty z GraphQL:</b> {JSON.stringify(json)}</p>

            </div>)
}


export const FetchtestMedium = (props) => {

    //VYŘEŠENO zmizení [0]teho prvku ----> ale je to správně ? ---> NENÍ TO NEJLEPŠÍ, NĚKDE SE OBJEVÍ CHYBA !!!
    const state ={
        'name': props.name,
        'id': props.code
    };
    console.log("FetchtestMedium state: ", state)
    //useEffect(()=>{})
    return (
        <Card>
            <Card.Header>Název AREÁLU: <b>{state.name}</b></Card.Header> 
            <Card.Text>
                <Row>continent CODE: {state.code}</Row>
                <FetchtestSmall name={" budovy: " + state.name} code={state.code}/>
            </Card.Text>
        {/*<Link to={arealRoot + `/${props.code}`}>{props.name}{props.children}</Link>*/}
        </Card>
    )

}


export const FetchtestSmall = (props) => {
    
    return(
    
            <Link to={"blablabla" + `/${props.code}`}>{props.name}{props.children}</Link>
    )
}
