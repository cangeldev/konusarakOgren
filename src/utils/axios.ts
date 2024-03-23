import axios from 'axios';

export const fetchEpisodes = async () => {
    try {
        const responses = await Promise.all([
            axios.get('https://rickandmortyapi.com/api/episode'),
            axios.get('https://rickandmortyapi.com/api/episode?page=2'),
            axios.get('https://rickandmortyapi.com/api/episode?page=3'),
        ]);
        const combinedEpisodes = responses.flatMap((response) => response.data.results);
        return combinedEpisodes;
    } catch (error) {
        console.error('Bir hata oluştu:', error);
        throw error;
    }
};

export const fetchEpisode = async (id: any) => {
    try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
        const updatedEpisode = {
            ...data,
            characters: data.characters.map((charUrl: any) => charUrl.split('/').pop())
        };
        return updatedEpisode;
    } catch (error) {
        console.error('Bir hata oluştu:', error);
        throw error;
    }
};

export const fetchCharacters = async (charactersUrls: any) => {
    try {
        const charactersData = await Promise.all(
            charactersUrls.map((charId: any) =>
                axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
            )
        );
        const formattedCharacters = charactersData.map((char) => ({
            id: char.data.id,
            name: char.data.name,
            image: char.data.image
        }));
        return formattedCharacters;
    } catch (error) {
        console.error('Bir hata oluştu:', error);
        throw error;
    }
};