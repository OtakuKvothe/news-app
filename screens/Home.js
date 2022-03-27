import React, { useState, useEffect, useContext } from 'react';
import { View, Text, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import newAPI from '../api/News';
import apiKey from '../api/apiKey';

import ThemeContext from '../config/ThemeContext';

import Card from '../components/Card';
import Trending from './Trending';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI();
    }, []);

    function getNewsFromAPI() {
        setLoading(true)
        newAPI.get(`top-headlines?country=in&apiKey=${apiKey}`)
            .then(async function (response) {
                setNews(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false);
            })
    }

    if (!news) {
        return null;
    }

    //theme
    const theme = useContext(ThemeContext);

    var date = new Date().getDate();
    function months() {

        var month = new Date().getMonth() + 1; //To get the Current Month

        if (month == 1) {
            return "January"
        } else if (month == 2) {
            return "February"
        } else if (month == 3) {
            return "March"
        } else if (month == 4) {
            return "April"
        } else if (month == 5) {
            return "May"
        } else if (month == 6) {
            return "June"
        } else if (month == 7) {
            return "July"
        } else if (month == 8) {
            return "August"
        } else if (month == 9) {
            return "September"
        } else if (month == 10) {
            return "October"
        } else if (month == 11) {
            return "November"
        } else if (month == 12) {
            return "December"
        }
    }

    return (
        <View>
            <ScrollView style={{
                backgroundColor: theme.backColor
            }}>
                <View>
                    <TouchableOpacity style={{
                        backgroundColor: theme.cardBackground,
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 140,
                        padding: 10,
                        marginTop: 20,
                        marginLeft: 20,
                        elevation: 3
                    }}>
                        <Text style={{
                            color: theme.textColor,
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>
                            📅 {months()} {date}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginLeft: 20,
                        color: theme.textColor
                    }}>Trending News</Text>
                    {loading ? <ActivityIndicator size='large' /> : (
                        <Trending />
                    )}
                    <View style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.5,
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 5
                    }}
                    />
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginLeft: 20,
                        color: theme.textColor
                    }}>Recent News</Text>
                    <FlatList
                        data={news.articles}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <Card item={item} />
                        )}
                        style={{ marginBottom: 65 }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}