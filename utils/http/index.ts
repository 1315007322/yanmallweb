import http from './axios'


export const post = (url: string, data: any, config?: any) => {
    return http.post(url, data, config);
}