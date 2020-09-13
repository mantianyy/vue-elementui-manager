<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
    <h1>模板1页面</h1>
    <el-row :gutter="50">
      <el-col :span="6"  style="margin-left:100px;"><div class="grid-content bg-purple-dark" >谁来了?:{{result.id}}</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark">找谁?:{{result.target}}</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark">啥时候来的?:{{result.time}}</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <router-link :to="{name:'HelloWorld'}">回到Index</router-link>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">11</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">11</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">11</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">11</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">11</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">11</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">11</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">11</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'Template1',
    data:function(){
        return {
            msg: 'Welcome to Template2',
            result:this.$route.params

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom:20px
}

.el-row:last-child {
   margin-bottom: 0
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
}
</style>
