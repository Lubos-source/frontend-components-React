
import {root} from "../index";

import React, {Component, useState, useEffect } from "react";

import {LessonSmall} from "../lesson/lesson";

const classroomRoot = root + "classroom"

export const ClassroomLarge = () => {
            return(
        <div>
                <div>
                    Šumavská
                    <ul>
                        Š9A:
                        <li>
                            učebna 1
                        </li>
                        <li>
                            učebna 2
                        </li>
                        <li>
                            ....
                        </li>
                    </ul>
                    <ul>
                        Š1:
                        <li>
                            učebna 1
                        </li>
                        <li>
                            učebna 2
                        </li>
                        <li>
                            ....
                        </li>
                    </ul>
                </div>
                <div>
                Kounicova
                <ul>
                    K1:
                    <li>
                        učebna 1
                    </li>
                    <li>
                        učebna 2
                    </li>
                    <li>
                        ....
                    </li>
                </ul>
                <ul>
                    Kx:
                    <li>
                        učebna 1
                    </li>
                    <li>
                        učebna 2
                    </li>
                    <li>
                        ....
                    </li>
                </ul>
            </div>
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