import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    safeArea:{
      flex:1
    },
    container: {
      paddingTop:30,
      flex: 1,
      backgroundColor: "#411820",
    },
    displayContainer: {
      flex:2,
      backgroundColor: "#411820",
      justifyContent: "center",
      flexDirection:"column"
    },
    displayText: {
      flex:1,
      textAlign: "right",
      fontSize: 40,
      paddingRight: 20,
      color: "white",
    },
  
    inputContainer:{
      flex:4,
      backgroundColor:"#333119"
    },
  
    inputButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: 'black'
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