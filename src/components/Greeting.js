import React from "react";
import {View, Text} from 'react-native-web';
import './Greeting.css'
function Greeting(props){

    return(
        <View>
            <div className="greeting-user">
                <p>Hello <b>{props.name}</b>!</p>
            </div>
            
        </View>
    );
}

Greeting.defaultProps={
    name: "user",
};

export default Greeting;

