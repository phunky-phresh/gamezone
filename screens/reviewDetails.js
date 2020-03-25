import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Review({ route, navigation }) {

    const { title, body, rating } = route.params;

    return(
        <View style={globalStyles.container}>
            <Text>{ title }</Text>
            <Text>{ body }</Text>
            <Text>{ rating }</Text>
        </View>
    )
};
