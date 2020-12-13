<template>
  <div id="app">
<!--    <Directives/>-->
<!--    <SliderImg/>-->
    <h1 ref="head">{{activeBtn}}</h1>
    <div class="tabsBtn">
      <btn-mixin v-for="(val, i) in tabs"
                 :key="i"
                 :label="val"
                 :class="{active: activeBtn == val}"
                 @mixinEvent="btnMixinHandler(curTab = i)"
      ></btn-mixin>
    </div>
    <component :is="curTab"></component>
  </div>
</template>

<script>

import Directives from "./components/Directives";
import SliderImg from "./components/SliderImg";
import BtnMixin from "./components/BtnMixin";
export default {
  name: 'App',
  components: {
    BtnMixin,
    Directives,
    SliderImg
  },
  data(){
    return{
      curTab: 'directives',
      tabs: {
        directives: 'Directives',
        sliderImg: 'Slider',
      },
      activeBtn: 'Directives',
    }
  },
  methods: {
    btnMixinHandler() {
      console.log(`Hello from App component`)
      this.activeBtn == this.tabs.directives ? this.activeBtn = this.tabs.sliderImg : this.activeBtn = this.tabs.directives
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
button.active{
  background: bisque;
}
</style>
