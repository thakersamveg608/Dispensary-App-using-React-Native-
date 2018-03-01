import React from 'react';
import {BASE_URL,REQUEST_SIGNUP} from '../Helper/Urls'
import { Root } from '../Helper/router';
import {Container,
    Header,
    Title,
    Content,
    Button,
    Item,
    Label,
    Input,
    Body,
    Left,
    Right,
    Icon,
    Form,
    Toast,
    Text} from 'native-base';
import * as colors from '../values/colors';

import { KeyboardAvoidingView,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {create} from 'apisauce';
import styles from './Styles';

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
            <Container style={styles.container}>
                <Content>
                    <Text
                    style = {{textAlign:'center',fontSize:40,color:'white',marginTop:50}}>Sign Up</Text>
                </Content>
            </Container>
        );
    }
}
export default SignUp;