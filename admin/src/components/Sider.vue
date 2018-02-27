<template>
  <div class="side">
    <nav class="menu" data-ride="menu" style="width: 210px">
      <ul id="treeMenu" class="tree tree-menu" data-ride="tree">
        <router-link to="/" tag="li" exact><a href="#"><i class="icon icon-home"></i>首页</a></router-link>
        <router-link to="/carmanage" exact tag="li"><a href="#"><i class="icon icon-inbox"></i>车辆管理</a></router-link>
        <li>
          <a href="#"><i class="icon icon-time"></i>历史保单</a>
          <ul>
            <li><a href="#">今天</a></li>
            <li><a href="#">明天</a></li>
            <li><a href="#">昨天</a></li>
            <li><a href="#">本周</a></li>
          </ul>
        </li>
        <router-link exact to="/reportfroms" tag="li"><a href="#"><i class="icon icon-table"></i>业务报表</a></router-link>
        <li><a href="#"><i class="icon icon-database"></i>收入统计</a></li>
        <li class="open">
          <a href="#"><i class="icon icon-tasks"></i>机构&账号</a>
          <ul>
            <li>
              <a href="#"><i class="icon icon-circle-blank"></i>已就绪</a>
              <ul>
                <li><a href="#">已取消</a></li>
                <li><a href="#">已关闭</a></li>
              </ul>
            </li>
            <li><a href="#"><i class="icon icon-play-sign"></i>进行中</a></li>
            <li><a href="#"><i class="icon icon-ok-sign"></i>已完成</a></li>
          </ul>
        </li>
        <li><a href="#"><i class="icon icon-edit"></i>修改密码</a></li>
        <li><a href="#"><i class="icon icon-signout"></i>退出登录</a></li>
      </ul>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'jquery'
  export default {}
</script>

<style scoped rel="text/css">

</style>
