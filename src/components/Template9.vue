<template>
  <div class="hello">
      <el-container>
          <el-header height="250px"  class="padding-setting el-header">
          <el-main class="padding-setting">
            <el-container>
              <el-header height="62px" class="ell-header-el padding-setting">
                <el-menu class="el-menu-demo" mode="horizontal"
                           active-text-color="#2577E3" >
                  <el-menu-item index="1">首页</el-menu-item>
                  <el-submenu index="2">
                    <template slot="title">酒店</template>
                    <el-menu-item index="2-1">旅游</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="2-4-1">选项1</el-menu-item>
                      <el-menu-item index="2-4-2">选项2</el-menu-item>
                      <el-menu-item index="2-4-3">选项3</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                  <el-menu-item index="3" >消息中心</el-menu-item>
                  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                  <el-menu-item index="5" >消息中心</el-menu-item>
                  <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                  <el-menu-item index="7" >消息中心</el-menu-item>
                  <el-menu-item index="8"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                  <el-menu-item index="9" >消息中心</el-menu-item>
                  <el-menu-item index="10"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                  <el-menu-item index="11" >消息中心</el-menu-item>
                  <el-menu-item index="12"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>

                  <el-menu-item index="13" >消息中心</el-menu-item>
                  <!--样版式下拉框-->
<!--                  <el-dropdown placement="bottom-start" trigger="click" @command="handleCommandSort" style="float:left;line-height:60px;marin-left:20px;">
                    <span class="el-dropdown-link">课程<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i></span>
                    <el-dropdown-menu slot="dropdown">
                      <el-container class="sort-list-container">
                        <el-main class="sort-list-main">
                          <div class="sort-title" v-text="'课程分类'"></div>
                          <el-dropdown-item
                            v-for="(item,index) in menuList2" class="sort-item" :key="index">
                            <span v-text="item"></span>
                          </el-dropdown-item>
                        </el-main>
                      </el-container>
                    </el-dropdown-menu>
                  </el-dropdown>-->
                  <template10 class="el-menu-item-dropdown"></template10>
                  <!--设置下拉框-->
                  <el-dropdown class="el-menu-item-dropdown" trigger="click">
                    <i class="el-icon-setting">设置</i>
                    <el-dropdown-menu  slot="dropdown">
                     <!-- <el-dropdown-item>查看</el-dropdown-item>
                      <el-dropdown-item>新增</el-dropdown-item>
                      <el-dropdown-item>删除</el-dropdown-item>-->
                      <el-dropdown-item v-for="item in menuList" :key="item" >
                        <span v-text="item"></span>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-menu>

              </el-header>
            </el-container>
            <el-carousel :interval="4000" type="card" height="400px">
              <el-carousel-item v-for="item in imgList " :key="item">
<!--                <h3 class="medium">{{ item }}</h3>-->
                    <img :src="item" style=" width: 100%;
                              height: 100%" />
              </el-carousel-item>
            </el-carousel>


            <el-carousel height="900px" direction="vertical" :autoplay="false">
              <el-carousel-item v-for="item in imgList " :key="item">
                <!--                <h3 class="medium">{{ item }}</h3>-->
                <img :src="item" style=" width: 100%;
                              height: 100%"/>
              </el-carousel-item>
            </el-carousel>
          </el-main>
        </el-header>
      </el-container>
  </div>
</template>

<script>
    import template10 from './Template10'
    export default {
        name: "Template9",
        components:{"template10":template10},
        data(){
            return {
                imgList:['/static/img/01.jpg',
                         '/static/img/02.jpg',
                         '/static/img/03.jpg',
                         '/static/img/04.jpg',
                         '/static/img/05.jpg',
                         '/static/img/06.jpg',
                         '/static/img/07.jpg'],
                menuList:['Google 账号',
                          '搜索',
                          '地图',
                          'YouTube',
                          'Play',
                          '新闻',
                          'Gmail',
                          'Meet',
                          '通讯录',
                          '云端硬盘',
                          '日历',
                          '翻译'],
                menuList2:['Google 账号',
                           '搜索',
                           '地图',
                           'YouTube',
                           'Play',
                           '新闻',
                           'Gmail',
                           'Meet',
                           '通讯录',
                           '云端硬盘',
                           '日历',
                           '翻译',
                           'Google 账号',
                           '搜索',
                           '地图',
                           'YouTube',
                           'Play',
                           '新闻',
                           'Gmail',
                           'Meet',
                           '通讯录',
                           '云端硬盘',
                           '日历',
                           '翻译']
            }
        },
        methods: {
            /**
             * 点击下拉菜单的分类选项
             * @param e command元素
             */
            handleCommandSort: function (e) {
                console.log(e);

            }
        }
    }
</script>

<style scoped>

  /*避免点击出现边框,界面很不友好*/
  *{
    outline: none;
  }
  div{
    border: none;
  }

  .hello{
    background-color: #EBEEF5;
  }
  .el-header{
/*    background-color:rgba(49,113,250,.5);*/
  }

  .ell-header-el{
    /*background-color: burlywood;*/
  }

  .padding-setting{
    padding:0;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__button{
    height: 10px;
  }

  /deep/ .el-carousel__button{
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
  }

  .el-menu-item-dropdown:hover{
    cursor: pointer;
  }

  .el-menu-item-dropdown{
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 20px;
    border-bottom: 2px solid transparent;
    color: #909399;
  }

  .el-popper[x-placement^=bottom]{
    margin-top:-10px;
  }


  /*自定义下拉框样式*/
/*
  .sort {
    display: inline-flex;
    width: 50%;
    height: 100%;
    margin-left: 40px;
    justify-content: start;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-dropdown {
    font-size: 16px;
  }
  !* 设置弹出框的宽高 *!
  .el-dropdown-menu {
    width: 570px;
    height: 300px;
    padding: 10px 20px;
  }
  !* 设置选项样式 *!
  .sort-item{
    display: inline-block;
    min-width: 110px;
    padding: 0 10px;
    margin: 10px 12px 2px 0;
    border-radius: 16px;
    line-height: 32px;
    font-size: 14px;
    color: #333333;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }

  .sort-title {
    width: 100%;
    line-height: 18px;
    color: black;
    font-size: 16px;
    text-align: left;
    border-radius: 0;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
  }

  .sort-title:hover {
    background-color: rgba(0, 0, 0, 0) !important;
    color: black !important;
  }

  !* el-container 的设置  *!
  .sort-list-container {
    width: 100%;
    height: 100%; !* 高度设置为100%才能让el-main出现垂直滚动条 *!
    padding-bottom: 10px;
    overflow-x: hidden;
  }

  .sort-list-main {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: auto;
    overflow-x: hidden;
  }
*/



</style>
