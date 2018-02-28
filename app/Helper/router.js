import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';

import Login from '../screens/Login'
import SignUp from '../screens/SignUp'


export const Root = StackNavigator({
    
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        }
    },
    // Otp: {
    //     screen: Otp,
    //     navigationOptions: {
    //         header: null,
            
    //     }
    // },
    // ForgotPassword:{
    //     screen: ForgotPassword,
    //     navigationOptions: {
    //         header: null,
            
    //     },
    // },
    // ForgotPasswordOtp:{
    //     screen: ForgotPasswordOtp,
    //     navigationOptions: {
    //         header: null,
    //     }
    // },
    // HomeScreen:{
    //     screen: HomeScreen,
    //     navigationOptions: {
    //         header: null,
    //     }
    // },
    // HomeScreen1:{
    //     screen: HomeScreen1,
    //     navigationOptions: {
    //         header: null,
    //     }
    // },
    // CreateInvoice:{
    //     screen: NewInvoice,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // TransportaionDetails:{
    //     screen: TransportaionDetails,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // OtherDetails:{
    //     screen: OtherDetails,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // Signature:{
    //     screen: Signature,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // BuyerConsigneeList:{
    //     screen: BuyerConsigneeList,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // AddBuyerConsignee:{
    //     screen: AddBuyerConsignee,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // ProductList:{
    //     screen: ProductList,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
    // AddProduct:{
    //     screen: AddProduct,
    //     navigationOptions:{
    //         header:null,
    //     }
    // }

    
 },
    {
    initialRouteName: 'SignUp',
});
