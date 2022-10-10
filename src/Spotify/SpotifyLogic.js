// Spotify auth URL with redirect and scopes

export const spotifyAuth =
  "https://accounts.spotify.com/authorize?client_id=f63cf053c027456498b653ac3c39465a&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-playback-state%20app-remote-control%20user-modify-playback-state%20user-follow-modify%20user-follow-read%20user-read-currently-playing%20user-read-playback-position%20user-read-email%20user-top-read%20streaming%20user-read-recently-played%20user-read-private%20user-library-read";

// Get code from URL

export const code = new URLSearchParams(window.location.search).get("code")
