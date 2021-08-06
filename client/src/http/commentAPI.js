import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const sendComment = async (comment) => {
    const { data } = await $authHost.post('api/device/action/comment', comment);
    return data;
}

export const fetchComments = async (deviceId) => {
    const { data } = await $host.get('api/device/action/comment/' + deviceId);
    return data;
}
