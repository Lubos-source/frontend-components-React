//import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import Student from './Student'
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState, useEffect, Component } from "react";
import FetchRandomUser from './entities/fetchtest';
import TestMap from './entities/map';
//import axios from 'axios'

const USER_SERVICE_URL = 'https://swapi.co/api/people';   //'https://jsonplaceholder.typicode.com/users';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//-----------------------------------------------------------------------------//

/*
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




function App() {

  return (
   
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
    
  );
}


export default App;

/*
<div className="contact-cards">
          <ContactCard contact = {{name:"Mr. Json Kittie", 
          imgUrl:"https://placekitten.com/388/200", 
          phone:"+420 737 589 741", 
          email:"sakoru@ji.mm"}}
          />
        </div>
        <div className="Welcome">
          <Welcome name="Lubos" />
          <Welcome name="Martin" />
          <Welcome name="Honza" />
        </div>
        <div className="coment">
          <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
          />
        </div>
        


*/
