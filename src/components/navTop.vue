<template>
  <div class="navbar">
     <router-link class="navleft list" to="/" tag="div">&lt;</router-link>
     <router-view></router-view>
     <div class="navcenter list">新闻管理</div>
     <div class="navright list">添加</div>
  </div>
</template>

<script>

</script>

<style scoped>
    .navbar {
        width: 100vw;
        height: 10vh;
        background-color: rgb(238, 31, 111);
        position: relative;
    }
    .list {
        display: inline-block;
        font-size: 20px;
        line-height: 10vh;
       
        color: white;
    }
    .navleft {
        font-weight: 500;
        font-size: 30px;
        padding-left: 20px;
        cursor: pointer;
    }
    .navcenter {
        position: absolute;
        top:0;
        left: 50%;
        transform: translateX(-50%);
    }
    .navright{
        float: right;
        padding-right: 20px;
    }
</style>