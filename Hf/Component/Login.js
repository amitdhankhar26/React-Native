import React, { Component } from 'react';
import {
 
  View,
  Text, 
  Button, StyleSheet, TextInput, Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';






 class Login extends React.Component {
   constructor(){

    super();
    
   this.state={
     name:"",
     password:""

   }
    }
   
   submit()
 {
   alert("buuton click")
 console.warn("uername pasword",this.state)
};
click()
{
  alert("buuton click")
};
  
render(){
  


  return(
  
    <View style={styles.view}>
      <View style={{marginBottom:40, marginHorizontal:10}}>
      <Image style={{ height:100, width:100 }}
       source={require('./hf/image/log.png')} />
      </View>
      <View>
      <Text style={styles.text1}>Hello</Text>
      <Text style={{marginHorizontal:25, marginBottom:25}}>Login in to your Account</Text>
      
<TextInput placeholder="Enter UserName" 
onChangeText={(text)=>{this.setState({name:text})}} style={styles.textbox}>   <Icon name="envelope" size={20}  />   Email or Phone Number</TextInput>

 
<TextInput placeholder="Enter Password" 
onChangeText={(text)=>{this.setState({password:text})}} style={styles.textbox} >   <Icon name="lock" size={25}  />    Enter Password    </TextInput>
  <Text style={{textAlign:'right', marginHorizontal:30, fontWeight:'bold', fontfamily:"SemiBold"}}>Forgot Password?</Text>
 
 <Text  onPress={ ()=>{this.submit()} } style={styles.button}  >Login</Text>
 <Text style={{ textAlign:'center',fontWeight:'light'}}>Don't have an account? Create Account </Text>

 <Text style={{ textAlign:'center',marginVertical:20}}>Other LogIn Option</Text>
</View>
<View style={{
  display: 'flex',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginHorizontal:50,
  
  
  }}>
   <Text  onPress={ ()=>{this.click()} } style={styles.button2}  >
   <Icon name="facebook" size={25}  />   Facebook
   </Text>
   <Text  onPress={ ()=>{this.click()} } style={styles.button3}>
     <Icon name="google" size={25}  />   Google</Text>
   
   
</View>

</View>


  );
  }
 };
 const styles=StyleSheet.create({
   textbox: {
    
    
     marginHorizontal:25,
     marginVertical:10,
     padding:10,
     backgroundColor:'lightgrey',
     borderRadius:23
     
     
   },
   view:{
     flex:1,
     justifyContent: 'center'


   },
   text1:{
     fontSize:35,
     marginVertical:5,
     marginHorizontal:25,
     color:'#003399',
     fontFamily:"SemiBold",
     fontWeight:'bold'
  

   },
   button: {
marginHorizontal:25,
marginVertical:20,
borderRadius:23,
padding:10,
color:'white',

backgroundColor:'#003399',
textAlign:'center',
fontSize:20,
fontWeight:'bold'
   },
   button2:{
     backgroundColor:'lightgrey',
     textAlign:'center',
     borderRadius:23,
     marginHorizontal:20,
     padding:5,
     paddingBottom:12,
     paddingRight:17,
     paddingLeft:17,
     fontSize:15,
     
     color:'#003399',
     fontWeight:'bold'
   },
   button3:{
     
    backgroundColor:'lightgrey',
    textAlign:'center',
    borderRadius:23,
    marginHorizontal:20,
  padding:5,
    paddingBottom:10,
    paddingRight:25,
    paddingLeft:25,
    fontSize:15,
  
    color:'red',
    fontWeight:'bold'
  }
 })
export default Login;
