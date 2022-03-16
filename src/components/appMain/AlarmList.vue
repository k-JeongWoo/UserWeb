<template>
  <div>
    <h2>alarm List</h2>
    <h2 @click="pageFnt()"> 검사 결과 안내 </h2>
  </div>
</template>

<script>
export default {
  name: 'AlarmList',
  methods: {
    pageFnt () {
      this.$router.push('/alarmDetail')
    }
  }
}
</script>

<style scoped>

</style>
