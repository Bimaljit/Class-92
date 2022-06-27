import React ,{Component} from'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import Calender from './Calender'
import {Card} from 'react-native-paper';
import react from 'react';

export default class Home extends Component{
    render(){
        const name = this.props.navigation.getParam('name')
        const task = this.props.navigation.getParam('task')

        const Taskdescription = this.props.navigation.getParam('Taskdescription')
        return(
            <View  style = {styles.container}>
            <Card style = {styles.card}>
            <Text style = {styles.Txt}>  Welcome,{Name}  </Text>
</Card>
            </View>
        )
    }
   
}