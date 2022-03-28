import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Health from '../screens/Health';
import Sports from '../screens/Sports';
import Business from '../screens/Business';
import Technology from '../screens/Tech';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused ? 'ios-home' : 'ios-home-outline';
                        return (
                            <Ionicons name={iconName} color='tomato' size={30} />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='Health'
                component={Health}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused ? 'medkit' : 'medkit-outline';
                        return (
                            <Ionicons name={iconName} color='tomato' size={30} />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='Sports'
                component={Sports}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused ? 'basketball' : 'basketball-outline';
                        return (
                            <Ionicons name={iconName} color='tomato' size={30} />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='Tech'
                component={Technology}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName = focused ? 'game-controller' : 'game-controller-outline';
                        return (
                            <Ionicons name={iconName} color='tomato' size={30} />
                        );
                    }
                }}
            />
            <Tab.Screen
                name='Business'
                component={Business}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                        return (
                            <Ionicons name={iconName} color='tomato' size={30} />
                        );
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;