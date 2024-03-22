import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, StatusBar } from 'react-native'
import axios from 'axios'
import { Pagination } from 'components/pagination/Pagination'
import { EpisodeCard } from 'components/cards'
import style from './style'
import { rickAndMortyBG } from 'assets'
import colors from 'assets/colors/colors'

export const HomeScreen = () => {

    const renderEpisodeCard = ({ item }) => {
        return <EpisodeCard
            title={item.name}
            airDate={item.air_date}
        />
    }

    const [episodes, setEpisodes] = useState<any>([])
    const pageSize = 15

    const fetchEpisodes = async () => {
        try {
            const responses = await Promise.all([
                axios.get('https://rickandmortyapi.com/api/episode'),
                axios.get('https://rickandmortyapi.com/api/episode?page=2'),
                axios.get('https://rickandmortyapi.com/api/episode?page=3'),
            ])
            const combinedEpisodes = responses.flatMap((response) => response.data.results)
            setEpisodes(combinedEpisodes)
        } catch (error) {
            console.error('Bir hata oluştu:', error)
        }
    }

    useEffect(() => {
        fetchEpisodes()
    }, [])

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.white}
                barStyle={"dark-content"}
            />
            <ScrollView>
                <Image
                    source={rickAndMortyBG}
                    style={style.bgImage}
                />
                <Pagination
                    title='Episodes'
                    data={episodes}
                    pageSize={pageSize}
                    renderItem={renderEpisodeCard}
                />
            </ScrollView>
        </View>
    )
}


