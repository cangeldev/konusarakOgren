import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { rickAndMorty } from 'assets'

interface IEpisodeCard {
    title: string,
    airDate: string
}

export const EpisodeCard: FC<IEpisodeCard> = ({ title, airDate }) => {

    const year = airDate.substring(airDate.length - 4)

    return (
        <TouchableOpacity style={style.container}>
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
