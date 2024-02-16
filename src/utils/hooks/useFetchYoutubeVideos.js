import { useEffect, useState } from "react";

/**
 *  Function use to fetch youtube videos details from the api.
 * 
 * @param searchQuery : A function take search query for fetch user's searched data.
 * 
 * @returns `youData, error` : A function returns array of videos and error that relate to searchQuery.
 */
export const useFetchYoutubeVideos = (fetchUrl, dependency = []) => {

    const [youData, setYouData] = useState([]);
    const [error, setError] = useState(null);

    const getVideos = async () => {
        try {
            const response = await fetch(fetchUrl);
            const data = await response.json();
            if (!response.ok) throw new Error(`${response.status}`);

            setYouData(data?.items);
            setError(null);
            return data?.items;

        } catch (err) {
            console.error("Error fetching YouTube videos:", err);
            setError(err.message || "An error occurred");
        }

    }

    useEffect(() => {
        getVideos();
    }, dependency);

    return { youData, error };
}