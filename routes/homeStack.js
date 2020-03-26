import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const Stack = createStackNavigator();

export default function Navigator() {
    return(
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{   title: "GameZone",
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#333',
                                    height: 60,
                                }
                }
                } />
                <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title: "Review Details"}}/>
            </Stack.Navigator>
    )
}