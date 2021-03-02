import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native';
import CustomButton from "./src/Components/CustomButton";

class App extends Component {
  componentDidMount(){ 
    setInterval(() => (
      this.setState(
        { curTime : new Date().toLocaleString()}
      )
    ), 1000);
  }


state = {curTime:new Date().toLocaleString()};

  render() {
  return (
    <SafeAreaView style={styles.container}>
    <View style = {styles.header}>
    <Text style ={styles.notificationText}>Notifications</Text>
    <Text style = {styles.deletText}>DELETE</Text>
    </View>
    <View style = {{flexDirection : 'row' , alignSelf : 'flex-start' , position : 'absolute' , left : 20 , top : 150 }}>
    <Text style={styles.todayText}>TODAY</Text>
    </View>
    <View style={styles.layout}>
      <Text style = {{...styles.date , position : 'absolute', right : 10 , top : 10}}>{this.state.curTime}</Text>
      <Text style = {{...styles.InformText , marginLeft : 10 , position : 'absolute' , top : 50}}>Dear Host, {'\n'}
      We have received a new booking request.Please {'\n'}
      view the details below.
      </Text>
      <Text style = {{...styles.detail , marginLeft : 10 , position : 'absolute' , top : 120}}>Booking Details</Text>
       <View style = {{flexDirection : 'row', alignSelf : 'flex-start' , justifyContent : 'space-evenly' , width : 300 , position : 'absolute' , top : 160 }}>
       <Image style ={{...styles.image , marginLeft : 10}} source = {require('./img/HotelImage.jpg')}></Image>
       <View style = {{marginLeft : 15}}>
        <Text style ={{fontWeight :'bold' , fontSize : 16}}>DLFC Corporate Towers </Text>
        <View style ={{flexDirection : 'row' , alignSelf : 'flex-start' , justifyContent : 'space-between' }}>
        <Image style = {{height : 20 , width : 10 , marginTop : 10}} source = {require ('./img/location.png')}></Image>
        <Text style ={{fontSize : 11 , marginLeft : 10 , marginTop : 10 , color : 'gray'}}>Diplomatic Enclave, Chanakyapuri{'\n'} New Delhi, Delhi 110021</Text>
        </View>
        </View>
        <View>

        </View>
      </View>
      <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,alignSelf : 'flex-start', width : 260 ,marginLeft : 10, position : 'absolute' , top : 240  }}>
        <Text style = {styles.date}>Start Date : </Text>
        <Text style = {styles.date}>End Date : </Text>
      </View>
      <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,alignSelf : 'flex-start', width : 300 ,marginLeft : 10, position : 'absolute' , top : 260  }}>
        <Text style = {styles.dates}>Thursday,May 04 2020</Text>
        <Text style = {{...styles.dates, marginLeft : 55}}>Thursday,May 12 2020</Text>
      </View>
      <View style = {{flexDirection : 'row' ,marginLeft : 10 , position : 'absolute' , top : 290 }}>
      <Text style ={styles.room}>Meeting Room Hot X 10</Text>
      </View>
      <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,alignSelf : 'flex-start' , width : 300 , marginLeft : 10 , position : 'absolute' , top : 330}}>
        <Text style = {styles.TextSize}>Booking ID</Text>
        <Text style = {styles.TextSize}>22460175</Text>
      </View>
      <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,alignSelf : 'flex-start' , width : 300 , marginLeft : 10 , position : 'absolute' , top : 360}}>
        <Text style = {styles.TextSize}>Booking Amount</Text>
        <Text style = {styles.TextSize}>2200$</Text>
      </View>
      <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,alignSelf : 'flex-start' , width : 300 , marginLeft : 10, position : 'absolute' , top : 390 }}>
        <Text style = {styles.TextSize}>Payment Type</Text>
        <Text style = {styles.TextSize}>Monthly</Text>
      </View>
      {/* <TouchableOpacity style = {styles.button}>
        <Text style = {styles.texts}>VIEW BOOKING</Text>
        </TouchableOpacity> */}
        <CustomButton
          text = {"Click"} 
          color = {"blue"}
        />
      </View>
  </SafeAreaView>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationText:{
    fontSize : 18,
    fontWeight : 'bold'
  },
  deletText:{
    color :'blue',
    fontWeight : '500',
    fontSize : 12
  },
  todayText:{
    color : 'gray',
    fontSize : 14,
    fontWeight : '600'
  },
  date:{
    color : 'gray' ,
    fontWeight : '600',
    fontSize : 13,
  },
  InformText : {
    color : 'black',
    fontWeight : '500',
    fontSize : 14,
    marginRight : 0.5
  },
  detail:{
    color : 'black',
    fontWeight : '700' ,
    fontSize : 14
  },
  image:{
    height : 60,
    width : 80,
    borderRadius : 10
  },
  dates : {
    color : 'black' ,
    fontWeight : '600',
    fontSize : 12,
  },
  room:{
    fontWeight : 'bold',
    fontSize : 16,
    color : 'black'
  },
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
  layout:{
    alignSelf : 'center' , 
    justifyContent : 'center' , 
    backgroundColor : 'white', 
    borderRadius : 10 ,
    height : 600 , 
    width : 350 , 
    marginTop : 110 ,
    shadowColor: 'lightgray', 
    shadowOffset: {width: 0,height: 1},
    shadowRadius: 1,
    shadowOpacity: 1.0
  },
  TextSize : {
    fontSize : 15
  },
  header:{

    flexDirection : 'row' , 
    alignSelf : 'center' , 
    justifyContent : 'space-evenly', 
    width : 650 ,
    position : 'absolute' , 
    top : 80 
  },
});

export default App;