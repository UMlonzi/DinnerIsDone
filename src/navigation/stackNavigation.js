import { createStackNavigator } from "@react-navigation/native-stack"
import { createAppContainer } from "react-navigation";
import LoginOTP from "../screens/LoginOTP";
import LoginEmail from "../screens/LoginEmail.js";
import TabNavigation from "./tabNavigation";

const screens = {
    LoginOTP: {
        screen: LoginOTP
    },
    LoginEmail: {
        screen: LoginEmail
    },
    Home: {
        screen: TabNavigation
    },
}


const StackNavigation = createStackNavigator(screens);

export default createAppContainer(StackNavigation);