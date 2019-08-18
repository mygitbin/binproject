<template>
  <div class="addlist">
    <p class="title">标题：<input type="text" placeholder="请输入标题"> </p>
    <p class="decs">简介：<input type="text" placeholder="请输入简介"> </p>
    <p class="content"><em>内容：</em><textarea  rows="6" cols="40" placeholder="请输入内容"></textarea> </p>
    <div class="addimg">
        <div class="addtitle">添加图片</div>
        <div class="imgpng">
            <img src="../assets/企业平台.png" alt="">
            <img src="../assets/企业平台.png"   alt="">
            <img src="../assets/add.png" alt="">
        </div>
    </div>
  </div>
</template>

<style>
  .addlist > p {
     height: 8vh;
     line-height: 8vh;
     border-bottom: 1px solid rgb(219, 202, 202);
     font-size: 16px;
     color: rgb(37, 37, 37);
     padding-left: 10px;
  }
  p > input {
      width: 70vw;
      height: 5vh;
      border: none;
      padding-left: 20px;
  }
  em {
      position: relative;
      bottom: 75px;
      font-style:normal;
      
  }
  p.content {
        height: 15vh;
        margin-top: 10px;
  }
   textarea{
        border: none;
          padding-left: 20px;
   }

  .addimg .addtitle{
    padding-top: 15px;
    padding-left: 10px;
  }
  .imgpng img{
      margin: 5px;
  }
  .imgpng img:hover{
      opacity: 0.7;
      background-image:url('../assets/删除.png');
  }
</style>