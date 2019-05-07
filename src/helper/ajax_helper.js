import $ from 'jquery';

const BASE_URL = 'https://books-by-suyashkale.herokuapp.com/APIs/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNyIsImlhdCI6MTU1NjUyOTg4Nn0.jVt7JjTH0yr8hSwG5x2Rp06GFD9eRsnLejdFJt6hHXk';

export const ajaxHelper = ({ type, contentType, dataType, url, data, postUrl })=> {
    url = BASE_URL + url;
    if (type === 'POST' || type === 'PUT') {
        if (!data) { data = {}; }
        data.token = TOKEN;
    } else { // GET;
        url = url + `?token=${TOKEN}`;
    }
    if (postUrl) {
        url = url + postUrl;
    }
    let ajax = $.ajax({
        type: (type || 'GET'),
        contentType: (contentType || 'application/json'),
        dataType: (dataType || 'json'),
        url: url,
        data: (data ? JSON.stringify(data) : undefined)
    });
    ajax.then(({ m })=> {
        if (m && m.length) {
            alert(m.join(', '));
        }
    });
    return ajax;
}