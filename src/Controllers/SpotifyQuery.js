const accessToken = "ace3d22c8c11462195389df4b22e4a7c";

function getSpotifyTrackID() {
    let url = window.location.pathname;
    let id = url.substring(7, 29)
    console.log(id);

    fetch('https://api.spotify.com/v1/tracks/' + id, {
        headers: {
            'Authoriziation': 'Bearer ' + accessToken
        }
    }).then( response =>
        response.json()
    ).then(
        data => console.log(data)
    )
}

export default getSpotifyTrackID;