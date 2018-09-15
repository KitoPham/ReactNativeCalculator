import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    displayContainer: {
      flex:2,
      backgroundColor: "#411820",
      justifyContent: "center",
      flexDirection:"column"
    },
    
    displayText: {
      textAlign: "right",
      fontSize: 40,
      paddingRight: 20,
      color: "white"

    },
  
    inputContainer:{
      flex:8,
      backgroundColor:"#333119"
    },
  
    inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderRadius:1,
      borderColor: 'white'
    },
  
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
  });

  export default styles;