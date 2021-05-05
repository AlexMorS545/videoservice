export default {
  state: {
    films: []
  },
  
  actions: {
    async getFilms(ctx) {
      const response = await fetch('http://api.tvmaze.com/shows/1/episodes')
      const films = await response.json()
      ctx.commit("updateFilms", films)
      console.log('films', films)
    }
  },
  mutations: {
    updateFilms(state, films) {
      state.films = films
    }
  },
  getters: {
    allFilms(state) {
      return state.films
    }
  }
}
//http://api.tvmaze.com/shows/1/episodes