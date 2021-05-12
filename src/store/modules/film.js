export default {
  state: {
    films: []
  },
  actions: {
    async getFilms(ctx) {
      const response = await fetch('http://api.tvmaze.com/shows')
      const films = await response.json()
      ctx.commit('updateFilms', films)
      console.log(films);
    }
  },
  mutations: {
    updateFilms(state, films) {
      state.films = films
    }
  },
  getters: {
    allFilms: state => state.films,
    filmById: state => id => state.films.find(film => film.id === id),
  }
}

// https://api.kinopoisk.cloud/movies/all/token/d80e6e08a7474373ed25a732e28ee03c
// http://api.tvmaze.com/shows