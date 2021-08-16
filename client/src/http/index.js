import axios from 'axios';

const $host = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);

$authHost.interceptors.response.use((config) => { return config; }, async (error) => {
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        const originalRequest = error.config;
        originalRequest._isRetry = true;
        const { data } = await axios.get('api/user/refresh', {
            withCredentials: true,
            baseURL: process.env.REACT_APP_API_URL
        });
        localStorage.setItem('token', data.access_token);
        return $authHost.request(originalRequest);
    }
    throw error;
});

export {$host, $authHost}