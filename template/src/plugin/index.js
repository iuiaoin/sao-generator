import { getUrlQuery } from '@/../util/tools';

export default {
  install(Vue, options) {
    Vue.mixin({
      beforeCreate() {
        this.$query = getUrlQuery();
      },
      data() {
        return {
          $query: {}
        }
      }
    })
  }
}