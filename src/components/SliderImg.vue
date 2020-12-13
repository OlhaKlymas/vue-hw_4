<template>
  <section>
    <h2>Слайдер котиков</h2>
      <transition-group name="load" tag="div" class="slider">
          <div v-for="slide in slides"
               :key="slide"
               v-img-preloader="slide"
               class="slide">
          </div>
      </transition-group>
      <div class="btn-group">
        <button @click="prev" :disabled="disabledPrev">Prev</button>
        <span>Slide {{indexImg+1}}</span>
        <button @click="next" :disabled="disabledNext">Next</button>
      </div>
  </section>
</template>

<script>
import imgPreloader from '@/assets/js/directives/imgpreloader'
export default {
  name: "SliderImg",
  directives: {
   imgPreloader
  },
  created(){
    this.slides.push(this.images[this.indexImg])
  },
  computed:{

  },
  data(){
    return{
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqkBdG09OiZxdFYVERkYbVXsnMlfZ72jOlg&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KJzXHAmLUUbg7NNmXOjR-ProYlGWGUpvjA&usqp=CAU',
        'no-photo',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JI_p10V2rUX-fZinJ9rkrAeJmxkSrQiPGw&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPSYFk1tEjz7dBONMjDbeMHsnqvGdItDVHA&usqp=CAU'
      ],
      slides: [],
      indexImg: 0,
      disabledPrev: true,
      disabledNext: false
    }
  },
  methods:{
    prev(){
      this.slides.length = 0
      this.disabledPrev = false
      this.disabledNext = false
      if(this.indexImg >= 0){
        this.indexImg--
        this.slides.push(this.images[this.indexImg])
        if(this.indexImg === 0){
          this.disabledPrev = true
        }
      }
    },
    next(){
      this.slides.length = 0
      if(this.indexImg < this.images.length-1) {
        this.indexImg++
        this.disabledNext = false
        this.disabledPrev = false
        this.slides.push(this.images[this.indexImg])
        if(this.indexImg === this.images.length-1){
          this.disabledNext = true
        }
      }
    }
  }
}
</script>

<style>
section{
  overflow: hidden;
}
.slider{
  height: 250px;
}
button {
  margin: 20px 0;
}
.btn-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin: auto;
}
.load-enter-active, .load-leave-active {
  transition: .5s;
}
.load-enter, .load-leave-to {
  opacity: 0;
  transform: translateX(20%);
}
</style>