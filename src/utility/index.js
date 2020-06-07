import moment from 'moment';

export function getDomainName(url) {
    return new URL(url).hostname;
}

export function getRelativeTime(timestamp) {
    return moment(timestamp).fromNow()
}

export function setInStorage(key,value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);  // eslint-disable-line
    }
}

export function getFromStorage(key){
    try {
        const item = window.localStorage.getItem(key);
        return JSON.parse(item);
    } catch (e) {
        console.log(e); // eslint-disable-line
    }
}
