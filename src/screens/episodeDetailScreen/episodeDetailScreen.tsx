import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'
import style from './style'

export const EpisodeDetailScreen = () => {

    const navigation = useNavigation<any>()
    const route = useRoute<any>()
    const { id } = route.params
    const [episode, setEpisode] = useState<any>(null)
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

    const renderItem = ({ item }: any) => (

        <View style={style.episodeContainer}>
            <Text style={style.detailText}><Text style={style.boldText}>Name:</Text> {item.name}</Text>
            <Text style={style.detailText}><Text style={style.boldText}>Air Date:</Text> {item.air_date}</Text>
            <Text style={style.detailText}><Text style={style.boldText}>Episode:</Text> {item.episode}</Text>
            <Text style={style.detailText}><Text style={style.boldText}>Characters:</Text></Text>
            <FlatList
                data={item.characters}
                renderItem={({ item }) => <TouchableOpacity onPress={() => navigation.navigate("CharacterDetailScreen", { characterId: item })}><Text style={style.characterText}> Characters - {item}</Text></TouchableOpacity>}
                keyExtractor={(item, index) => index.toString()}
                nestedScrollEnabled={true}
                ListEmptyComponent={() => <Text style={style.characterText}>No characters found.</Text>}
            />
        </View>
    );

    if (loading) {
        return (
            <View style={style.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        )
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>Episode ID: {id}</Text>
            <FlatList
                data={[episode]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}