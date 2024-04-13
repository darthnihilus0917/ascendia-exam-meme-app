import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCachedImages = () => {
    const [memes, setMemes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMemes = async () => {
            try {
                const cachedMemes = await AsyncStorage.getItem('memes');
                if (cachedMemes) {
                    setMemes(JSON.parse(cachedMemes));
                } else {
                    const response = await fetch('https://api.imgflip.com/get_memes');
                    const data = await response.json();
                    setMemes(data.data.memes);
                    await AsyncStorage.setItem('memes', JSON.stringify(data.data.memes));
                }
            } catch (error) {
                console.error('Error fetching memes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMemes();
    }, []);

    return { memes, loading };
};

export default useCachedImages;
