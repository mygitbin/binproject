<template>
  <div class="wra">
      <h2>this is homge</h2>
     
        <router-link tag="span" to="/newsman">新闻管理</router-link> 
         <router-link tag="span" to="/newsadd">新闻编辑</router-link>  
        <router-link tag="span" to="/newsDetail">新闻详情</router-link> 
  </div>
</template>

<script>
// @ is an alias to /src

export default {

 
}
</script>
<style scoped>
   h2{
     margin: 10px 0;
   }
  .wra{
    background:rgb(238, 31, 111);;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    width: 100vh;
    text-align: center;
    height: 100px;
  }
  .wra span{
    display: inline-block;
    width: 28vw;
    height: 30px;
    background: rebeccapurple;
    font-size: 20px;
    color: #fff;
    margin-right: 5px;
  }
</style>
