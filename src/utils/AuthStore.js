import createStore from 'react-auth-kit/createStore';

export const store = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
});

export function formatDateTime(isoDateString) {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', {
        weekday: 'long', // "Monday"
        year: 'numeric', // "2024"
        month: 'long', // "April"
        day: 'numeric' // "22"
    }) + ' at ' + date.toLocaleTimeString('en-US', {
        hour: '2-digit', // "16"
        minute: '2-digit', // "00"
        second: '2-digit' // "06"
    });
}