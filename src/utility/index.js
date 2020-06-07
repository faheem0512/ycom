import moment from 'moment';

export function getDomainName(url) {
    return new URL(url).hostname;
}

export function getRelativeTime(timestamp) {
    return moment(timestamp).fromNow()
}

