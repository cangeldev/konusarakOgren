import { View, Text, ActivityIndicator, Image, StatusBar } from 'react-native'
import { useRoute } from '@react-navigation/native'
import style from './style'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CharacterInfoCard } from 'components/cards'

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
        };

        fetchCharacter()
    }, [characterId])

    if (loading) {
        return (
            <View >
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
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
            <Text >Episodes:</Text>
            <View>
                {character.episode.map((episode: string, index: number) => (
                    <Text key={index} >
                        Episode - {episode.split('/').pop()}
                    </Text>
                ))}
            </View>
        </View>
    )
}