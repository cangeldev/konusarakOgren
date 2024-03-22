import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICharacterInfoCard {
    title: string
    info: string
}
export const CharacterInfoCard: FC<ICharacterInfoCard> = ({ title, info }) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                {title}
            </Text>
            <Text style={style.infoText}>
                {info}
            </Text>
        </View>
    )
}
