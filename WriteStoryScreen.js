import * as React from 'react'
import {Text, View, StyleSheet, Image, TextInput, Button, KeyboardAvoidingView} from 'react-native'

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super()
            this.state={
                title: '',
                author: '',
                story: ''
            }
    }
    render(){
        return(
            <View style = {{flex: 1}}>
                <KeyboardAvoidingView>
                <TextInput 
                style={{height: 40, width: 1435, border: 'solid', borderColor: 'black'}}
                placeholder={'Title of Story'}
                onChangeText={text => {
                    this.setState({title:text})
                }}/>
                <TextInput 
                style={{height: 40, width: 1435, border: 'solid', borderColor: 'black'}}
                placeholder={'Authors full name'}
                onChangeText={text =>{
                    this.setState({author: text})
                }}/>
                <TextInput 
                style={{height: 600, width: 1435, border: 'solid', borderColor: 'black'}}
                placeholder={'Write your full story here'}
                multiline = {true}
                onChangeText={text =>{
                    this.setState({story:text})
                }}/>
                <Button title = 'Submit' color = 'blue'/>
                </KeyboardAvoidingView>
            </View>
        );
    }
}