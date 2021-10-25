import { Component } from "react";
import React, {useState} from "react";

export class ProjectSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectIds : [123,456,789,1011]
        }
       
      }



    render() {
       return (
           <div>
               <span>
                   This is from Project Selection!!! 
                   This is project number 1: {this.state.projectIds[0]}
               </span>
           </div>
       )
   }
}