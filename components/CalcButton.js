import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native'
import styles from '../Styles';


export default class CalcButton extends React.Component{
    render(){
        return(
            <TouchableHighlight style={styles.inputButton}
                underlayColor = "white"
                onPress = {this.props.onPress}>
                <Text style={styles.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    };
}