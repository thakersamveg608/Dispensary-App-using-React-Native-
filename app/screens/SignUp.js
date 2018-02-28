import React from 'react';
import {BASE_URL,REQUEST_SIGNUP} from '../Helper/Urls'
import { Root } from '../Helper/router';

import { TextInput, ActivityIndicator, ScrollView, StyleSheet, Text, View ,Image, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import { StackNavigator, } from 'react-navigation';
var FloatingLabel = require('react-native-floating-labels');
// import {create} from 'apisauce';

import Toast from 'native-base';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading :false,
            name:'',
            mobile:'',
            password:'',
            confirm_password:'',
            // blood:'',
            // usename:'',
            // email:'',
            showToast:false,
        }
    }

	onLogin = () => {
		this.props.navigation.navigate('Login');
	};

    onValidation(){
        
        if(this.state.name == ''){
            console.log('InValid Name');
            // Toast.show('Please Enter Company Name');
        }
        else if(this.state.mobile == '' || this.state.mobile.length != 10){
            console.log('InValid mobile');
            // Toast.show('Please Enter Valid Mobile No.');
        }
        else if(this.state.password == ''){
            console.log('InValid password');
            // Toast.show('Please Enter Valid Password');
        }
        else if(this.state.confirm_password == ''){
            console.log('InValid confirm_password');
            // Toast.show('Please Confirm Password');
        }
        else if(this.state.password != this.state.confirm_password){
            console.log('Passwords do not match');
            // Toast.show('Passwords do not match');
        }
        else{
            console.log('Valid Details');
            this.onSubmit();
        }
    }


    onSubmit() {
        var mob=  this.state.mobile;
        var details = {
                'name':this.state.name,
                'mobile' : this.state.mobile, 
                'password' : this.state.password,
                'confirm_password':this.state.confirm_password,
                // 'email' : this.state.email,
                // 'username' : this.state.username,
                // 'blood' : this.state.blood,
        };

        var formBody = [];
        for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        console.log(this.state.mobile);
        return fetch(BASE_URL+REQUEST_SIGNUP, 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                        },
                    credentials:'same-origin',
                    body: formBody,
                })
			.then((response) => response.json())
			.then((responseJson) =>{
				this.setState({
				    isLoading : false,
				}, function(){
                console.log("inside responsejson");
                console.log(responseJson.success);
                if(responseJson.success)
                    {
                        // console.log(responseJson.temp_access_token);
                        // this.props.navigation.navigate('Otp',{ 
                        //                 mobile : mob,
                        //                 temp_access_token:responseJson.temp_access_token,
                        //             });
                        ()=> Toast.show({
                            text: 'Successful!',
                            position: 'bottom',
                            buttonText: 'Okay'
                          })
                    }
                else{
                    // Toast.show(responseJson.message);
                }
				});
			});
	};


    render() {
        return(
            <View style={styles.container}>
                {/* <ScrollView contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator = {true}
                        keyboardShouldPersistTaps = 'never'
                        > */}
                <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
                >
                    <View style={{marginTop: 40, }}>
                        {/* <Image source={require('../src/main/res/drawable-xxxhdpi/logooo.png')} 
                                    style={styles.img_logo}
                                    width={130}
                                    height={100}
                                /> */}
                    </View>
                    <View style={{marginTop:35}}>
                        <View style={styles.container_element}>
                            {/* <Image source={require('../src/main/res/drawable-xxxhdpi/ic_account_circle_accent_500_24dp.png')} 
                                    style={styles.img_icon}/> */}
                            <TextInput
                                style={styles.text_input}
                                placeholder="Company Name"
                                onChangeText={(company_name) => this.setState({company_name})}
                                placeholderTextColor='#654236'
                                /> 
                        </View>
                        <View style={styles.container_element}>
                            {/* <Image source={require('../src/main/res/drawable-xxxhdpi/ic_phone_black_24dp.png')} 
                                    style={styles.img_icon}/> */}
                            <TextInput
                                style={styles.text_input}
                                placeholder="Mobile"
                                onChangeText={(mobile) => this.setState({mobile})}
                                keyboardType='numeric'
                                maxLength={10}
                                placeholderTextColor='#654236'
                                /> 
                        </View>
                        <View style={styles.container_element}>
                            {/* <Image source={require('../src/main/res/drawable-xxxhdpi/ic_lock_outline_accent_24dp.png')} 
                                    style={styles.img_icon}/> */}
                            <TextInput
                                style={styles.text_input}
                                placeholder="Password"
                                onChangeText={(password) => this.setState({password})}                            
                                placeholderTextColor='#654236'
                                /> 
                        </View>
                        <View style={{ flexDirection: 'row',paddingBottom : 6,alignItems: 'center',}}>
                            {/* <Image source={require('../src/main/res/drawable-xxxhdpi/ic_lock_outline_accent_24dp.png')} 
                                    style={styles.img_icon}/> */}
                            <TextInput
                                style={styles.text_input}
                                placeholder="Confirm Password"
                                onChangeText={(confirm_password) => this.setState({confirm_password})}                            
                                placeholderTextColor='#654236'
                                /> 
                        </View>
                        <View style={styles.signup_button}>
                            <Button 
                                text='SIGN UP'
                                onPress = {() => {this.onValidation(); }}
                                styleSheet= {styles.buttonTextSignUp}                         
                                />
                            <Text>Toast</Text>
                        </View>
                        <View style={styles.container_centre}>
                            <Text 
                                style={{
                                    color: '#000000',
                                    fontSize : 15,
                                }} 
                                onPress = {() => {this.onLogin(); }}
                                >
                                Already have an account ? Login
                                </Text>
                        </View>
                    </View>
                    </KeyboardAvoidingView>    
                {/* </ScrollView> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF07C',
        alignItems: 'center',
            
    },
    container_centre:{
        alignItems: 'center',  
        marginTop: 15,
    },
    container_element:{
         flexDirection: 'row',
         paddingBottom : 12,
         alignItems: 'center',
    },
    img_logo : {
        height:100,
        width: 100,
    },
    img_icon:{ 
        height: 25,
        width: 25,
        marginRight:8,
    },
    text_input:{
        height:50,
        width: 250,
        marginLeft:8,
        fontSize: 18,
    },
    signup_button: {
        marginTop : 25,
    },    
    button:{
        backgroundColor: '#654236',
        borderWidth :0,
        borderRadius :5,
        padding : 8,
        alignItems:'center',
    },
    buttonTextSignUp:{
        fontSize:25,
        color : 'white',
    },  
});
export default SignUp;