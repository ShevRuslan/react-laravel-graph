export default class GhapiService {
    _apiBase = 'http://localhost:8000/api';

    getResource = async (url, data, method) => {
        const res = await fetch(`${this._apiBase}${url}`,{
            body: data,
            method: method
        });

        if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    }
    authUser = async (data) => {
        const res = await this.getResource('/user/login', data, 'POST');
        return res;
    }
}