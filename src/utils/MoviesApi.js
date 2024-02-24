class MoviesApi {
  constructor(options) {
    this.baseurl = options.baseUrl;
    this.headers = options.headers;
  }

  _request(uri, options) {
    return fetch(this.baseurl + uri, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  searchMovies() {
    return this._request(`/beatfilm-movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

