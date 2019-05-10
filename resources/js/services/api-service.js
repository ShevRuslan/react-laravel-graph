export default class GhapiService {
    _apiBase = 'http://localhost:8000/api';
    /**
     * @param  {string} url - строка на запрос api
     * @param  {object} data - данные, которые нужно отправить вместе с запросом
     * @param  {string} method - тип поста (POST, GET, PUT, DELETE)
     * @return {Promise}
     */
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
    regUser = async (data) => {
        const res = await this.getResource('/user/register', data, 'POST');
        return res;
    }
}   