import TeamService from '~/services/TeamService'

export const state = () => ({
  teams: [],
})

export const mutations = {
  SET_TEAMS(state, teams) {
    state.teams = teams
  },
}

export const actions = {
  fetchTeams({ commit }) {
    return TeamService.getTeams().then((response) => {
      console.log(response.data)
      commit('SET_TEAMS', response.data)
    })
  },
}
