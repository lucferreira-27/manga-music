const SpotifyWebApi = require('spotify-web-api-node');

const {SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET} = process.env;
const spotifyApi = new SpotifyWebApi({
    clientId: SPOTIFY_CLIENT_ID,
    clientSecret: SPOTIFY_CLIENT_SECRET,
    redirectUri: 'http://localhost:3000/callback'
});


module.exports = spotifyApi