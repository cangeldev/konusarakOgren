import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, FlatList } from 'react-native'
import style from './style'
import axios from 'axios'
import { CustomSearchInput, PageButton } from 'components'

export const HomeScreen = () => {

    const [episodes, setEpisodes] = useState<any>([])
    const [filteredEpisodes, setFilteredEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [inputValue, setInputValue] = useState('')

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

    const filterEpisodes = useCallback(() => {
        const filtered = episodes.filter((episode: any) =>
            episode.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        setFilteredEpisodes(filtered);
    }, [episodes, inputValue])

    const handleInputChange = (inputText: string) => {
        setInputValue(inputText)
    }

    const handlePrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1))
    }

    const handleNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, totalPages))
    }

    useEffect(() => {
        filterEpisodes()
    }, [inputValue, filterEpisodes])

    return (
        <View>
            <CustomSearchInput
                onInputChange={handleInputChange}
                placeHolder='İstediğiniz bölüm adını giriniz...'
            />
            {filteredEpisodes.length === 0 && inputValue.length > 0 ? (
                <Text style={style.noResultText}>
                    Aradığınız bölüm bulunamadı.
                </Text>
            ) : (
                <FlatList
                    data={filteredEpisodes.length > 0 ? filteredEpisodes : episodes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Text>{item.name}</Text>
                    )}
                />
            )}
            <View style={style.container}>
                <PageButton
                    onPress={handlePrevPage}
                    disabled={page === 1}
                />
                <Text>
                    {page} Sayfadasınız
                </Text>
                <PageButton
                    onPress={handleNextPage}
                    disabled={page === totalPages}
                    status='nextButton'
                />
            </View>
        </View>
    )
}
