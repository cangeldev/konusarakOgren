import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image, StatusBar, TouchableOpacity, FlatList, Alert } from 'react-native'
import style from './style'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRoute } from '@react-navigation/native'
import { CharacterInfoCard } from 'components/cards'
import { favoriEnabled, favori } from 'assets'

export const CharacterDetailScreen = () => {
    const route = useRoute<any>()
    const { characterId } = route.params
    const [character, setCharacter] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [isInFavorites, setIsInFavorites] = useState(false)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                setCharacter(data)
                checkIfInFavorites(data.id)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        };

        fetchCharacter();
    }, [characterId]);

    const checkIfInFavorites = async (id: number) => {
        const existingFavorites = await AsyncStorage.getItem('favorites')
        const favorites = existingFavorites ? JSON.parse(existingFavorites) : []
        const isInFav = favorites.some((fav: any) => fav.id === id)
        setIsInFavorites(isInFav)
    };

    const handleAddFavori = async () => {
        try {
            const existingFavorites = await AsyncStorage.getItem('favorites')
            const favorites = existingFavorites ? JSON.parse(existingFavorites) : []

            if (favorites.some((fav: any) => fav.id === character.id)) {
                Alert.alert('Character is already in favorites!')
                return
            }

            if (favorites.length >= 10) {
                Alert.alert("Favori karakter ekleme sayısını aştınız. Başka bir karakteri favorilerden çıkarmalısınız.")
                return
            }

            const newFavorite = {
                id: character.id,
                name: character.name,
                image: character.image
            }

            favorites.push(newFavorite)

            await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
            setIsInFavorites(true)
            Alert.alert('Character added to favorites!')
        } catch (error) {
            console.log('Error adding to favorites:', error)
            Alert.alert('Failed to add character to favorites!')
        }
    }

    if (loading) {
        return (
            <View style={style.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    const renderItem = ({ item }: { item: string }) => (
        <Text>
            Episode - {item.split('/').pop()}
        </Text>
    )

    return (
        <View style={style.container}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle={'dark-content'}
            />
            <Image
                source={{ uri: character.image }}
                style={style.image}
            />
            <Text style={style.title}>Character Info:</Text>
            <View style={style.infoView}>
                {['Name', 'Status', 'Species', 'Gender', 'Location'].map((title) => (
                    <CharacterInfoCard
                        key={title}
                        title={title as any}
                        info={title === 'Location' ? character.location.name : character[title.toLowerCase()]}
                    />
                ))}
            </View>
            <Text style={style.title}>Episodes:</Text>
            <FlatList
                data={character.episode}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={style.favoriIconCotainer}
                onPress={handleAddFavori}
            >
                <Image
                    source={isInFavorites ? favoriEnabled : favori}
                    style={style.favoriIcon}
                />
            </TouchableOpacity>
        </View>
    );
};
