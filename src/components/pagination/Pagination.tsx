import React, { FC, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { CustomSearchInput, PageButton } from 'components'
import style from './style'

interface IPagination {
    pageSize: number,
    renderItem: ({ item }: { item: any }) => JSX.Element,
    data: any[],
    title: string
}

export const Pagination: FC<IPagination> = ({ pageSize, renderItem, data, title }) => {

    const [inputValue, setInputValue] = useState('')
    const [currentPage, setCurrentPage] = useState(1)

    const handleInputChange = (inputText: string) => {
        setInputValue(inputText)
        setCurrentPage(1)
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= Math.ceil(data.length / pageSize)) {
            setCurrentPage(newPage)
        }
    }

    const visibleData = data.filter((episode: any) =>
        episode.name.toLowerCase().includes(inputValue.toLowerCase())
    ).slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    )

    return (
        <View style={{ flex: 1 }}>
            <CustomSearchInput
                onInputChange={handleInputChange}
                placeHolder='İstediğiniz bölüm adını giriniz...'
            />
            <Text style={style.title}>
                {title}
            </Text>
            {visibleData.length === 0 && inputValue.length > 0 ? (
                <Text>
                    Aradığınız bölüm bulunamadı.
                </Text>
            ) : (
                <FlatList
                    data={visibleData}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    ListFooterComponent={() => (
                        <View style={style.innerContainer}>
                            <PageButton
                                onPress={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            />
                            <Text style={style.pageText}>Sayfa: {currentPage}</Text>
                            <PageButton
                                onPress={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage * pageSize >= data.length}
                                status='nextButton'
                            />
                        </View>
                    )}
                />
            )}

        </View>
    )
}
