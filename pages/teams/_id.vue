<template>
  <div>
    <h1>Team {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import TeamService from '~/services/TeamService'
export default {
  async asyncData({ error, params }) {
    try {
      const { data } = await TeamService.getTeam(params.id)
      return {
        teams: data,
      }
    } catch (err) {
      error({
        statusCode: 503,
        message: `Unable to fetch team ${params.id}`,
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
