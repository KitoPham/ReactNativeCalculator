import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CalcButton from './components/CalcButton';
import styles from './Styles'

const buttons = [
  ['c','b'],
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
];

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      operationAvail : false,
      newOperation: "",
      decimal: false,
      displayedEquation : "",
      result: 0,
    }
  }

  calculate(newEquation){
    result = this.state.result + eval(newEquation)
    return result
  }

  handlePress(value){
    if (typeof value == 'number'){
        this.setState({
          displayedEquation : this.state.operation == '=' ? value : this.state.displayedEquation + value,
          newOperation : this.state.newOperation + value,
          result : this.state.operation == '=' ? value : eval(this.state.newOperation + value),
          operationAvail : true
        });
    } else {
      switch(value){
        case 'c':
        case 'b':
          this.setState({
            operationAvail : false,
            newOperation: "",
            decimal: false,
            displayedEquation : "",
            result: 0,
          })
          break;
        case '.':
          if(!this.state.decimal){
            this.setState({
              displayedEquation : this.state.displayedEquation + value,
              newOperation : this.state.newOperation + value,
              decimal : true
            })
          }
          break;
        case '=':
          if (this.state.operationAvail){
            this.setState({
              displayedEquation : this.state.result,
              newOperation : this.state.result,
              operationAvail : false
            });
          }
          break;
        default:
        if (this.state.operationAvail){
          this.setState({
            displayedEquation : this.state.displayedEquation + value,
            newOperation : this.state.result + value,
            operationAvail : false,
            decimal: false
          });
          break;
        }
      }
    }
  };

  render(){
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.displayContainer} horizontal={true}>
          <Text style={styles.displayText} numberOfLines={1}>{this.state.displayedEquation}</Text>
          <Text style={styles.displayText} numberOfLines={1} >{this.state.result}</Text>
        </ScrollView>
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


