import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native'
import style from './style'
import { FavoriesCard } from 'components/cards'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoriesScreen = () => {
    const [favorites, setFavorites] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem('favorites')
                if (storedFavorites) {
                    setFavorites(JSON.parse(storedFavorites))
                }
            } catch (error) {
                Alert.alert('Hata', 'Favoriler getirilirken bir hata oluştu!')
            } finally {
                setLoading(false)
            }
        }
        fetchFavorites()
    }, [])

    const handleRemoveFavorite = async (characterId: number) => {
        try {
            const updatedFavorites = favorites.filter((fav) => fav.id !== characterId)
            setFavorites(updatedFavorites)
            await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites))
        } catch (error) {
            Alert.alert('Hata', 'Favori kaldırılırken bir hata oluştu!')
        }
    }

    const renderItem = ({ item }: { item: any }) => (
        <FavoriesCard
            id={item.id}
            title={item.name}
            image={item.image}
            onRemove={handleRemoveFavorite}
        />
    )

    const ItemSeparator = () =>
        <View
            style={style.separator}
        />

    if (loading) {
        return (
            <View style={style.container}>
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                />
            </View>
        )
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Favories Screen</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                ItemSeparatorComponent={ItemSeparator}
                columnWrapperStyle={style.columnWrapper}
            />
        </View>
    )
}
