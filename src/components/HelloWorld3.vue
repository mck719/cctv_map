<template>
  <div>
        <div style="position: absolute">
        <img class="cctv" src="../assets/cctv2.png" v-for="location in locations" v-bind:key="location.id"
        :style="{ left: ((((location.longitude-127.007)*1000))*1000/87)+'px' , top: 1000-(((location.latitude-37.1250)*10000)*4/3)+'px'}" >
       </div>
      
  </div>
</template>

<script>
export default{
  name:"HelloWorld3",

  props:{
    msg: String
  },
  data(){
    return {
      locations : [{id: 1, latitude:37.125, longitude:127.003},{id: 2,latitude:37.1274, longitude:127.077}, {id: 3,latitude:37.1979, longitude:127.058},
      {id: 4,latitude:37.1742, longitude:127.007},{id: 5,latitude:37.1522, longitude:127.09}]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cctv{
  float:left;
  position: absolute;
}
</style>
