import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header( {navigation} ) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.text}>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        // width: '100%',
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    }
})