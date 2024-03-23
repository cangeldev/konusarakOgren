import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import style from './style'
import { Pagination } from 'components'


export const EpisodeDetailScreen = () => {

    const navigation = useNavigation<any>()
    const route = useRoute<any>()
    const { id } = route.params
    const [episode, setEpisode] = useState<any>(null)
    const [characters, setCharacters] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchEpisode = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
                const updatedEpisode = {
                    ...data,
                    characters: data.characters.map((charUrl: string) => charUrl.split('/').pop())
                }
                setEpisode(updatedEpisode)
                setLoading(false)
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }

        fetchEpisode()
    }, [id])

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const charactersData = await Promise.all(
                    episode?.characters.map((charId: string) =>
                        axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
                    ) || []
                )
                const formattedCharacters = charactersData.map((char: any) => ({
                    id: char.data.id,
                    name: char.data.name,
                    image: char.data.image
                }))
                setCharacters(formattedCharacters)
            } catch (err) {
                console.log(err)
            }
        }

        if (episode) {
            fetchCharacters()
        }
    }, [episode])

    const renderCharacter = () => {
        if (!characters || characters.length === 0) {
            return <Text style={style.characterText}>
                No characters found.
            </Text>
        }

        return (
            <Pagination
                placeHolder='Search for character ...'
                pageSize={5}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate("CharacterDetailScreen", { characterId: item.id })}>
                        <View style={style.characterItem}>
                            <Image source={{ uri: item.image }} style={style.characterImage} />
                            <Text style={style.characterName}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                data={characters}
                title="Characters"
            />
        )
    }

    const renderItem = ({ item }: any) => (
        <View>
            <Text style={style.detailText}><Text style={style.boldText}>Name:</Text> {item.name}</Text>
            <Text style={style.detailText}><Text style={style.boldText}>Air Date:</Text> {item.air_date}</Text>
            <Text style={style.detailText}><Text style={style.boldText}>Episode:</Text> {item.episode}</Text>
            {renderCharacter()}
        </View>
    )

    if (loading) {
        return (
            <View style={style.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return (
        <View style={style.container}>
            {/* <Text style={style.title}>Episode ID: {id}</Text> */}
            <FlatList
                data={[episode]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

