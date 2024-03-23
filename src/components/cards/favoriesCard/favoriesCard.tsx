import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import style from './style'
import { favoriEnabled } from 'assets'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IFavoriesCard {
    id: number
    title: string
    image: string
    onRemove: (id: number) => void
}

export const FavoriesCard: FC<IFavoriesCard> = ({ id, title, image, onRemove }) => {

    const handleIcon = () => {
        Alert.alert(
            'Dikkat',
            `${title} isimli karakteri favorilerden kaldırmak istediğinize emin misiniz?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => removeFavorite(id),
                },
            ]
        )
    }

    const removeFavorite = async (characterId: number) => {
        try {
            const existingFavorites = await AsyncStorage.getItem('favorites')
            if (existingFavorites) {
                let favorites = JSON.parse(existingFavorites)
                const updatedFavorites = favorites.filter((fav: any) => fav.id !== characterId)

                await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites))
                onRemove(characterId)
                Alert.alert('Başarılı', `${title} favorilerden kaldırıldı!`)
            }
        } catch (error) {
            Alert.alert('Hata', 'Favori kaldırılırken bir hata oluştu!')
        }
    }

    return (
        <View style={style.container}>
            <Image
                source={{ uri: image }}
                style={style.image}
            />
            <Text style={style.title}>
                {title}
            </Text>
            <TouchableOpacity onPress={handleIcon} style={style.favoriIconCotainer}>
                <Image
                    source={favoriEnabled}
                    style={style.favoriIcon}
                />
            </TouchableOpacity>
        </View>
    )
}
