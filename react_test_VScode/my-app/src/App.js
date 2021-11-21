//import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import Student from './Student'
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState, useEffect, Component } from "react";
import FetchRandomUser from './entities/fetchtest';
import TestMap from './entities/map';
import { BrowserRouter, Route, Switch, Link, Redirect, Routes } from "react-router-dom";
import {ArealLarge, ArealLargeSUM, ArealLargeCP, ArealLargeKOU, ArealLargeBAB, ArealList} from "./entities/areal/areal";
import {ClassroomList} from "./entities/classroom/classroom";
import ClassroomSUMLarge from "./entities/classroom/classroom";
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
        <Link to="/fetchsite">Fetch from API testing</Link>
      </li>
      <li>
        <Link to="/classrooms">ClassRooms list</Link>
      </li>
      <li>
        <Link to="/classtestfetch">ClassRoom fatch from online API</Link>
      </li>
      <li>
        <Link to="/studyprog">Studijni program</Link>
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
      <Route path="/" element={<Home/>}/>
      <Route path="/areals/:id" element={<ArealLarge/>}/>
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
      <Route path="/classtestfetch" element={<ClassroomSUMLarge/>}/>
      <Route path="/studyprog/subject" element={<ProgSubject/>}/>
      <Route path="/studyprog/lesson" element={<ProgLesson/>}/>
      <Route path="/studyprog/course" element={<ProgCourse/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/fetchsite" element={<FetchRandomUser/>}/>
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
    <div>Nefunguje přepínání mezi stránkami, <b>vyřešeno:</b> </div>
        Vytvoření constanty "Routing" v "App.js" a její naimportování
        do index.js. V const Routing je Switcher = novější verze = Routes a v ní jednotlivé Route path="" element=
        Pro zobrazení danné stránky se používá parametr "element" NOVĚJŠÍ VERZE !

<h3>Učebny :</h3>
<div>Problém načtení z json a zobrazení učeben na dannou budovu.<b>Hotovo</b></div> 
<div style={{color: 'red'}}>Problém zobrazování češtiny z JSON file....přitom zobrazení češtiny na stránce jde ! 
    asi problém že neumí přečíst tyhle znaky z JSON souboru?</div>
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
