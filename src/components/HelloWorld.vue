<template>
  <div class="hello">
    <h1>{{ bilgi }}</h1>
    <button @click="plus">Plus</button>
    <button @click="minus">Minus</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: mapState(['bilgi']),
  methods: {
    plus(){
      // this.$store.state.bilgi++
      this.$store.commit('arti')
    },
    minus(){
      // this.$store.state.bilgi--
      this.$store.commit('eksi')
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
