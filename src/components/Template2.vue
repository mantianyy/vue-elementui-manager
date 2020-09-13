<template>
  <div class="hello">
    <!--    <h1>{{ msg }}</h1>-->
    <h1>模板2页面</h1>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple-dark"><router-link :to="{name:'HelloWorld'}">回到Index</router-link></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark">11</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-dark">11</div></el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: 'Template2',
        data () {
            return {
                msg: 'Welcome to Template2'
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
