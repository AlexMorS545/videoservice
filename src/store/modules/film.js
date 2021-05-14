export default {
  state: {
    films: [],
    filterFilms: []
  },
  actions: {
    async getFilms(ctx) {
      const response = await fetch('http://api.tvmaze.com/shows')
      const films = await response.json()
      ctx.commit('updateFilms', films)
    }
  },
  mutations: {
    updateFilms(state, films) {
      state.films = films
      state.filterFilms = films
    },
    filtered(state, search) {
      let regexp = new RegExp(search, 'i')
      state.filterFilms = state.films.filter(film => regexp.test(film.name))
    }
  },
  getters: {
    allFilms: state => state.filterFilms,
    filmById: state => id => state.films.find(film => film.id === id),
  }
}
// https://api.kinopoisk.cloud/movies/all/token/d80e6e08a7474373ed25a732e28ee03c
// http://api.tvmaze.com/shows