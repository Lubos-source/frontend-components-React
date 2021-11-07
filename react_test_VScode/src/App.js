//import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import Student from './Student'
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState, useEffect, Component } from "react";
import FetchRandomUser from './entities/fetchtest';
import TestMap from './entities/map';
import { BrowserRouter, Route, Switch, Link, Redirect, Routes } from "react-router-dom";
import {ArealLarge} from "./entities/areal/areal";
import {LessonSmall} from "./entities/lesson/lesson";
import { renderIntoDocument } from 'react-dom/test-utils';


const USER_SERVICE_URL = 'https://swapi.co/api/people';   //'https://jsonplaceholder.typicode.com/users';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Home() {
  return <h1>Home site :)</h1>;
}

//-----------------------------------------------------------------------------//

/* //TESTing//
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
*/

//menime root :)  :
export const Routing = () => {
return(
  <div>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/areal" element={<ArealLarge/>}/>
      <Route path="/lesson" element={<LessonSmall/>}/>
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
    <div>ABOUT site</div>

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
