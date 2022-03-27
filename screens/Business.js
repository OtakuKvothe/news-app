import React, { useEffect, useContext, useState } from 'react';
import {
    Text, 
    FlatList,
    ActivityIndicator,
    ScrollView
} from 'react-native';

import ThemeContext from '../config/ThemeContext';

import Card from '../components/Card';
import newAPI from '../api/News';
import apiKey from '../api/apiKey';

export default function Business({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState([]);

    const theme = useContext(ThemeContext);

    useEffect(() => {
        getNewsFromAPI();
    }, []);

    function getNewsFromAPI() {
        setIsLoading(true);
        newAPI.get(`top-headlines?country=in&category=business&apiKey=${apiKey}`)
        .then(async function(response){
            setNews(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
        .finally(function(){
            setIsLoading(false);
        })
    }

    if(!news){
        return null;
    }

    return (
        <ScrollView style={{
            backgroundColor: theme.backColor
        }}>
            <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginLeft: 20,
                        color: theme.textColor
                    }}>Business News</Text>
            {isLoading ? <ActivityIndicator size='large' /> : (
                <FlatList
                    data={news.articles}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Card item={item} />
                    )}
                />
            )}
        </ScrollView>
    )
}