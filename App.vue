<template>
 <scroll-view class="scroll-view">
        
<view class="container">

 <view class="card" v-for="data in data" :key="data.id" >

  <text class="text-color-primary">{{ data.id }}</text>
   <text class="text-color-primary">{{ data.nombre }}</text>
    <text class="text-color-primary">{{ data.apellido }}</text>
     <text class="text-color-primary">{{ data.telefono }}</text>
  
     <button class="button" v-bind:onPress="exclaim" :title="message" />
     <button v-bind:onPress="reset" :title="text" />
  
</view>

  
     
  
 </view>
  </scroll-view>
</template>


<script>
    import axios from "axios";
export default {

created() {
  axios.get("https://prueba-db-001.herokuapp.com/api/clientes").then((result) => {
    console.log(result.data);
    this.data = result.data;
  })
},

  data() {
    return {

data: [ ],

      message: "boton 1",
      text:"boton 2"
    };
  },

  methods: {
    exclaim() {
      this.message += ":)";
    },
    reset(){
   this.message = "Hola mundo";
    alert("texto de prueba");

    }

  },
};
</script>

<style>
.scroll-view {  
  background-color: rgb(255, 255, 255);
  
}
.container {
  flex:1;   
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-left: 5px;
  background-color: rgb(123, 146, 124);
  align-items: center;
  
}
.card {
 
  margin: 1px;
  height: 200px;
  width: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  align-items: center;  
  justify-content: center
}
.text-color-primary {
  color: rgb(0, 0, 0);
  font-size: 20;
}
.button {
  background-color: #41B883;
  font-size: 10;
  border-radius: 20px;
}
</style>