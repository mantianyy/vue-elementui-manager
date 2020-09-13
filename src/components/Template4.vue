<template>
  <div class="hello">
    <!--    <h1>{{ msg }}</h1>-->
    <h1>模板4页面</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
            <router-link :to="{name:'HelloWorld'}">回到index</router-link>
        </div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple-dark">
        </div>
      </el-col>
      <el-col :span="6" :offset="6">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple-dark">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: 'Template4',
        data () {
            return {
                msg: 'Welcome to Template4'
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
    /*gutter的本质就是,保持外el-col 的div的长度不变,进行padding,使其el-col padding后变小*/
    border-radius: 4px;
    background-color: green;
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
    background-color: #f9fafc;
  }
</style>
