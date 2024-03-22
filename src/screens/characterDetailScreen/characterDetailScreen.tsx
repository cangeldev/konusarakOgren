import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image, StatusBar, TouchableOpacity } from 'react-native'
import style from './style'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import { CharacterInfoCard } from 'components/cards'
import { favoriEnabled } from 'assets'

export const CharacterDetailScreen = () => {

    const route = useRoute<any>()
    const { characterId } = route.params
    const [character, setCharacter] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                setCharacter(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }

        fetchCharacter()
    }, [characterId])

    if (loading) {
        return (
            <View >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }
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
            <View style={style.infoView}>
                <CharacterInfoCard
                    title="Name"
                    info={character.name}
                />
                <CharacterInfoCard
                    title="Status"
                    info={character.status}
                />
                <CharacterInfoCard
                    title="Species"
                    info={character.species}
                />
                <CharacterInfoCard
                    title="Gender"
                    info={character.gender}
                />
                <CharacterInfoCard
                    title="Location"
                    info={character.location.name}
                />
            </View>
            <Text >Episodes:</Text>
            <View>
                {character.episode.map((episode: string, index: number) => (
                    <Text key={index} >
                        Episode - {episode.split('/').pop()}
                    </Text>
                ))}
            </View>
            <TouchableOpacity style={style.favoriIconCotainer}>
                <Image
                    source={favoriEnabled}
                    style={style.favoriIcon}
                />
            </TouchableOpacity>
        </View>
    )
}