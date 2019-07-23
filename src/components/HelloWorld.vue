<template>
  <div>
 
      <viewer :options="options">
      <div style="position: absolute">
      <img class="map" src="../assets/Osan5.png"> 
      <HelloWorld3> </HelloWorld3>  
      </div>
      </viewer>
      

  </div>
</template>

<script>
const width = 1000;
const height = 1000;
import HelloWorld3 from '../components/HelloWorld3.vue';

export default {
  
  name: 'HelloWorld',
  components:{
    HelloWorld3
  },
 
  options:{
    zindex: 5,
    title: 2,
    movable: true,
    loop: false,
    initialViewIndex: 2,
    zoomable: true,
    fullscreen: true
   
  },
  itited(viewer){
    this.$viewer = viewer;
  },
  data() {
    return {
      msg:'hello',
      stageSize: {
        width: width,
        height: height
      },
      image: null,

      configKonva: {
        width: 1000,
        height: 1000
      },

          }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.map {
  float:left;
  position: relative;
  width: 1000px;
  height: 1000px;

}





</style>
