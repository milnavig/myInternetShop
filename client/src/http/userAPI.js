import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const registration = async (email, password, username) => {
    const { data } = await $host.post('api/user/registration', {email, password, username, role: 'USER'});
    localStorage.setItem('token', data.access_token);
    return jwt_decode(data.access_token);
}

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.access_token);
    console.log(data.access_token);
    return jwt_decode(data.access_token);
}

// version without refresh token
/*
export const check = async () => {
    const { data } = await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.access_token);
    return jwt_decode(data.access_token);
}
*/

// version with refresh token
export const check = async () => {
    const { data } = await $authHost.get('api/user/refresh');
    localStorage.setItem('token', data.access_token);
    return jwt_decode(data.access_token);
}

export const logout = async () => {
    await $authHost.post('api/user/logout');
}