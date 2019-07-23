<template>
  <div>
      <!-- <viewer :options="options">
      <div>
      <div style="position: absolute">
        <img class="map" src="../assets/Osan5.png"> 
      </div>
      
      <div style="position: absolute">
        <img class="cctv" src="../assets/cctv2.png" v-for="location in locations" v-bind:key="location.id"
        :style="{ left: ((((location.longitude-127.007)*1000))*1000/87)+'px' , top: 1000-(((location.latitude-37.1250)*10000)*4/3)+'px'}" >
       </div>
      </div>
      </viewer> -->
      <v-stage :config="configKonva">
  <v-layer>
      <v-circle :config="configCircle"></v-circle>
  </v-layer>
  </v-stage>
       <!-- <div>
      <viewer :images="this.images" :options="options" @inited="inited">
        <img class="gallary_image" v-for="image in this.images" :src="image" :key="image" />
    </viewer>
    </div> -->
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
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
      configKonva: {
        width: 200,
        height: 200
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4
      },
      locations : [{id: 1, latitude:37.125, longitude:127.003},{id: 2,latitude:37.1274, longitude:127.077}, {id: 3,latitude:37.1979, longitude:127.058},
      {id: 4,latitude:37.1742, longitude:127.007},{id: 5,latitude:37.1522, longitude:127.09}]
    }
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

.cctv{
  float:left;
  position: absolute;
}



</style>
