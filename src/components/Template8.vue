<template>
    <div class="hello">
        <el-container style="height: 500px;background-color: lightpink;">
          <el-aside width="180px" style="background-color: rgba(49,113,250,.5);">
            <el-menu :default-openeds="['1']">
              <!--导航一-->
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"></i>
                  导航一
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">分组二</template>
                  <el-menu-item index="1-1">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2">
                  <template slot="title">
                    选项四
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项4-1</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-submenu>
              <!--导航二-->
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  导航二
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">分组二</template>
                  <el-menu-item index="1-1">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="4">
                  <template slot="title">
                    选项四
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项4-1</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-submenu>
              <!--导航三-->
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  导航三
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                  <template slot="title">分组二</template>
                  <el-menu-item index="1-1">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="6">
                  <template slot="title">
                    选项四
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项4-1</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-container style="background-color: aquamarine">
             <el-header height="60px" style="background-color: bisque;text-align: right; line-height: 55px">
               <el-dropdown trigger="click">
                 <i class="el-icon-setting"></i>
                 <el-dropdown-menu slot="dropdown">
                   <el-dropdown-item>增加</el-dropdown-item>
                   <el-dropdown-item>修改</el-dropdown-item>
                   <el-dropdown-item>删除</el-dropdown-item>
                   <el-dropdown-item>查询</el-dropdown-item>
                 </el-dropdown-menu>
               </el-dropdown>
               <span>设置</span>
             </el-header>

             <el-main style="background:pink;padding:0;">
               <el-table :data="personInfo">
                 <el-table-column prop="name" label="姓名" width="140"></el-table-column>
                 <el-table-column prop="sex" label="性别" width="120"></el-table-column>
                 <el-table-column prop="age" label="年龄"></el-table-column>
                 <el-table-column prop="address" label="地址" width="140"></el-table-column>
                 <el-table-column prop="hobby" label="个人爱好" width="120"></el-table-column>
                 <el-table-column prop="description" label="个人简介"></el-table-column>
               </el-table>
             </el-main>
          </el-container>
        </el-container>
      <router-link :to="{name:'HelloWorld'}">回到Index</router-link>
    </div>
</template>

<script>
    export default {
        name: "Template8",
        data(){
            const personInfo = [{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            },{
                name: 'lizichen',
                sex: '男',
                age: 18,
                address: '江苏省徐州市',
                hobby: '爱音乐',
                description: 'this is  what i wanna do '
            }]
            return {personInfo:personInfo}
        }
    }
</script>

<style scoped>

</style>
