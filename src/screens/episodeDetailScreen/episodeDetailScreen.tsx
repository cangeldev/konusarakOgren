import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import style from './style';
import { Pagination } from 'components';
import { CharacterListItemCard, EpisodeDetailsCard } from 'components/cards';
import { fetchCharacters, fetchEpisode } from 'utils/axios';

export const EpisodeDetailScreen = () => {

    const route = useRoute<any>();
    const { id } = route.params;
    const [episode, setEpisode] = useState<any>(null);
    const [characters, setCharacters] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const updatedEpisode = await fetchEpisode(id);
                setEpisode(updatedEpisode);
                setLoading(false);
            } catch (error) {
                console.error('Bir hata oluştu:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (episode && episode.characters) {
            const fetchCharactersData = async () => {
                try {
                    const formattedCharacters = await fetchCharacters(episode.characters);
                    setCharacters(formattedCharacters);
                } catch (error) {
                    console.error('Bir hata oluştu:', error);
                }
            };

            fetchCharactersData();
        }
    }, [episode]);

    const renderCharacter = () => {
        if (!characters || characters.length === 0) {
            return <Text style={style.characterText}>
                No characters found.
            </Text>;
        }

        return (
            <Pagination
                placeHolder='Search for character ...'
                pageSize={5}
                renderItem={({ item }) => (
                    <CharacterListItemCard
                        id={item.id}
                        name={item.name}
                        image={item.image}
                    />
                )}
                data={characters}
                title="Characters"
            />
        );
    };

    const renderItem = ({ item }: any) => (
        <View style={style.episodeContainer}>
            <Text style={style.headerTitle}>
                Episode Details
            </Text>
            <EpisodeDetailsCard
                title='Name '
                info={item.name}
            />
            <EpisodeDetailsCard
                title='Air Date '
                info={item.air_date}
            />
            <EpisodeDetailsCard
                title='Episode '
                info={item.episode}
            />
            {renderCharacter()}
        </View>
    );

    if (loading) {
        return (
            <View style={style.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={style.container}>
            <FlatList
                data={[episode]}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};
