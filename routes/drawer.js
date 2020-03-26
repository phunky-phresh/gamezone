import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const RootDrawer = createDrawerNavigator();


export default function Drawer() {
    return(
        <NavigationContainer>
            <RootDrawer.Navigator>
                <RootDrawer.Screen name="Home" component={HomeStack} ></RootDrawer.Screen>
                <RootDrawer.Screen name="About" component={AboutStack}></RootDrawer.Screen>
            </RootDrawer.Navigator>
        </NavigationContainer>
    )
}