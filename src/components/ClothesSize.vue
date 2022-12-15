<template>
    <div class="filter">
        <h2 class="heading_size">Sizes :</h2>
         <!-- display the different sizes available -->
        <ul>
            <li  v-for="(size,key) in sizes" :key="key">
              <input data-testid="tester" @click="$emit('sizes',size)" type="checkbox" :id="key" name="check_2" @change="$emit('filter',key)" value="check_2">
              <label :for="key">{{size}}</label>
            </li>
          </ul>
    </div>
</template>
  
<script>
// import '../css/clothsize.css'
  export default{
    name : 'ClothesSize',
    data(){  
    return {
      //All the available sizes from the data
      sizes : ['XS','S','M','ML','L','XL','XXL','X'],
  }},
  }
</script>
<style>
div ul{
    float: left;
}
ul {
    padding: 0;
    margin: 0;
    clear: both;
}

li{
list-style-type: none;
list-style-position: outside;
padding: 10px;
float: left;
}

input[type="checkbox"]:not(:checked), 
input[type="checkbox"]:checked {
position: absolute;
left: -9999%;
}

input[type="checkbox"] + label {
display: inline-block;
padding: 10px;
cursor: pointer;
border: 1px solid rgb(172, 169, 169);
border-radius: 50%;
color: black;
background-color:#ced4da;
margin-bottom: 10px;
width: 45px;
}

input[type="checkbox"]:checked + label {
    border: 1px solid white;
    color: white;
    background-color: black;
}

label{
    font-size: 14px;
}

.heading_size{
    text-align: left;
    font-size: 24px;
    font-weight: bold;
}

.filter{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
