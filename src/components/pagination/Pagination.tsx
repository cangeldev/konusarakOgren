import React, { FC, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { CustomSearchInput, PageButton } from 'components'
import style from './style'

interface IPagination {
    pageSize: number
    renderItem: ({ item }: { item: any }) => JSX.Element
    data: any[]
    title: string
    placeHolder?: string
}

export const Pagination: FC<IPagination> = ({ pageSize, renderItem, data, title, placeHolder }) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)

    const handleInputChange = (inputText: string) => {
        setInputValue(inputText)
        setCurrentPage(1)
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= Math.ceil(data.length / pageSize)) {
            setCurrentPage(newPage)
        }
    }

    const filteredData = data.filter(
        (episode) => episode.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    const totalPages = Math.ceil(filteredData.length / pageSize)
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = currentPage * pageSize
    const visibleData = filteredData.slice(startIndex, endIndex)

    const renderFooter = () => (
        <View style={style.innerContainer}>
            <PageButton
                onPress={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            <Text style={style.pageText}>Sayfa: {currentPage}</Text>
            <PageButton
                onPress={() => handlePageChange(currentPage + 1)}
                disabled={endIndex >= filteredData.length}
                status="nextButton"
            />
        </View>
    )

    return (
        <View style={{ flex: 1 }}>
            <CustomSearchInput
                onInputChange={handleInputChange}
                placeHolder={placeHolder as any}
            />
            <Text style={style.title}>{title}</Text>
            {visibleData.length === 0 && inputValue.length > 0 ? (
                <Text>
                    Aradığınız bölüm bulunamadı.
                </Text>
            ) : (
                <FlatList
                    data={visibleData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={renderFooter}
                />
            )}
        </View>
    )
}
