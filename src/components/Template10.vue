<template>
  <div class="sort">
    <el-dropdown placement="bottom-start" trigger="click" @command="handleCommandSort">
        <span class="el-dropdown-link">
			课程<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
      <el-dropdown-menu slot="dropdown">
        <el-container class="sort-list-container">
          <el-main class="sort-list-main">
<!--            <div class="sort-title" v-text="'课程分类'"></div>-->
            <el-dropdown-item
              v-for="(item, index) in list"
              class="sort-item"
              :key="index">
              <span class="father">
                <span class="children"><img :src="item.url" style="width:40px;height:40px;"></span>
                <span class="children" v-text="item.name"></span>
              </span>
            </el-dropdown-item>
          </el-main>
        </el-container>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1001,name:'Google 账号'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1002,name:'搜索'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1003,name:'地图'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1004,name:'YouTube'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1005,name:'Play'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1006,name:'新闻'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1007,name:'Gmail'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1008,name:'Meet'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1009,name:'通讯录'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1010,name:'云端硬盘'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1011,name:'日历'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1012,name:'翻译'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1013,name:'Google 账号'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1014,name:'搜索'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1015,name:'地图'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1016,name:'YouTube'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1017,name:'Play'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1018,name:'新闻'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1019,name:'Gmail'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1020,name:'Meet'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1021,name:'通讯录'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1022,name:'云端硬盘'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1023,name:'日历'},
                    {url:'https://lh6.googleusercontent.com/-0PYW-z4B4To/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclXeI--bLwbVJgvcpH0XadhFIC_Bg/s96-c-rg-br100/photo.jpg',id:1024,name:'翻译'}
                ]
            }
        },
        methods: {
            /**
             * 点击下拉菜单的分类选项
             * @param e command元素
             */
            handleCommandSort: function (e) {
                console.log(e);
                console.log(list[e]);
            }
        }};

</script>

<style scoped>
  *{
    outline: none;
  }
  div{
    border: none;
  }
  /* 课程分类的下拉菜单 start */
  /* 设置最外层的div */
  .sort {

  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-dropdown {
    font-size: 16px;
  }
  /* 设置弹出框的宽高 */
  .el-dropdown-menu {
    width: 570px;
    height: 300px;
    padding: 10px 20px;
  }
  /* 设置选项样式 */
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

  /* el-container 的设置  */
  .sort-list-container {
    width: 100%;
    height: 100%; /* 高度设置为100%才能让el-main出现垂直滚动条 */
    padding-bottom: 10px;
    overflow-x: hidden;
  }

  .sort-list-main {
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: auto;
    overflow-x: hidden;
  }

  .father{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
