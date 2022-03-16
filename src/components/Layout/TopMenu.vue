<template>
  <div style="display: inline-flex">
    <h2 @click="pageFnt('menu')"> << </h2>  top  <h2 @click="pageFnt('alarm')"> >> </h2>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data () {
    return {

    }
  },
  methods: {
    pageFnt (val) {
      if (val === 'menu') {
        alert('레프트메뉴 활성화')
      } else {
        this.$router.push('/alarmList')
      }
    }
  }
}
</script>

<style scoped>

</style>
