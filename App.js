import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalcButton from './components/CalcButton';
import styles from './Styles'

const buttons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      operationAvail : true,
      operation : null,
      equation : "",
      oldValue: 0,
      newInput : 0,
      result: 0,
    }
  }

  handlePress(value){
    if (typeof value == 'number'){
      let newValue = this.state.newInput * 10 + value
        this.setState({
          equation : this.state.operation == '=' ? value : this.state.equation + value,
          newInput : newValue,
          result : this.state.operation == '=' ? value : eval(this.state.oldValue + this.state.operation + newValue),
          operationAvail : true
        });
    } else {
      switch(value){
        case '=':
          if (this.state.operationAvail){
            this.setState({
              equation : this.state.result,
              oldValue : this.state.result,
              operation : value,
              newInput:0,
              operationAvail : false
            });
          }
          break;

        default:
        if (this.state.operationAvail){
          this.setState({
            operation : value,
            equation : this.state.equation + value,
            oldValue : this.state.result,
            newInput:0,
            operationAvail : false
          });
          break;
        }
      }
    }
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{this.state.equation}</Text>
          <Text style={styles.displayText}>{this.state.result}</Text>
        </View>
        <View style={styles.inputContainer}>
          {buttons.map((row, index) =>
            <View style={styles.inputRow} key={index}>
              {row.map((buttonValue, buttonIndex)=>
                <CalcButton value={buttonValue} 
                key={buttonIndex}
                onPress = {() => this.handlePress(buttonValue)}/>
              )}
            </View>
          )}
        </View>
      </View>
    );
  }

}


