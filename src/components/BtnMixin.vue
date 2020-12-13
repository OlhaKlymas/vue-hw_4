<template>
  <button :type="type" @click="btnMixinHandler(clickHandlerMixin)">{{label}}</button>
</template>

<script>
import btnMixin from "../assets/js/mixins/btnMixin";
export default {
  name: "BtnMixin",
  mixins: [
    btnMixin
  ],

  methods:{
    clickHandlerMixin(){
      console.log(`Hello from BtnMixin component`)
    }
  }
}
</script>

<style scoped>

</style>