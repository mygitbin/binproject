<template>
 <div>
     <nav-top></nav-top>
     <div v-for="(item, index) in list" :key="index" class="wrapper" @click="add(item)"> 
       <img src="../assets/tuy.png" alt="no">
       <div class="title">{{item.title}}</div>
       <div class="xiao">{{ item.xiao }}</div>
       <div class="time">{{ item.time }}</div>
       <div class="hr"></div>
       <div class="kuai" v-show="item.bool" :key="index">
           <div>查看</div>
           <div>置顶</div>
           <div>删除</div>
       </div>
     </div>
     <div>
         
     </div>
 </div>
  
</template>

<script>
   import navTop from '../components/navTop.vue'

   export default {
       methods:{
           add(item){
               item.bool = !item.bool;
           }
       },
       components: {
           navTop
       },
       data() {
          return {
              bool: false,
              list: [
               {
                   img: '../assets/tuy.png',
                   title: '从零开始学习健身，第15天。参照第一天学习的样子',
                   xiao: '无忧健身器材',
                   time: '2019-08-17',
                   bool:false
               },
               {
                    img: '../assets/tuy.png',
                   title: '从零开始学习健身，第15天。参照第一天学习的样子',
                   xiao: '无忧健身器材',
                   time: '2019-08-17',
                    bool:false
               },
                {
                    img: '../assets/tuy.png',
                   title: '从零开始学习健身，第15天。参照第一天学习的样子',
                   xiao: '无忧健身器材',
                   time: '2019-08-17',
                    bool:false
               },
                {
                    img: '../assets/tuy.png',
                   title: '从零开始学习健身，第15天。参照第一天学习的样子',
                   xiao: '无忧健身器材',
                   time: '2019-08-17',
                    bool:false
               },
           ]
          }
          }
       
       
   }
</script>

<style scoped>
.wrapper{
    margin-top: 5px;
    position: relative;
}
 div img{ 
     width: 80px;
     height: 80px;
     position: absolute;
     top: 5px;
     left: 5px;
 }
 .title, .xiao, .time {
     margin-left: 100px;
 }
 .title {
     float: left;
     font-size: 18px;
     padding-bottom: 15px;
 }
 .xiao{
    font-size: 14px;
    color:rgba(0, 0, 0, 0.6);
 }
 .time {
     position: absolute;
     bottom: 10px;
     right: 10px;
     font-size: 14px;
    color:rgba(0, 0, 0, 0.6);
 }
 .hr{
     border-bottom: 1px solid rgb(128, 124, 124);
     padding: 5px 0;
 }
 .kuai{
     position: absolute;
     right:0;
     top: 0;
     width: 270px;
     height: 100%;
 }
 .kuai div{
     width: 90px;
     float:left;
     background: orange;
     height: 100%;
     margin-top:-3px;
     color: white;
     line-height: 93px;
     text-align: center;
 }
 .kuai div:nth-child(2){
     background:rgb(221, 226, 215);
 }
 .kuai div:nth-child(3){
     background:red;
 }

</style>