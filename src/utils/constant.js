export const VIDEO_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_API_KEY}`;

export const YOUTUBE_SEARCH_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_SEARCH_QUERY_API = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=';

export const LIVE_CHAT_COUNT = 15;