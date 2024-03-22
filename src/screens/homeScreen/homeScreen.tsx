import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'
import { Pagination } from 'components/pagination/Pagination'

export const HomeScreen = () => {

    const renderRow = ({ item }) => {
        return <Text style={{ padding: 10 }}>{item.name}</Text>
    }
    
    const [episodes, setEpisodes] = useState<any>([])
    const pageSize = 15

    const fetchEpisodes = async () => {
        try {
            const responses = await Promise.all([
                axios.get('https://rickandmortyapi.com/api/episode'),
                axios.get('https://rickandmortyapi.com/api/episode?page=2'),
                axios.get('https://rickandmortyapi.com/api/episode?page=3'),
            ])
            const combinedEpisodes = responses.flatMap((response) => response.data.results)
            setEpisodes(combinedEpisodes)
        } catch (error) {
            console.error('Bir hata oluştu:', error)
        }
    }

    useEffect(() => {
        fetchEpisodes()
    }, [])

    return (
        <View>
            <Pagination
                data={episodes}
                pageSize={pageSize}
                renderItem={renderRow}
            />
        </View>
    )
}


