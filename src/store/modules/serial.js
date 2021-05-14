export default {
  state: {
    serials: [],
    filterSerials: []
  },
  actions: {
    async getSerials(ctx) {
      const response = await fetch('http://api.tvmaze.com/schedule')
      const serials = await response.json()
      ctx.commit("updateSerials", serials)
      console.log(serials)
    }
  },
  mutations: {
    updateSerials(state, serials) {
      state.serials = serials
      state.filterSerials = serials
    },
    filtered(state, search) {
      let regexp = new RegExp(search, 'i')
      state.filterSerials = state.serials.filter(serial => regexp.test(serial.name))
    }
  },
  getters: {
    allSerials: state => state.filterSerials
  }
}