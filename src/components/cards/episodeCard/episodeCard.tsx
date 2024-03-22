import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { rickAndMorty } from 'assets'
import { useNavigation } from '@react-navigation/native'

interface IEpisodeCard {
    title: string,
    airDate: string
}

export const EpisodeCard: FC<IEpisodeCard> = ({ title, airDate }) => {

    const navigation = useNavigation<any>()
    const year = airDate.substring(airDate.length - 4)

    return (
        <TouchableOpacity onPress={() => navigation.navigate("EpisodeDetailScreen")} style={style.container}>
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
