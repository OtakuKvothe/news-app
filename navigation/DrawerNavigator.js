import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Theme from '../config/Theme';
import ThemeContext from '../config/ThemeContext';
import { EventRegister } from 'react-native-event-listeners';
import { DarkTheme, DefaultTheme, DrawerActions, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Health from '../screens/Health';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        let eventListener = EventRegister.addEventListener(
            'themeChange',
            (data) => {
                setIsDarkMode(data);
                console.log(data);
            }
        );

        return () => {
            EventRegister.removeEventListener(eventListener);
        };
    });

    return (
        <ThemeContext.Provider value={isDarkMode === true ? Theme.dark : Theme.light}>
            <NavigationContainer theme={isDarkMode === true ? DarkTheme : DefaultTheme}>
                <Drawer.Navigator initialRouteName='Home'>
                    <Drawer.Screen name='Home' component={Home} />
                    <Drawer.Screen name='Health' component={Health} />
                </Drawer.Navigator>
            </NavigationContainer>
        </ThemeContext.Provider>
    );
}