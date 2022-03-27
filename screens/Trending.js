import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, ActivityIndicator } from 'react-native';

import TopNewsCard from '../components/TopNewsCard';
import newAPI from '../api/News';
import apiKey from '../api/apiKey';

function Trending({ navigation }) {

    const [isLoading, setIsLoading] = useState(false);
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI();
    }, []);

    function getNewsFromAPI() {
        newAPI.get(`top-headlines?country=in&apiKey=${apiKey}`)
            .then(async function (response) {
                setNews(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setIsLoading(false);
            })
    }

    if (!news) {
        return null;
    }

    return (
        <ScrollView>
            {isLoading ? <ActivityIndicator visibel={true} /> : (
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={news.articles}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TopNewsCard item={item} />
                    )}
                />
            )}
        </ScrollView>
    )
}

export default Trending;