import cookie from 'react-cookies';

let dummy = "http://localhost:3000/track/5Qsp8mtshe70DX7EYbWZGo?si=jpcMh9m4SCqQOKfNBPf3Yw"

function handleFetchErrors(response) {
    console.log("damn")
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function getSpotifyTrackID() {
    let a = window.location.hash.indexOf("=")
    let b = window.location.hash.indexOf("&")
    let hash = window.location.hash.substring(a+1, b);
    if (hash === "") {
        // If there's no hash yet, go get a hash.
        if (window.location.pathname.substring(0, 10) !== "/callback/") {
            cookie.save('lastvisited', window.location.pathname, {path: '/'});
        } 
        window.location.replace('https://accounts.spotify.com/authorize?client_id=ace3d22c8c11462195389df4b22e4a7c&response_type=token&redirect_uri='
        + encodeURIComponent(window.location.origin + "/callback/").toString())
    } else {
        let key = window.location.pathname.substring(0, 10);
        if (key === "/callback/") {
            // Second run through
            console.log("lol")
            console.log(cookie.load('lastvisited'));
            window.location.replace(window.location.origin + cookie.load('lastvisited') + window.location.hash)
        } else {
            // Third run through
            console.log(cookie);
            return fetch('https://api.spotify.com/v1/tracks/' + cookie.load('lastvisited').substring(7,29), {
                headers: {
                    'Authorization': 'Bearer ' + hash
                }
            }).then(handleFetchErrors)
            .then( response => response.json())
            .then(data => {return [true, data]})
            .catch(error => {return [false, error]})
        }
    }
}
    // TODO: handle user rejection

export default getSpotifyTrackID;