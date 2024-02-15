import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../redux/slices/searchSlice";

/**
 *  Function use to fetch all user's search data from the api.
 * 
 * @param searchQuery : A function take search query for fetch user's searched data.
 * 
 * @returns `searchData` : A function returns array of words that relate to searchQuery.
 */

export const useFetchYoutubeSearches = (searchQuery) => {

    const [searchData, setSearchData] = useState([]);
    const searchResult = useSelector(store => store.search);
    const dispatch = useDispatch();

    const getSearchSuggestion = async () => {

        const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const data = await response.json();
        setSearchData(data[1]);
        dispatch(cacheResult({
            [searchQuery]: data[1]
        }))
    }

    useEffect(() => {
        const timer = setTimeout(() => {

            if (searchResult[searchQuery]) {
                setSearchData(searchResult[searchQuery]);
            }
            else {
                getSearchSuggestion();
            }

        }, 200);

        return (() => {
            clearTimeout(timer);
        })
    }, [searchQuery]);

    return searchData;
}