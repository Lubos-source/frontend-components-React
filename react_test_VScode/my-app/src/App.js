//import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import Student from './Student'
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState, useEffect, Component } from "react";
import TestMap from './entities/map';
import { BrowserRouter, Route, Switch, Link, Redirect, Routes } from "react-router-dom";
import {ArealLarge, ArealLargeSUM, ArealLargeCP, ArealLargeKOU, ArealLargeBAB, ArealList, ArealTest} from "./entities/areal/areal";
import {ClassroomList,ClassroomTest} from "./entities/classroom/classroom";
import {LessonSmall} from "./entities/lesson/lesson";
import {SubjectSmall} from "./entities/subject/subject";
import {ProgCourse, ProgLesson, ProgList, ProgSubject} from './entities/studyprog/studyprog';
import { renderIntoDocument } from 'react-dom/test-utils';


const USER_SERVICE_URL = 'https://swapi.co/api/people';   //'https://jsonplaceholder.typicode.com/users';

function Home() {
  return (
  <div>
    <h1>navigation testing HOME site :)</h1>
    <ul>
      <li>
        <Link to="/areals">areals</Link>
      </li>
      <li>
        <Link to="/about">Problems in project</Link>
      </li>
      <li>
        <Link to="/classrooms">ClassRooms list</Link>
      </li>
      <li>
        <Link to="/studyprog">Studijni program</Link>
      </li>
      <li>
        <Link to="areals/testing">Seznam Areálů (graphQL <b>newest</b>)</Link>
      </li>
    </ul>
  </div>
  
  )
}

//menime root :)  :
export const Routing = () => {
return(
  <div>
  <BrowserRouter>
    <Routes>
{/*----------------------------Stránky pomocí FETCH (GraphQL) ----------------------------------------*/}
      <Route path="/" element={<Home/>}/>
      <Route path="/areals/:id" element={<ClassroomTest/>}/>
      <Route path="/classroom/:id" element={<div> <h1>ZDE bude rozvrh pro danou třídu</h1></div>}/>
      <Route path="/areals/testing" element ={<ArealTest/>}/>

{/*----------------------------Testování a staré provedení pomocí JSON dat z PC -----------------------*/}
      <Route path="/areals" element={<ArealList/>}/>
      <Route path="/areals/5" element={<ArealLargeSUM/>}/>
      <Route path="/areals/2" element={<ArealLargeCP/>}/>
      <Route path="/areals/7" element={<ArealLargeKOU/>}/>
      <Route path="/areals/8" element={<ArealLargeKOU/>}/>
      <Route path="/areals/6" element={<ArealLargeBAB/>}/>
      
      <Route path="/lesson" element={<LessonSmall/>}/>
      <Route path="/subject" element={<SubjectSmall/>}/>
      <Route path="/classrooms" element={<ClassroomList/>}/>
      
      <Route path="/studyprog" element={<ProgList/>}/>
      <Route path="/studyprog/subject" element={<ProgSubject/>}/>
      <Route path="/studyprog/lesson" element={<ProgLesson/>}/>
      <Route path="/studyprog/course" element={<ProgCourse/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
  </div>
)
}

export const About = () => {
  return(
    <div>
    <div><h1>##Problémy v projektu: <l style={{color: 'red'}}> ('red') - aktuální </l> </h1>

    <h3>ROOTING : </h3>
    <div style={{color: 'green'}}>Nefunguje přepínání mezi stránkami, <b>vyřešeno:</b><br /> 
        -Vytvoření constanty "Routing" v "App.js" a její naimportování
        do index.js. V const Routing je Switcher = novější verze = Routes a v ní jednotlivé Route path="" element=
        Pro zobrazení danné stránky se používá parametr "element" NOVĚJŠÍ VERZE !</div>

<h3>Učebny :</h3>
<div style={{color: 'green'}}>Problém načtení z json a zobrazení učeben na dannou budovu.<b>vyřešeno</b></div> 
<div style={{color: 'green'}}><br/>
  Problém zobrazování češtiny z JSON file....přitom zobrazení češtiny na stránce jde ! 
  asi problém že neumí přečíst tyhle znaky z JSON souboru?<b>vyřešeno:</b><br /> -Převedení JSON na JS a určení UTF 8 kódování
</div>
<h3>Arealy :</h3>
<div style={{color: 'green'}}>Načítání z API (fetch GRAPQL).<b>vyřešeno:</b></div>
<div style={{color: 'green'}}><br/> Při fetch dat uložených ve state jedné komponenty ---- jak dostanu data do jiné komponenty ? (asi pomocí props ? ale jak ?)
<b>vyřešeno:</b><br /> -Každá stránka bude mít hlavní komponentu pro fetch dat a v ní bude volat další (medium) pomocí props -- v medium zase volám small pomocí props -- takhle přenesu požadované informace do všech komponent.
</div>
<div style={{color: 'green'}}><br/>
Při použití "const state =useState(<br/>{"{"} 'name': props.name,<br/>'code': props.code {"}"} );<br/> - se vynechá 0.prvek !<b>vyřešeno:</b><br/>
-uložení props do dictionary state, místo vytvoření state constanty s pomocnou funkcí setState() jak by tomu mělo být správně...
</div>
<div style={{color: 'orange'}}> <br/>Postupný fetching pouze informací které potřebujeme ! (menší zátěž) hotové: arealy --- tridy v danem arealu,<br />
dodělat další --- každá třída : předměty --- každý předmět --- hodiny se třídou (popřípadě areálem, pokud bude v jiném než aktuálním)
</div>
</div>

    </div>
)

}


/* //TESTing2//
    <div>
        <div className="Studenti">
          <Student osoba = {{jmeno:"Test Test",
          skupina:"23-5KB",  
          phone:"+420 737 589 741", 
          email:"sakoru@ji.mm",
          id:"000"}}
          />
        <p>-----------------------------------    </p>
        </div>

        <div className="Fetch Random User">
          <FetchRandomUser>
            <div>
            
            </div>
          </FetchRandomUser>
        </div>
        
        <div className="Testing map">
            <TestMap>
              <div>
              
              </div>
            </TestMap>
          </div>  
    </div>
*/
