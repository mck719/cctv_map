<template>
  
  <div>
    <span style="position:absolute; z-index:4; left:5.5px; top:60px">Hello</span>
      <div class="box" style = "float: top; line-height:0">
        <img class="map" id="he" src="../assets/Osan5.png" style="position:absolute ">
      </div>
       <!-- <div style = "float:left; position:absolute">
        <img class="cctv" src="../assets/cctv2.png" v-for="location in locations" v-bind:key="location.id"
        :style="{left: (location.longitude-127)*1000*image.width/100+'px', top: image.height - ((location.latitude-37.125)*10000*(image.height/750))+'px'}" >
      </div>  -->
      <!-- left: ((((location.longitude-127.007)*1000))*window.width/87)+'px' , 
      top: 1000-(((location.latitude-37.1250)*10000)*window.height/750)+'px' -->
      <div style="position: fixed; top: 0; z-index:3">
      <button style = "position: relative"  @click="zoomin" > zoomin</button>
      <button style = "position:) relative"  @click="zoomout" > zoomout</button>
      <button style = "position: relative"  @click="zoomL" >left </button>
      <button style = "position: relative"  @click="zoomR" >right </button>
      <button style = "position: relative"  @click="zoomUp" > up</button>
      <button style = "position: relative"  @click="zoomDo" > down</button>
        Width: {{ window.width }},
        Height: {{ window.height }},
        ImageWidth: {{ image.width }},
        ImageHeight: {{ image.height }}

      </div>
      
      
  </div>
</template>

<script>

export default {
  
  name: 'HelloWorld',
  watch :{
      image : function(){
        var temp = document.getElementsByClassName('cctv').style;
   
    }
  },
  methods: {
    zoomDo: function(){
      this.Ver-=this.Scale;
      var temp = document.getElementById("he").style;
      temp.bottom= " "+this.Ver+"px"+" ";
      temp.transitionDuration="500ms";
 
    },

    zoomUp: function(){
      this.Ver+=this.Scale;
      var temp = document.getElementById("he").style;
      temp.bottom= " "+this.Ver+"px"+" ";
      temp.transitionDuration="500ms";
    },
    zoomL: function(){
      this.Hor+=this.Scale;
      console.log(this.Hor)
      var temp = document.getElementById("he").style;
      temp.left= " "+this.Hor+"px"+" ";
      temp.transitionDuration="500ms";

       temp.transitionDuration="500ms";

      // this.num+=0.01;
    },
    zoomR: function(){
      this.Hor-=this.Scale;
      var temp = document.getElementById("he").style;
      temp.left= " "+this.Hor+"px"+" ";
      temp.transitionDuration="500ms";
      
      
    },
    zoomout: function(){
      
      if(this.num>1){
      this.num-=0.05;
      console.log(this.num);
      var temp = document.getElementById("he").style;
      temp.webkitTransformOrigin="  50+"+this.Hor+"px"+" 50+"+this.Ver+"px"+" ";
      temp.transitionTimingFunction = "ease"
      
      temp.transitionDuration="200ms";
      temp.transform="scale("+this.num+")";
      }
    },
    zoomin: function(){
      this.num+=0.05;
      console.log(this.num);
      var temp = document.getElementById("he").style;
      temp.webkitTransformOrigin="  50+"+this.Hor+"px"+" 50+"+this.Ver+"px"+" ";
      temp.transitionTimingFunction = "ease"
      
      temp.transitionDuration="200ms";
      temp.transform="scale("+this.num+")";
      

    },

    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      this.image.width = document.getElementById("he").width;
      this.image.height = document.getElementById("he").height;
      // if(this.image.height> 900) 
      //   this.image.height = window.innerHeight;
   }
  },
  data(){
    return {
      
      Hor: 50,
      Ver: 50,
      Scale:50,
      num: 1,
      
      image: {width:0, height:0},
      window:{ width: 0, height: 0},
      locations : [{id: 1, latitude:37.1979, longitude:127.058},
      {id: 3,latitude:37.1274, longitude:127.077}, 
      {id: 4,latitude:37.1742, longitude:127.007},
      {id: 2,latitude:37.1522, longitude:127.090}]
    }
  },

  created(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    temp.webkitTransformOrigin="50% 50%";
    
  },
  updated(){
    console.log("update"); 
  },

  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  transform-origin: 50% 50%;
  display: inline;
  padding: 0%;
  margin: 0%;
  border:0%;
}
.map {

  float:top;
  min-height: auto; min-width: 100%;  
  width: 100%; height: auto; 
  max-width: 100%;
  max-height: auto;
  white-space: nowrap;
  overflow-y:scroll;
  /* -webkit-transform-origin-x: 50%;
  -webkit-transform-origin-y: 50%; */
  z-index: 0;
 

}
.box {
  width:5000px;
  height:5000px;
  z-index: 3;
  white-space: nowrap;
}

.cctv{
position:absolute; 
z-index:4; 
left:5.5px; 
top:60px
}

</style>

