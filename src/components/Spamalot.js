import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    makingArray(x){
        let arr =[]
        for(let i=0;i<500;i++){
            arr.push(x)
        }
        return arr
    }
    render(){
       
        return(
            this.makingArray(<Spam />)
        );
    }
}

export default Spamalot

