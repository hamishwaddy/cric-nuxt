<template>
  <div>
    <h1>Teams page</h1>
    <TeamCard />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TeamCard from '~/components/TeamCard'
export default {
  components: { TeamCard },
  async fetch({ store, error }) {
    try {
      await store.dispatch('teams/fetchTeams')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch teams',
      })
    }
  },
  computed: mapState({
    teams: (state) => state.teams.teams,
  }),
  head() {
    return {
      title: 'Teams page',
    }
  },
}
</script>

<style lang="scss" scoped></style>
