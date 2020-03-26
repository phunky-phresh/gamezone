import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Drawer = createDrawerNavigator();


export default function Drawerr() {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeStack}></Drawer.Screen>
                <Drawer.Screen name="About" component={AboutStack}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}