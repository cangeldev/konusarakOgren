import React, { useState, useEffect } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import axios from 'axios'

export const HomeScreen = () => {

    const [episodes, setEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        fetchData(page)
    }, [page])

    const fetchData = async (pageNumber: any) => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`)
            setEpisodes(response.data.results)
            setTotalPages(response.data.info.pages)
        } catch (error) {
            console.error('Bir hata oluştu:', error)
        }
    }

    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1))
    }

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages))
    }

    return (
        <View>
            <FlatList
                data={episodes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                    title="Önceki"
                    onPress={handlePrevPage}
                    disabled={page === 1}
                />
                <Text>
                    {page} Sayfadasınız
                </Text>
                <Button title="Sonraki"
                    onPress={handleNextPage}
                    disabled={page === totalPages}
                />
            </View>
        </View>
    )
}
