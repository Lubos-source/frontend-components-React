//import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard'
import Student from './Student'
import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState, useEffect, Component } from "react";
import FetchRandomUser from './components/fetchtest'
//import axios from 'axios'

const USER_SERVICE_URL = 'https://swapi.co/api/people';   //'https://jsonplaceholder.typicode.com/users';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
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

/*
function skup(){

  this.state = {
      loading: false,
      character: {}
    }
  
  this.setState({loading: true})
  fetch("https://swapi.co/api/people/1")
  .then(response => response.json())
  .then(data => {
      this.setState({
          character: data
      })
  })

}
*/
/*
export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=> {
  fetch('')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
}, [])  
}
*/

/*
class test extends Component{
  constructor(props) {
    super(props);
    this.state = {
        isFetching: false,
        users: []
    };
  }
    
  render(){
    return(
      <div>
          {this.state.users}
      </div>
    )
  }
    componentDidMount() {
      this.fetchUsers();
      this.timer = setInterval(() => this.fetchUsers(), 5000);
    }
    componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = null;
    }

    async fetchUsersAsync() {
      try {
          this.setState({...this.state, isFetching: true});
          const response = await axios.get(USER_SERVICE_URL);
          this.setState({users: response.data, isFetching: false});
      } catch (e) {
          console.log(e);
          this.setState({...this.state, isFetching: false});
      }
  };

  fetchUsers = this.fetchUsersAsync;
    
}

export default test;
*/

/*

*/

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(()=> {
  fetch('https://swapi.co/api/people/1')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
 }, [])

  return (
   
    <div>
        <div className="Studenti">
          <Student osoba = {{jmeno:"Test Test",
          skupina:"23-5KB",  
          phone:"+420 737 589 741", 
          email:"sakoru@ji.mm",
          id:"000"}}
          />
            
        </div>

        <div className="Fetch Random User">
          <FetchRandomUser>
            <div>
            
            </div>
          </FetchRandomUser>
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
