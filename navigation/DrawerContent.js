import React, { useState, useContext } from 'react';
import { View, Text, Switch, Image } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';

import { EventRegister } from 'react-native-event-listeners';
import ThemeContext from '../config/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerContent() {

    const theme = useContext(ThemeContext);
    const [isEnabled, setIsEnabled] = useState(false);

    return (
        <DrawerContentScrollView>
            <View style={{
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: 'tomato',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignItems: 'center'
                }}>QuikNews</Text>
            </View>
            <DrawerItem label='Theme' />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 8,
                backgroundColor: 'tomato',
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30
            }}>
                <Ionicons name='ios-moon-sharp' size={25} color={theme.iconColor} />
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: theme.iconColor,
                    alignItems: 'center'
                }}>Dark Mode</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#ffffff" : "#E4F2EF"}
                    value={isEnabled}
                    onValueChange={(value) => {
                        setIsEnabled(value)
                        EventRegister.emit('themeChange', value)
                    }}
                    style={{
                        marginTop: -13
                    }}
                />
            </View>
            <View style={{
                marginBottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 300,
            }}>
                <Text style={{
                    backgroundColor: 'tomato',
                    height: 30,
                    width: 140,
                    color: 'white',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5
                }}
                >Made by Swarnendu</Text>
            </View>
        </DrawerContentScrollView>
    );
}