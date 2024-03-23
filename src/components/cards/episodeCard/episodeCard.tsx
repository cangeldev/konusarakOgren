import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { rickAndMorty } from 'assets'
import { useNavigation } from '@react-navigation/native'

interface IEpisodeCard {
    title: string,
    airDate: string,
    id: string
}

export const EpisodeCard: FC<IEpisodeCard> = ({ title, airDate, id }) => {

    const navigation = useNavigation<any>()
    const year = airDate.substring(airDate.length - 4)

    const handleButton = () => {
        navigation.navigate("EpisodeDetailScreen", { id: id })
    }

    return (
        <TouchableOpacity onPress={handleButton} style={style.container}>
            <Image
                source={rickAndMorty}
                style={style.image}
            />
            <View style={style.innerContainer}>
                <Text numberOfLines={2} style={style.title}>
                    {title}
                </Text>
                <Text>
                    {year}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
