<template>
  <h1>{{ title }}</h1>
</template>

<script>
  import { getInfo } from '@/api/demoApi';
  export default {
    data() {
      return {
        title: ""
      }
    },
    async created() {
      let json = await getInfo();
      this.title = json.title;
    }
  }
</script>

<style lang="scss">
</style>
