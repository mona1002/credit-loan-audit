<template>
  <div class="specialQT">

  </div>
</template>
<script>
export default {
      watch: {
      '$route' (to, from) {
        if (to.fullPath !== from.fullPath) {
          this.toinner();
        }
      }
    },
}
</script>

<style scoped>

</style>
