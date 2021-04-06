import * as React from 'react'
import {Text, View, StyleSheet, TextInput, Button} from 'react-native'

export default class LoginScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailID: '',
            password: ''
        }
    }
login = async(email,password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("You have been signed in!")
      this.props.navigation.navigate('WriteStoryScreen')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error!")
    });
}
render(){
    return(
        <View>
            <Text style = {{fontSize: 35, color: 'green', fontWeight: 'bold'}}>Bedtime Stories App</Text>
        <TextInput style = {{border: 'solid', height: 50, width: 200, color: 'black'}}
        placeholder = "Email"
        keyboardType = 'email-address'
        onChangeText = {(text)=> {
            this.setState({
                emailID:text
            })
        }}/>
        <TextInput style = {{border: 'solid', height: 50, width: 200, color: 'black'}}
        placeholder = "Password"
        secureTextEntry = {true}
        onChangeText = {(text)=> {
            this.setState({
                password:text
            })
        }}/>
        <Button title = "Login" color = "green" onPress = {()=> {
            this.login(this.state.emailID, this.state.password)
        }}/>
        </View>
    )
}
}