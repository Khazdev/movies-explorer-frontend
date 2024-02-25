class Api {
  constructor(options) {
    this.baseurl = options.baseUrl;
    this.headers = options.headers;
  }

  _request(uri, options) {
    const updatedOptions = {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      },
    };
    return fetch(this.baseurl + uri, updatedOptions).then(this._checkResponse);
  }

  getCurrentUser() {
    return this._request(`/users/me`, {
      method: "GET",
      headers: this.headers,
    });
  }

  updateUser(email, name) {
    return this._request(`/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    });
  }

  getMovies() {
    return this._request(`/movies`, {
      method: "GET",
      headers: this.headers,
    });
  }

  createMovie(movieData) {
    return this._request(`/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(movieData),
    });
  }

  deleteMovie(movieId) {
    return this._request(`/movies/${movieId}`, {
      method: "DELETE",
      headers: this.headers,
    });
  }

  signUp(name, email, password) {
    return this._request(`/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    });
  }

  signIn(email, password) {
    return this._request(`/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    });
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then((data) => {
        return Promise.reject({ status: res.status, message: data.message });
      });
    }
  }
}

export const api = new Api({
  baseUrl: "https://api.khazanov.diplom.nomoredomainsmonster.ru",
  headers: {
    "Content-Type": "application/json",
  },
});
