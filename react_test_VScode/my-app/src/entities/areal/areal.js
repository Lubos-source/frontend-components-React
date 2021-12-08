import MapaSumavska from "../../media/sumak_svg.SVG";
import MapaCP from "../../media/cernapole_svg.SVG";
import MapaKOU from "../../media/kounicova_svg.SVG";
import MapaBAB from "../../media/babak_svg.SVG";

import  Card  from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import ArealData from "../../media/classrooms2.js";

import { Link, useParams } from "react-router-dom";

import React, {Component, useState, useEffect } from "react";

import {root} from "../index";

import {ClassroomTest} from "../classroom/classroom";
import { useButtonProps } from "@restart/ui/esm/Button";


const arealRoot = root + "areals"


export const ArealLargeSUM = () => {
    const arealRoot = root + "areals/5"
        return(
            <div>
            
            <div>
                <map name="sumavska">
                    <area shape="rect" coords="276,613,400,649" href={arealRoot+"/šumák1"} target="_self" alt="Š1"/>
                    <area shape="rect" coords="265,442,329,483" href={arealRoot+"/šumák3"} target="_self" alt="Š3"/>
                    <area shape="rect" coords="193,437,250,487" href={arealRoot+"/šumák4"} target="_self" alt="Š4"/>
                    <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/asiŠ5-zakroucenabudova"} target="_self" alt="zakroucenaBudovaAsiŠ5" />
                    <area shape="rect" coords="97,378,141,415" href={arealRoot+"/šumák5A"} target="_self" alt="Š5A"/>
                    <area shape="rect" coords="97,169,143,253" href={arealRoot+"/šumák5B"} target="_self" alt="Š5B"/>
                    <area shape="rect" coords="97,88,220,143" href={arealRoot+"/šumák6"} target="_self" alt="Š6"/>
                    <area shape="rect" coords="284,88,419,141" href={arealRoot+"/šumák8"} target="_self" alt="Š8"/>
                    <area shape="rect" coords="359,160,419,287" href={arealRoot+"/šumák9"} target="_self" alt="Š9"/>
                    <area shape="rect" coords="359,288,419,404" href={arealRoot+"/šumák9A"} target="_self" alt="Š9A"/>
                </map>
                <img usemap="#sumavska" src={MapaSumavska} alt="mapa Sumavska" />              

            </div>

            </div>
        )

}

export const ArealLargeCP = () => {
    const arealRoot = root + "areals/2"
    return(
        <div>

        <div>
            <map name="cernapole">
                <area shape="rect" coords="276,613,400,649" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="265,442,329,483" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="193,437,250,487" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/..."} target="_self" alt="." />
            </map>
            <img usemap="#cernapole" src={MapaCP} alt="mapa Cerna Pole" />              

        </div>

        </div>
    )

}

export const ArealLargeKOU = () => {
const arealRoot = root + "areals/7"
    return(
        <div>    
    
        <div>
            <map name="kounicova">
                <area shape="rect" coords="276,613,400,649" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="265,442,329,483" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="193,437,250,487" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/..."} target="_self" alt="." />
            </map>
            <img usemap="#kounicova" src={MapaKOU} alt="mapa Kounicova a Soudni" />              
        </div>
    
        </div>
    )
    
}

export const ArealLargeBAB = () => {
const arealRoot = root + "areals/6"
    return(
        <div>        
        
        <div>
            <map name="babak">
                <area shape="rect" coords="276,613,400,649" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="265,442,329,483" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="rect" coords="193,437,250,487" href={arealRoot+"/..."} target="_self" alt="."/>
                <area shape="poly" coords="102,422,102,488,185,488,185,445,162,445,162,465,129,465,129,423,103,423" href={arealRoot+"/..."} target="_self" alt="." />
            </map>
            <img usemap="#babak" src={MapaBAB} alt="mapa Jana Babaka" />              
        
        </div>
        
        </div>
    )
        
}

export const ArealList = (props) => {
    
//console.log(ArealData)
    return(<div>
        <Card>
            <h2>-----------------Automatický list areálu z JSON file ----------------</h2>
            <ul>
            {
                ArealData.areas.map((datas, key)=>{
                    return(
                        <div key={key}>
                            <Card.Body>
                                <Card.Text>
                                    <Row><Link to={arealRoot+"/"+ datas.id}>{datas.name}</Link></Row>
                                </Card.Text>
                            </Card.Body>
                        </div>
                    )
                                                })
            }
            </ul>
        </Card>

        </div>
    )

}


//---------------------------------Nové, správné provedení pomocí FETCH (GraphQL)-----------------------------

export const ArealTest = (props) => {
    

    const [state, setState] = useState(
        {
            'continents': //areals
            [{
                'name': props.name, //jmeno arealu
                'code': props.code, //id arealu
               /* 'countries': [ { 'name': 'testingname', 'code':'tetsingtwitter',  //tridy (jmeno, id) //jeste v arealech budou budovy asi ? uvidime podle graphQL zatim testujem na tomhle
                                  'languages': [{'code' : 'c', 'name':'n','native':'na'}]     //predmety (id, jmeno, lekce...)
                                }]*/
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
                  name`/*
                  countries {
                    name
                    code
                    languages {
                      code
                      name
                      native
                    }
                }*/+`
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

    const continents = []
    for(var index = 0; index < state.continents.length; index++) {
        const sgItem = state.continents[index]
        continents.push(<ArealMedium name={sgItem.name} code={sgItem.code}/>);
        //continents.push(<br />);
        //console.log("continents sgItems: ", sgItem) //Zde ještě je AFRICA! [0]prvek v poli
    }

    return (<div>
                <div>{/*continents*/}</div>
                
                <p><b>Seznam areálů: </b> <td>  {continents} </td></p>
                {console.log("State console log2: ", state)/*Zde ještě je AFRICA! [0]prvek v poli*/} 
                
                <p><b>původní JSON soubor fatchnuty z GraphQL:</b> {JSON.stringify(state)}</p>

            </div>)
}


export const ArealLarge = (props) => {
    const state ={
        'name': props.name,
        'code': props.code
    };
    
    //setState(props)
    console.log("props: ", props.name, props.code)
    return(
    <div>
        <Card>
        <Card.Header>
            Areal: <b> {props.name} :</b>
            <p>Seznam učeben: </p>
        </Card.Header>
            <ClassroomTest id/>
        </Card>
    </div>)


}



export const ArealMedium = (props) => {

    //VYŘEŠENO zmizení [0]teho prvku ----> ale je to správně ?
    const state ={
        'name': props.name,
        'code': props.code
    };
    console.log("ArealMedium state: ", state)
    //useEffect(()=>{})
    return (
        <Card>
            <Card.Header>Název AREÁLU: <b>{state.name}</b></Card.Header> 
            <Card.Text>
                <Row>continent CODE: {state.code}</Row>
                <Row>contries: [name, id, languages:[code, name, nativ]</Row>
                učebny: <ArealSmall name={state.name} code={state.code}/>
            </Card.Text>
        {/*<Link to={arealRoot + `/${props.code}`}>{props.name}{props.children}</Link>*/}
        </Card>
    )

}

export const ArealSmall = (props) => {
    
    return(
    
            <Link to={arealRoot + `/${props.code}`}>{props.name}{props.children}</Link>
    )
}