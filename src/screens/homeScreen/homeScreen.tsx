import React, { useState, useEffect } from 'react'
import { View, Image, StatusBar, Pressable } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { favoriesIcon, rickAndMortyBG } from 'assets'
import { EpisodeCard } from 'components/cards'
import { Pagination } from 'components'
import { useNavigation } from '@react-navigation/native'
import { fetchEpisodes } from 'utils/axios'

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const combinedEpisodes = await fetchEpisodes()
                setEpisodes(combinedEpisodes)
            } catch (error) {
                console.error('Bir hata oluştu:', error)
            }
        }

        fetchData()
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
                pageSize={15}
                renderItem={renderEpisodeCard}
                placeHolder='Search an Episode ...'
            />
        </View>
    )
}