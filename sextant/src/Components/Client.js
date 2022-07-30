import React, { Component } from 'react';

var W3CWebSocket = require('websocket').w3cwebsocket;

var client = new W3CWebSocket('ws://localhost:55455');


export default class Client extends Component{
    componentDidMount(){
        client.onerror = function() {
            console.log('Connection Error');
        };
        
        client.onopen = function(){
            console.log("Connected...");
        };        

        client.onmessage = function(message){
            const dataFromServer = JSON.parse(message.data);
            console.log('got reply!', dataFromServer);
        }
    }
    render(){
        return(
            <div>
                Testing the app...
            </div>
        )
    }

}


