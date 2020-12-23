import axios from 'axios'

const apiClient = axios.create({
  baseUrl:
    'https://dev132-cricket-live-scores-v1.p.rapidapi.com/teamplayers.php',
  headers: {
    'x-rapidapi-key': process.env.VUE_APP_CLS_APIKEY,
    'x-rapidapi-host': process.env.VUE_APP_CLS_API_HOST,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
})

export default {
  getTeams() {
    return apiClient.client.get('/teams')
  },
  getTeam(id) {
    return apiClient.get(`/teams/${id}`)
  },
}
