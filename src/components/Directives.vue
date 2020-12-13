<template>
  <section>
    <h2>Директивы</h2>
    <div>
      <div v-after-loop="lang.length">
        <p v-for="(val,i) in lang"
           :key="i"
        >{{val}}</p>
      </div>
      <button @click="showText">Show text</button>
    </div>
    <div>
      <div v-img-preloader="srcImg"></div>
    </div>
  </section>
</template>

<script>
import afterLoop from '@/assets/js/directives/afterloop'
import imgPreloader from '@/assets/js/directives/imgpreloader'
export default {
  name: "Directives",
  directives: {
    afterLoop, imgPreloader
  },
  data(){
    return{
      lang: [],
      srcImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JI_p10V2rUX-fZinJ9rkrAeJmxkSrQiPGw&usqp=CAU'
    }
  },
  methods: {
    showText(){
      setTimeout(()=> {
        this.lang = ['RU', 'UA', 'EN']
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>