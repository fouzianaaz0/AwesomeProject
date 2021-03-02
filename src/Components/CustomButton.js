import React from "react";
import { View, TouchableOpacity, StyleSheet , Text }  from "react-native";

const CustomButton = (props) => {
  const content = (
    <View style={[styles.button],{backgroundColor : props.color}}>
    <Text style = {styles.text}>{props.text}</Text>
    </View>
  )

  return<TouchableOpacity onPress ={props.onPress}>{content}</TouchableOpacity>
};

const styles = StyleSheet.create({
    button : {
      backgroundColor : 'darkblue',
      height : 44,
      width : 300,
      borderRadius : 10,
      flexDirection : 'row' , 
      justifyContent : 'center' , 
      alignSelf :'center' , 
      position : 'absolute' , 
      bottom : 30
      },
      texts : {
        alignSelf : 'center' ,
        justifyContent : 'center',
        marginTop : 10 ,
        color : 'white',
        fontWeight : 'bold',
        fontSize : 16
      },
});

export default CustomButton;
