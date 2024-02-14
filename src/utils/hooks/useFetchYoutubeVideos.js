import { useEffect, useState } from "react";
import { VIDEO_API_URL } from "../constant";

export const useFetchYoutubeVideos = () => {

    const [youData, setYouData] = useState([]);
    const [error, setError] = useState(null);

    const getVideos = async () => {
        try {
            const response = await fetch(VIDEO_API_URL);
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
    }, []);

    return { youData, error };
}