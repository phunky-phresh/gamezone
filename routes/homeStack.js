import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function Navigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={   ( {navigation} ) => {
                return  {headerTitle: () => <Header navigation={navigation} title='GameZone' />,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#eee' } }
            }
            } />
            <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title: "Review Details"}}/>
        </Stack.Navigator>
    )
}