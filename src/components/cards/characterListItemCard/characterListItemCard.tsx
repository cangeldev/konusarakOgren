import { Image, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native'

interface ICharacterListItemCard {
    name: string
    image: string
    id: string
}
export const CharacterListItemCard: FC<ICharacterListItemCard> = ({ name, id, image }) => {

    const navigation = useNavigation<any>()
    const handleButton = () => {
        navigation.navigate("CharacterDetailScreen", { characterId: id })
    }

    return (
        <TouchableOpacity
            style={style.container}
            onPress={handleButton} >
            <Image
                source={{ uri: image }}
                style={style.characterImage}
            />
            <Text numberOfLines={2} style={style.title}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}
