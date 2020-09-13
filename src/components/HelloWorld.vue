<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
            <router-link :to="{name:'Template1',params:{id:'index',target:'找模板一',time:nowTime}}">跳转到模板1</router-link>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple">
        <router-link :to="{name:'Template2'}">跳转到模板2(带参数)</router-link>
      </div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <router-link :to="{name:'Template3'}">跳转到模板3</router-link>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">
        <router-link :to="{name:'Template4'}">跳转到模板4</router-link>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">
        <router-link :to="{name:'Template5'}">跳转到模板5</router-link>
      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">
        <router-link :to="{name:'Template6'}">跳转到模板6</router-link>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple">
        <router-link :to="{name:'Template7'}">跳转到模板7</router-link>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">
        <router-link :to="{name:'Template8'}">跳转到模板8</router-link>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <router-link :to="{name:'Template9'}">跳转到模板9</router-link>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">
        <router-link :to="{name:'Template10'}">跳转到模板10</router-link>
      </div></el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <router-link :to="{name:'Template11'}">跳转到模板11</router-link>
        </div>
      </el-col>
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
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            nowTime:'',
        }
    },
    created() {
        this.nowTimes()
    },
    methods:{
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
            let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
            let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
            let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
            let ss = new Date(timeStamp).getSeconds() < 10 ? "0" + new Date(timeStamp).getSeconds() : new Date(timeStamp).getSeconds();
            this.nowTime = year + "年" + month + "月" + date + "日" + " " + hh + ":" + mm + ':' + ss;
        },
        nowTimes() {
            this.timeFormate(new Date());
            setInterval(this.nowTimes, 1000);
            this.clear()
        },
        clear() {
            clearInterval(this.nowTimes)
            this.nowTimes = null;
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
