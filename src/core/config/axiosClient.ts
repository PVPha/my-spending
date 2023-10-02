import axios from 'axios';
import Router from 'next/router';

const url = process.env.NEXT_PUBLIC_NOTION_API;
const token = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const notion_version = process.env.NEXT_PUBLIC_NOTION_VERSION;
const axiosClient = axios.create({
    baseURL: url,
    headers: {
        'Notion-Version': notion_version,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': token 
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (response?.data?.code === 10 || response?.data?.code === 14) {
            // Router.push({ pathname: '/login', query: { error: Create?.[response?.data?.resultMessage] || Create?.INVALID_TOKEN } }, '/login');
        }
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    },
);

export default axiosClient;
