import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
    return(
            <Stack.Navigator>
                <Stack.Screen name='About' component={About} options={( {navigation} ) => {
                return  {headerTitle: () => <Header navigation={navigation} title='About GameZone' />,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#eee' } }
            }
                } />
            </Stack.Navigator>
    )
}