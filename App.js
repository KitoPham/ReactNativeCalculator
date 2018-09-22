import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import CalcButton from './components/CalcButton';
import styles from './Styles'

const buttons = [
  ['c','b'],
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  ['neg', 0, '.', '=', '+']
];

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      operationAvail : false,
      decimal: false,
      oldValue:0,
      currentOperation:null,
      newValue:'',
      displayedEquation : "",
      result: 0,
      neg: false,
    }
  }

  calculate(newEquation){
    result = this.state.result + eval(newEquation)
    return result
  }

  handlePress(value){
    if (typeof value == 'number'){
      var newValue = this.state.newValue + value
      if(this.state.neg && eval(newValue) > 0){
        newValue = eval(newValue * -1) + ''
      }
        this.setState({
          displayedEquation : this.state.currentOperation == '=' ? value : this.state.displayedEquation + '' + value,
          newValue: newValue,
          result : this.state.currentOperation == '=' ? value : eval(this.state.oldValue + (this.state.currentOperation!=null? this.state.currentOperation:"+") + "("+newValue+")"),
          currentOperation : this.state.currentOperation == '=' ? null : this.state.currentOperation,
          operationAvail : true
        });
    } else {
      switch(value){
        case 'c':
        case 'b':
          this.setState({
            operationAvail : false,
            decimal: false,
            oldValue:0,
            currentOperation:null,
            newValue:'',
            displayedEquation : "",
            result: 0,
            neg: false,
          })
          break;
        case '.':
          if(!this.state.decimal){
            this.setState({
              displayedEquation : this.state.displayedEquation + value,
              newValue : this.state.newValue + value,
              decimal : true
            })
          }
          break;
        case '=':
          if (this.state.operationAvail){
            this.setState({
              displayedEquation : this.state.result,
              operationAvail : true,
              currentOperation : value,
              newValue : '',
              decimal: true,
              neg: false
            });
          }
          break;
          case 'neg':
          if(!this.state.neg){
            var displayedEquation = this.state.displayedEquation;
            //A number was the last input
            if(/[0-9]*$/.test(displayedEquation) && this.state.newValue > 0){
              var newValue = eval(this.state.newValue * -1) + '';
              if(this.state.decimal && !newValue.contains('.')){
                newValue = newValue+'.'
              }
              displayedEquation = displayedEquation.replace(/[0-9.]*$/, newValue);
              console.log("displayed Equation: "+ displayedEquation+"| newValue: "+newValue);
              this.setState({
                displayedEquation : displayedEquation,
                newValue: newValue,
                neg: true,
                result: eval(this.state.oldValue +(this.state.currentOperation != null ? this.state.currentOperation : '+') + "("+ newValue+")")
              })
              
            } else {
              //Operation is the last character
              this.setState({
                displayedEquation: this.state.displayedEquation + '-',
                newValue:'-',
                neg: true
              })
            }
          }
          break;
        default:
        if (this.state.operationAvail){
          this.setState({
            displayedEquation : this.state.displayedEquation + value,
            currentOperation : value,
            oldValue: this.state.result,
            newValue: '',
            operationAvail : false,
            decimal: false,
            neg:false,
          });
          break;
        }
      }
    }
  };

  render(){
    return (
      <SafeAreaView style={styles.safeArea}>
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
      </SafeAreaView>
    );
  }

}


