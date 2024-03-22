import React, { useState, useEffect } from 'react'
import { View, Image, StatusBar, TouchableOpacity, Pressable } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { favoriesIcon, rickAndMortyBG } from 'assets'
import axios from 'axios'
import { EpisodeCard } from 'components/cards'
import { Pagination } from 'components'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {

    const navigation = useNavigation<any>()
    const renderEpisodeCard = ({ item }: any) => {
        return <EpisodeCard
            title={item.name}
            airDate={item.air_date}
            id={item.id}
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

            <Image
                source={rickAndMortyBG}
                style={style.bgImage}
            />
            <Pressable onPress={() => navigation.navigate("FavoriesScreen")} style={style.favoriIconContainer} >
                <Image
                    source={favoriesIcon}
                    style={style.favoriIcon}
                />
            </Pressable>
            <Pagination
                title='Episodes'
                data={episodes}
                pageSize={pageSize}
                renderItem={renderEpisodeCard}
            />
        </View>
    )
}


