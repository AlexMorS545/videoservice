export default {
  state: {
    serials: []
  },
  actions: {
    async getSerials(ctx) {
      const response = await fetch('http://api.tvmaze.com/schedule')
      const serials = await response.json()
      ctx.commit("updateSerials", serials)
      console.log('serials',serials)
    }
  },
  mutations: {
    updateSerials(state, serials) {
      state.serials = serials
    }
  },
  getters: {
    allSerials(state) {
      return state.serials
    }
  }
}