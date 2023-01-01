import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const getNewsByCategory = () => {
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news',
        params: {mkt: 'en-US', setLang: 'EN', safeSearch: 'Moderate', textFormat: 'Raw'},
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

const getNewsWithSearch = (query) => {
    const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: {q: query, freshness: 'Week', textFormat: 'Raw', mkt: 'en-US', setLang: 'EN', safeSearch: 'Moderate'},
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

const getTrendingNews = () => {
    const options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
      params: {textFormat: 'Raw', mkt: 'en-US', setLang: 'EN', safeSearch: 'Moderate'},
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': process.env.API_KEY, 
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export { getNewsByCategory, getNewsWithSearch, getTrendingNews };