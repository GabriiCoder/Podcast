import axios from 'axios';

const API_BASE_URL = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

const fetchPodcasts = async () => {
try {
    const response = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json');
    const data = response.data.feed.entry.map((podcast) => {
        return {
            id: podcast.id.attributes['im:id'],
            title: podcast.title.label,
            image: podcast['im:image'][0].label,

        };
    });
    return data;
} catch (error) {
    throw error;
    }
}

export { fetchPodcasts };