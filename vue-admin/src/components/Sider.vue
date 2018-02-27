<template>
  <div class="side">
    <el-menu :default-active="num" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <router-link to="/" tag="div" exact>
        <el-menu-item index="1" @click="changeSub"><i class="el-icon-menu"></i>首页</el-menu-item>
      </router-link>
      <router-link to="/carmanage" tag="div">
        <el-menu-item index="2"><i class="el-icon-menu"></i>车辆管理</el-menu-item>
      </router-link>
      <router-link to="/reportfroms" tag="div">
        <el-menu-item index="3"><i class="el-icon-menu"></i>业务报表</el-menu-item>
      </router-link>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>      
      <el-menu-item index="5"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-setting"></i>导航三</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-setting"></i>导航三111</el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['num'],
    methods: {
      changeSub() {
        this.$emit('change')
      }
    }
  }
</script>

<style scoped rel="text/css">
  .el-menu{
    background: #f6fafd;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .el-menu-item,.el-submenu{padding:0;border-bottom:1px solid #ddd}
</style>
